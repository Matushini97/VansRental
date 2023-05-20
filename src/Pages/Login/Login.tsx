import React from 'react';
import s from './Login.module.css'
import {Form, redirect, useActionData, useLoaderData, useNavigation} from "react-router-dom";
import {loginUser} from "../../api";

export function loader(params: any) {
    const req = params.request
    return new URL(req.url).searchParams.get("message")
}

export async function action(obj: any) {
    const request = obj.request
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", JSON.stringify(true))
        return redirect(pathname)
    } catch(err: any) {
        return err.message
    }
}
const Login = () => {
    const errorMessage = useActionData() as string
    const message = useLoaderData() as string
    const navigation = useNavigation()


    return (
        <div className={s.loginContainer}>
            <h2>Sign in to your account</h2>
            {message && <h2 className="red">{message}</h2>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <Form method="post" replace className={s.loginForm}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting"
                    ? "Logging in..." : "Log in"}</button>
            </Form>
        </div>
    )


};

export default Login;