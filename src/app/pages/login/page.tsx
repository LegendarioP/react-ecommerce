import Image from 'next/image'
import brandLogo from '../../../assets/icon.svg'
import Link from 'next/link'
import LoginOrRegisterField from '@/components/login-page/LoginFormField'




export default function LoginOrRegister() {

    function ToggleRegister() {
        
        return console.log("oin")
    }






    return (
        <>
        {/* brand  + menu */}
        <header className="">
            <div className="px-24.5 py-6 flex justify-center items-center bg-black ">
                <Link href="/">
                    <Image src={brandLogo} alt="Fashion brand" className='invert'/>
                </Link>
            </div>
        </header>
        <main className='flex justify-center items-center flex-col'>
            <LoginOrRegisterField />
        </main>
        </>
    )
}