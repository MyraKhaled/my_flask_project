import React from 'react'
import './templates/css.css'

export const templates = () => {
    return (
        <form action="" method="POST">
        <div className="container">
                <div className="title"><h1>Login</h1></div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='username' />
                </div>

                <div className="input">
                    <input type="password" placeholder='password' />
                </div>
            </div>

            <div className="remember_password">
                <label><input type="checkbox"></input>Remember me</label>
            </div>

            <button type='submit'>Login</button>

            <div className="haveaccount"><p>Don't have an account ?<a href="#"> Register</a></p></div>
        </div>
        </form>

    );
};

export default templates;