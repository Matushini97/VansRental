import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './Login.module.css'
import {Form, redirect, useLoaderData} from "react-router-dom";
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
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", JSON.stringify(true))
    return redirect("/host")
}

const Login = () => {
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState<null | {code: number, headers: any, message: string}>(null)
    const message = useLoaderData() as string

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => console.log(data))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }


    return (
        <div className={s.loginContainer}>
            <h2>Sign in to your account</h2>
            {message && <h2 className="red">{message}</h2>}
            {error && <h3 className="red">{error.message}</h3>}
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
                <button disabled={status === "submitting"}>{status === "submitting"
                    ? "Logging in..." : "Log in"}</button>
            </Form>
        </div>
    )


};

export default Login;