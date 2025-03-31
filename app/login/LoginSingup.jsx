'use client'
import React, { useState } from 'react'

import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState('Login');

    return (
        <div className='flex flex-col items-center justify-center max-w-3xl mt-52 bg-white w-[600px] pb-8 rounded-lg shadow-lg'>
            <div className="flex flex-col items-center gap-2.5 w-full mt-8">
                <div className="text-[#3c009d] text-4xl font-bold">{action}</div>
                <div className="w-16 h-1.5 bg-[#3c009d] rounded-2xl"></div>
            </div>
            <div className="mt-14 flex flex-col gap-6">
                {action === "Login" ? null : (
                    <div className="flex items-center mx-auto w-96 h-20 bg-gray-300 rounded-md px-8">
                        <img src={user_icon} alt="" className="mr-6" />
                        <input type="text" placeholder='Name' className="w-full h-12 border-none outline-none bg-transparent text-gray-600 text-lg" />
                    </div>
                )}

                <div className="flex items-center mx-auto w-96 h-20 bg-gray-300 rounded-md px-8">
                    <img src={email_icon} alt="" className="mr-6" />
                    <input type="email" placeholder='Email' className="w-full h-12 border-none outline-none bg-transparent text-gray-600 text-lg" />
                </div>
                <div className="flex items-center mx-auto w-96 h-20 bg-gray-300 rounded-md px-8">
                    <img src={password_icon} alt="" className="mr-6" />
                    <input type="password" placeholder='Password' className="w-full h-12 border-none outline-none bg-transparent text-gray-600 text-lg" />
                </div>
            </div>

            {action === "Login" ? (
                <div className="pl-16 mt-7 text-gray-600 text-lg">Forgot Password? <span className="text-[#4c00b4] cursor-pointer">Click Here!</span></div>
            ) : null}

            <div className="flex gap-8 mt-14 mx-auto">
                <div
                    className={`w-56 h-14 flex justify-center items-center rounded-full font-bold text-lg cursor-pointer ${action === "Login" ? "bg-gray-300 text-gray-600" : "bg-[#4c00b4] text-white"}`}
                    onClick={() => setAction('Sign Up')}
                >
                    Sign Up
                </div>
                <div
                    className={`w-56 h-14 flex justify-center items-center rounded-full font-bold text-lg cursor-pointer ${action === "Sign Up" ? "bg-gray-300 text-gray-600" : "bg-[#4c00b4] text-white"}`}
                    onClick={() => setAction('Login')}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
