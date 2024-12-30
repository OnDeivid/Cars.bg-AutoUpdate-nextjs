import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export default async function UserImage({ image }) {
    const session = await auth()
    return (
        <div>
            <Link href={session?.user?.userDataCars?.carsEmail ? "/Settings" : "/"} passHref>
                <Image id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-7 select-none h-7 rounded-full cursor-pointer" src={image} width={100} height={100} alt="User dropdown" />
            </Link>
            <div id="userDropdown" className="z-8 flex right-4 absolute sm:-mt-4 md:mt-2 lg:mt-2 xl:mt-4 mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-custom-gray dark:divide-gray-200">
                {session?.user && session?.user?.userDataCars?.carsEmail ?
                    <ul className="py-2 text-sm text-gray-700 dark:text-custom-white" aria-labelledby="avatarButton">
                        <li>
                            <Link href="/Settings" className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-custom-input-color select-none duration-500 dark:hover:text-custom-gray">Настройки</Link>
                        </li>
                    </ul>
                    : null}
            </div>
        </div >
    )
}
