import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from './Login.module.css'
import {Form, useLoaderData} from "react-router-dom";
import {loginUser} from "../../api";

export function loader(params: any) {
    const req = params.request
    return new URL(req.url).searchParams.get("message")
}

export async function action() {
    console.log("Action function")
    return null
}

const Login = () => {

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
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

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className={s.loginContainer}>
            <h2>Sign in to your account</h2>
            {message && <h2 className="red">{message}</h2>}
            {error && <h3 className="red">{error.message}</h3>}
            <Form method="post" className={s.loginForm}>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>{status === "submitting"
                    ? "Logging in..." : "Log in"}</button>
            </Form>
        </div>
    )


};

export default Login;