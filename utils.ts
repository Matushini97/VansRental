import { redirect } from "react-router-dom"

export async function requireAuth() {
    // @ts-ignore
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }
}