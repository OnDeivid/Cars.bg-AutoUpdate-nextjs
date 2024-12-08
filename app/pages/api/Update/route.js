import { auth } from "@/auth";

export async function GET(req) {
    try {
        const session = await auth();

        if (!session || !session.user || !session.user.email) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }
        const email = session.user.email;
        const updateResponse = await fetch(`${process.env.API_URL || 'http://localhost:3001'}/update/${email}`, {
            method: 'GET',
        });

        if (!updateResponse.ok) {
            console.log('ooopsy there is a problem')
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error in GET handler:", error);
        return new Response(JSON.stringify({ error: error.message || "An error occurred" }), { status: 500 });
    }
}
