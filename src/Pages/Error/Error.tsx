import React from 'react';
import {Link, useRouteError} from "react-router-dom";
import s from './Error.module.css'

const Error = () => {
    const error = useRouteError()
    console.log(error)


    return (
        <div className={s.errorWrapper}>
            <h2>Sorry, the page you were looking for was not found.</h2>
            {/*<h2>{error.message}</h2>*/}
            <Link to='/'>Return to home</Link>
        </div>
    );
};

export default Error;