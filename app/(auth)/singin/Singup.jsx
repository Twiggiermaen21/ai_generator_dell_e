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
import Photo from './photo4.jpeg'

// Schemat walidacji za pomocą Zod
const signupSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),

});

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className='justify-center flex'>
      <div className="flex flex-col bg-white rounded-l-2xl shadow-lg  min-w-1/2">
        <div className='my-auto py-6 px-4 '>
          <div className='text-center mb-7'>
            <h1 className="text-3xl font-bold mb-3">Create an account</h1>
            <p className="text-sm text-gray-500 ">
              Let's get started. Fill in the details below to create your account.
            </p>
          </div>


          <div className='items-center flex flex-col  max-w-8/12 mx-auto '>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 space-y-4 ">
              <div>
                <Label className="mb-2" htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                />

                {errors.name && <p className="text-red-500 mt-1 text-sm ">{errors.name.message}</p>}
              </div>
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
                <p className="text-sm text-gray-500 mt-1">Minimum 8 characters.</p>
              </div>
              <div className=" flex items-center m-auto ">
                <Input className="w-5 h-5 mr-2 "
                  id="terms"
                  type="checkbox"
                  {...register('terms')}

                />
                <label htmlFor="terms" className="text-sm  font-medium">
                  Accept terms and conditions
                </label>

              </div>
              {errors.terms && <p className="text-red-500 mt-1 text-sm ">{errors.terms.message}</p>}

              <Button type="submit" className="my-5 w-full">Sign Up</Button>
            </form>
          </div>
        </div>
      </div>


      <div className=' min-w-1/2' >
        <Image src={Photo} alt="Signup Illustration" className='h-full border rounded-r-2xl' />
      </div>
    </div >
  )
}

export default Signup;
