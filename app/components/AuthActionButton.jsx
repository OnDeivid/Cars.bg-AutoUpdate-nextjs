import Link from 'next/link';

import { auth, signOut } from '@/auth';
import { endpoints } from '../CONST';
import UserImage from './UserImage';


export default async function AuthActionButton() {
    const session = await auth();

    return (
        <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex items-center md:text-wrap text-xs md:justify-center space-x-2">
            {session?.user ? (
                <>
                    {/* <img className="w-7 h-7 rounded-full" src={session.user.image} alt="Rounded avatar"></img> */}
                    <UserImage image={session.user.image} />
                    <form action={async () => {
                        'use server'
                        await signOut({ redirectTo: endpoints.home })
                    }}>
                        <button className="cursor-pointer text-gray-300 hover:text-white hover:underline pl-3 pr-3 pt-2 pb-2 font-semibold tr04 uppercase">
                            изход
                        </button>
                    </form>
                </>
            ) : (
                <Link href={endpoints.login} className="cursor-pointer text-gray-300 hover:text-white hover:underline pl-3 pr-3 pt-2 pb-2 font-semibold tr04 uppercase">
                    влез
                </Link>
            )}
        </div>
    );
}
