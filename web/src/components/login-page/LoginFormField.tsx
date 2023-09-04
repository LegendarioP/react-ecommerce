'use client'

import Link from "next/link";
import SocialLogin from "./SocialLogin";
import { FormEvent, useState } from "react";


import { api } from "@/lib/api";
import { AxiosError } from "axios";

export default function LoginOrRegisterField() {
    const [isSignUp, setIsSignUp] = useState(false)
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


    function ToggleRegister() {
        setIsSignUp(!isSignUp) 
    }



    function AlreadyHaveAccount() {
        setIsAlreadyRegistered(!isAlreadyRegistered)
    }



    async function handleRegisterUser(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        setIsSubmitted(true)
        setIsAlreadyRegistered(false)

        const formData = new FormData(event.currentTarget)


        try {
            await api.post('/register', {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('pass')
            })

        }
        catch (error) {
            if (error instanceof AxiosError && error.response) {
              if (error.response.status === 409) {
                // Erro de conflito - usuário já existe
                AlreadyHaveAccount()
                //alert('O usuário com este email já existe. Por favor, escolha um email diferente ou faça login.');
              } 
              else {
                // Ocorreu algum erro no servidor
                alert('Ocorreu um erro ao criar sua conta. Por favor, tente novamente mais tarde.');
              }
            } 
            else {
              // Se não for um erro do Axios, faça algo com o erro genérico
              alert('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
            }
          }
          finally {
            //alert("operação finalizada")
            setIsSubmitted(false)
          }


    }


    async function handleLoginUser(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        
        try {
            await api.post('/login', {
                email: formData.get('email'),
                password: formData.get('pass')
            })

        }
        catch(error){
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 401) {
                    alert('senha incorreta se cabaço')
                }   
                else if (error.response.status === 404) {
                    alert('usuario não encontrado no banco')
                }
                else{
                    alert('erro de conexão com o servidor')
                }
            }
            else {
                alert('ocorreu algum erro desconhecido, tente novamente em alguns minutos')
            }
        }
    }






    return (
        <div className={`shadow-customLogin bg-white rounded-[.625rem] relative overflow-hidden w-[48rem] max-w-full min-h-[30rem]`} id="toggleButton">
            
            {isSignUp ? (
                // CAMPO DE REGISTRAR-SE
                <div className={`left-0 w-1/2 z-30 translate-x-full absolute top-0 h-full transition-all duration-[600ms] ease-in-out `}>
                    <form onSubmit={handleRegisterUser} className='flex bg-white items-center justify-center flex-col px-[3.125rem] text-center h-full'>
                        <h2 className='text-[2rem] font-bold'>Create Account</h2>
    
                        <SocialLogin />
    
                        <span className='text-xs'>or use your email for registration</span>
                        <input name="name" type="text" placeholder="Name" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' required />
                        <input name="email" type="email" placeholder="Email" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' required />
                        <input name="pass" type="password" placeholder="Password" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' required/>
                        <button  onClick={isAlreadyRegistered ? AlreadyHaveAccount : undefined }   className='rounded-[1.25rem] border border-solid border-black bg-black text-white font-bold uppercase py-3 px-11 tracking-[1px] text-xs'> { isSubmitted ? (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>) : 'Sign Up'} </button>
                        {isAlreadyRegistered ? ( <p className="font-bold text-sm text-red-600 "> O usuário com este email já existe. Por favor, escolha um email diferente ou faça login.</p>) : (' ')}
                    </form>
                </div>
            ) : (
                // CAMPO DE LOGIN 
                <div className={`left-0 w-1/2 z-20 absolute top-0 h-full transition-all duration-[600ms] ease-in-out `}>
                    <form onSubmit={handleLoginUser} className='flex bg-white items-center justify-center flex-col px-[3.125rem] text-center h-full' >
                        <h2 className='text-[2rem] font-bold'>Sign In</h2>
                        
                        <SocialLogin />

                        <span className='text-xs'>or use your account</span>
                        <input name="email" type="email" placeholder="Email" className='bg-[#eee] border-none px-4 py-3 m-2 w-full' />
                        <input name="pass" type="password" placeholder="Password" className='bg-[#eee] border-none px-[.938rem] py-3 m-2 w-full' />
                        <Link href="#" className='my-4'>Forgot your password?</Link>
                        <button type="submit" className='rounded-[1.25rem] border border-solid border-black bg-black text-white font-bold uppercase py-3 px-11 tracking-[1px] text-xs'>Sign In</button>
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