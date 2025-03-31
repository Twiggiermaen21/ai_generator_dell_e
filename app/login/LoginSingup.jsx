'use client'
import React, { useState } from 'react'

import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';



const LoginSingup = () => {
    const [action, setAction] = useState('Login');

    return (
        <div className='flex flex-col mr-auto mt-6 bg-white w-3xl pb-8'>
            <div className="flex flec-col gap-2.5 w-full mt-8 items-center">
                <div className="text-[#3c009d] text-4xl font-bold">{action}</div>
                <div className="w-16 h-1.5 bg-[#3c009d] border rounded-2xl"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>

            </div>

            {action === "Login" ? <div className="forgot-password">Forgot Password? <span>Click Here!</span> </div> : ''}


            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction('Sing Up') }}>Sing Up</div>
                <div className={action === "Sing Up" ? "submit gray" : "submit"} onClick={() => { setAction('Login') }}>Login</div>
            </div>
        </div>
    );
};

export default LoginSingup