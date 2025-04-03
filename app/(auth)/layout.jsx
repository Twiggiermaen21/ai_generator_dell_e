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
                <div className=" bg-white  min-w-4xl max-w-[900px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-2xl">
                    {children}
                </div>
            </body>
        </html>



    );



}