import React from 'react'
import './template/Auth.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png' 
import password_icon from '../Assets/password.png'

export const LoginPage = () => {
    return (
        <form action="" method="POST">
        <div className="container">
                <div className="title"><h1>Login</h1></div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='username' />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
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

export default LoginPage;