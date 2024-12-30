import { redirect } from "next/navigation"
import { endpoints } from "./CONST"
const { auth } = require("@/auth")

async function Unauthenticated() {
    const session = await auth()

    if (!session || !session?.user) {
        redirect(endpoints.login)
    }
    return null
}

async function Authenticated() {
    const session = await auth()

    if (session || session?.user) {
        redirect(endpoints.home)
    }
    return null
}

async function CarsAuthenticated() {
    const session = await auth()

    if (!session || !session?.user || !session?.user.userDataCars.carsEmail) {
        redirect(endpoints.home)
    }
    return null
}

export { Unauthenticated, Authenticated, CarsAuthenticated }
