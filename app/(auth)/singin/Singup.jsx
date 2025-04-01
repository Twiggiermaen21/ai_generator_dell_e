'use client'
import React from 'react'
import Image from 'next/image'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import Photo from './photo.jpeg'

const Singup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Form submitted", formData);
  };

  return (
    <div className='w-full justify-center flex'>
      <div className=" mt-4 p-6 bg-white rounded-l-2xl shadow-lg">
        <div className='text-center'>
          <h2 className="text-3xl font-bold mb-10">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-4 ">
            Let's get started. Fill in the details below to create your account.</p>

        </div>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className='items-center flex flex-col'>
          <form onSubmit={handleSubmit} className=" space-y-4 max-w-6/12">
            <Label> Name</Label>
            <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <Label> Email</Label>
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <Label> Password</Label>
            <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <p className="text-sm text-gray-500 mb-4" >Minimum 8 characters.</p>
            <Button type="submit" className=" w-full" >Sign Up</Button>
          </form>
        </div>
      </div>
      <div >
        <Image src={Photo} alt className='max-w-[400px] border rounded-r-2xl' />
      </div>
    </div>
  )
}

export default Singup