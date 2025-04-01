import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function AuthLayout({ children }) {
    return (

        <html lang="en" >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex  items-center bg-white w-fit min-w-3xl h-full mt-40 m-auto border rounded-2xl  ">
                    {children}
                </div>



            </body>
        </html>



    );



}