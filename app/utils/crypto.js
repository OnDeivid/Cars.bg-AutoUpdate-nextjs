import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.HiddenKey
const ALGORITHM = 'aes-256-cbc';

export async function encryptPassword(password) {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);

    let encrypted = cipher.update(password, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return `${iv.toString('base64')}:${encrypted}`;
}

