import Link from 'next/link'
import { Facebook, Linkedin } from 'lucide-react'
import Google from '@/components/login-page/GoogleIcon'

export default function SocialLogin() {
    return(
        <div className="my-5">
            <Link href="#" className="social border border-solid border-[#DDDDDD] rounded-[50%] inline-flex justify-center items-center h-10 w-10 m-[.3125rem] ">
                <Facebook />
            </Link>
            <Link href="#" className="social border border-solid border-[#DDDDDD] rounded-[50%] inline-flex justify-center items-center h-10 w-10 m-[.3125rem] ">
                <Google />
            </Link>
            <Link href="#" className="social border border-solid border-[#DDDDDD] rounded-[50%] inline-flex justify-center items-center h-10 w-10 m-[.3125rem] ">
                <Linkedin />
            </Link>
        </div>
    )
}