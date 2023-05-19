import React, {ChangeEvent, FormEvent} from 'react';
import s from './Login.module.css'
import {useLoaderData} from "react-router-dom";

export function loader(params: any) {
    const req = params.request
    return new URL(req.url).searchParams.get("message")
}

const Login = () => {

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData() as string

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(loginFormData)
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
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">{message}</h2>}
            <form onSubmit={handleSubmit} className={s.loginForm}>
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
                <button>Log in</button>
            </form>
        </div>
    )


};

export default Login;