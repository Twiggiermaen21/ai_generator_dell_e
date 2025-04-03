'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { generateImage } from "@/app/api/actions";
import { useState } from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.png";
export function Generator() {

    const [url, setUrl] = useState('');

    const action = async (formData) => {
        // const imageData = await generateImage(formData)
        // setUrl(imageData.data[0].url)
        console.log("Generating image:" + formData.get('prompt'));
    }

    return (
        <main className="flex flex-row bg-gray-100 dark:bg-gray-900 rounded-2xl">

            <form action={action} className="space-y-4 p-4">

                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-5">AI Image Generator</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Enter a text prompt and let our AI generate an image for you.
                    </p>
                </div>

                <div className="flex space-x-2">

                    <Input
                        className="flex-1 px-4 py-2 rounded-md border border-gray-200  dark:bg-gray-800 dark:text-gray-100 dark:border-gray-800"
                        placeholder="Enter a text prompt"
                        name="prompt"
                        type="text"
                    />
                    <Button
                        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2
                         focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
                        type="submit"> Generate</Button>
                </div>

            </form>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden">

                <Image
                    alt="Generated Image"
                    className="w-full h-auto"
                    height="512"
                    src={url === '' ? placeholder : url}
                    style={{
                        aspectRatio: "1:1",
                        objectFit: "cover",
                    }}
                    width="512"
                />
            </div>
        </main>
    )
}
