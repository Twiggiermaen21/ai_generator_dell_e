import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'
import img from '../pom.jpg'

const Header = () => {
    return (
        <div className='flex w-full justify-center items-center mx-auto py-3 flex-col'>
            <h1 className='p-2 text-white bg-gray-500 border rounded-full'>Art Generator</h1>


            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="text" />
            </div>


            <div className=' bg-gray-500 w-11/12 rounded-2xl p-4 my-3s '>
                <Image id="image" src={img} alt='' className=' w-2xl mx-auto' />

            </div>



        </div>
    )
}

export default Header