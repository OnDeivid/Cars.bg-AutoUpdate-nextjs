// pages/HeaderUserState.js (server-side component)
import { auth, signOut } from '@/auth';
import Link from 'next/link';

export default async function AuthActionButton() {
    const session = await auth(); // Fetch server-side authentication state
    return (
        <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-xs md:justify-center space-x-2">
            {session?.user ? (
                <form action={async () => {
                    'use server'
                    await signOut({ redirectTo: '/' })
                }}>
                    <button className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:bg-gray-800 pl-3 pr-3 pt-2 pb-2 font-semibold tr04 uppercase">
                        logout
                    </button>
                </form>
            ) : (
                <Link href='/login' className="cursor-pointer text-gray-300 hover:text-white hover:underline hover:bg-gray-800 pl-3 pr-3 pt-2 pb-2 font-semibold tr04 uppercase">
                    login
                </Link>
            )}
        </div>
    );
}
