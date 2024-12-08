import { cookies } from 'next/headers';


export async function POST(req) {
    if (req.method === 'POST') {
        const { provider } = await req.json();
        console.log(provider)
        const cookieStore = await cookies();
        cookieStore.set('provider', provider, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 }); // Set cookie for 1 day.

        return new Response(JSON.stringify({ message: 'we good' }), { status: 201 });

    }

    return new Response(JSON.stringify({ message: 'we bad!' }), { status: 201 });
}
