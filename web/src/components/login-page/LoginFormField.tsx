'use client'

import Link from "next/link";
import SocialLogin from "./SocialLogin";
import { useState } from "react";

export default function LoginOrRegisterField() {

    const [isSignUp, setIsSignUp] = useState(false)

    function ToggleRegister() {
        setIsSignUp(!isSignUp) 
    }

    return (
        <div className={`shadow-customLogin bg-white rounded-[.625rem] relative overflow-hidden w-[48rem] max-w-full min-h-[30rem]`} id="toggleButton">

            {isSignUp ? (
                <div className={`left-0 w-1/2 z-30 translate-x-full absolute top-0 h-full transition-all duration-[600ms] ease-in-out `}>
                    <form action="#" className='flex bg-white items-center justify-center flex-col px-[3.125rem] text-center h-full'>
                        <h2 className='text-[2rem] font-bold'>Create Account</h2>
    
                        <SocialLogin />
    
                        <span className='text-xs'>or use your email for registration</span>
                        <input type="text" placeholder="Name" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' />
                        <input type="email" placeholder="Email" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' />
                        <input type="password" placeholder="Password" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' />
                        <button className='rounded-[1.25rem] border border-solid border-black bg-black text-white font-bold uppercase py-3 px-11 tracking-[1px] text-xs'>Sign Up</button>
                    </form>
                </div>
            ) : (
                <div className={`left-0 w-1/2 z-20 absolute top-0 h-full transition-all duration-[600ms] ease-in-out `}>
                    <form action="#" className='flex bg-white items-center justify-center flex-col px-[3.125rem] text-center h-full' >
                        <h2 className='text-[2rem] font-bold'>Sign In</h2>
                        
                        <SocialLogin />

                        <span className='text-xs'>or use your account</span>
                        <input type="email" placeholder="Email" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' />
                        <input type="password" placeholder="Password" className='bg-[#eee] border-none px-[.938rem] py-3 m-2 w-full' />
                        <Link href="#" className='my-4'>Forgot your password?</Link>
                        <button className='rounded-[1.25rem] border border-solid border-black bg-black text-white font-bold uppercase py-3 px-11 tracking-[1px] text-xs'>Sign In</button>
                    </form>
                </div>
                ) 
            }


            <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform ease-in-out duration-[600ms] z-40 ${isSignUp ? '-translate-x-full' : ''}`}>
                <div className={`linear-gradient-yellow bg-no-repeat bg-cover bg-[0] relative text-white -left-full h-full w-[200%]  transition-transform ease-in-out duration-[600ms] ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'}`}>
                    {isSignUp ? (
                        <div className="absolute flex flex-col items-center justify-center px-10 top-0 h-full w-1/2 translate-x-0 text-black">
                            <h1 className="font-bold m-0">Welcome Back!</h1>
                            <p className="text-sm font-thin leading-5 tracking-[.5px] mt-5 mb-[1.875rem]">To keep connected with us please login with your personal info</p>
                            <button className="rounded-[1.25rem] border border-solid border-black bg-transparent text-black font-bold uppercase py-3 px-11 tracking-[1px] text-xs" onClick={ToggleRegister} >Sign In</button>
                        </div>
                        ) : (
                        <div className="absolute flex flex-col items-center justify-center px-10 top-0 h-full w-1/2 translate-x-0 right-0" >
                            <h1 className="font-bold m-0">Hello, Friend!</h1>
                            <p className="text-sm font-thin leading-5 tracking-[.5px] mt-5 mb-[1.875rem]">Enter your personal details and start the journey with us</p>
                            <button className="rounded-[1.25rem] border border-solid border-white bg-transparent text-white font-bold uppercase py-3 px-11 tracking-[1px] text-xs" onClick={ToggleRegister}>Sign Up</button>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}