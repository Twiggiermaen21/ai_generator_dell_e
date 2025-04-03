'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import { Checkbox } from "@/components/ui/checkbox"
import Photo from '../singin/photo4.jpeg'
import { FcGoogle } from "react-icons/fc"

const loginSchema = z.object({

    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters long"),



});

const Login = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(loginSchema),

    });

    const onSubmit = (data) => {
        console.log("Form submitted", data);
    };

    return (
        <div className='justify-center flex  '>
            <div className="flex flex-col bg-white rounded-l-2xl shadow-lg min-w-1/2 ">
                <div className='my-auto py-6  px-20 '>
                    <div className='text-center mb-7'>
                        <h1 className="text-3xl font-bold mb-3 mx-auto">Welcome back!</h1>
                        <p className="text-sm text-gray-500 ">
                            Glad to see you again. Log in to continue.
                        </p>
                    </div>


                    <div className='items-center flex flex-col  max-w-8/12 mx-auto '>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-3 space-y-4 ">

                            <div>
                                <Label className="mb-2" htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Label className="mb-2" htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    {...register('password')}
                                />
                                {errors.password && <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>}

                            </div>



                            <Button type="submit" className="my-5 w-full">Sign In</Button>
                        </form>
                        <div className="flex items-center">
                            <div className="w-2 border-t border-gray-900"></div>
                            <p className="px-3  text-gray-900 text-sm">OR CONTINUE WITH</p>
                            <div className=" w-2 border-t border-gray-900"></div>
                        </div>
                        <div className=" my-5">
                            <Button className="flex items-center w-full gap-4  ">
                                <FcGoogle />
                                Sing In with Google
                            </Button>
                        </div>
                        <div className='items-center flex flex-col' >
                            <p className="text-gray-900 text-sm">Don't have an account?</p>
                            <a className='  text-blue-700 text-sm my-2 ' href="singin">Sign Up</a>
                        </div>
                    </div>
                </div>

            </div>


            <div className=' min-w-1/2'  >
                <Image src={Photo} alt="Signup Illustration" className='h-full border rounded-r-2xl' />
            </div>
        </div >
    )
}

export default Login