import React from 'react';
import s from './Login.module.css'
import {Form, Link, redirect, useActionData, useLoaderData} from "react-router-dom";
import {signinUser} from "../../api";


export function loader(params: any) {
    const req = params.request
    return new URL(req.url).searchParams.get("message")
}

export async function action(obj: any) {
    const request = obj.request
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await signinUser(email, password)
        localStorage.setItem("loggedin", JSON.stringify(true))
        return redirect('/')
    } catch(err: any) {
        return err.message
    }
}

export type SignupPropsType = {
    title: string;
    isLogin: boolean;
}
const Signup = (props: SignupPropsType) => {
    const errorMessage = useActionData() as string
    const message = useLoaderData() as string


    return (
        <div className={s.loginContainer}>
            <h2>{props.title}</h2>
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
                <button>Create Account</button>
            </Form>
            <p className={s.authLinksText}>Already have an account? <span><Link to={"/login"} className={s.authLinks}>Sign up</Link></span></p>
        </div>
    )


};

export default Signup;