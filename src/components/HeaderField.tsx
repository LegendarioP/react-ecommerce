import Image from 'next/image'
import brandLogo from '../assets/icon.svg'


export default function HeaderField(){
    return (
      <header className="">
        <div className="mx-24.5 my-12 flex justify-between items-center">
          <Image src={brandLogo} alt="Fashion brand"/>

          <div className="flex w-100 justify-end">

            <ul className="flex w-full items-center justify-around text-2xl">
              <li className="">CATALOGUE</li>
              <li className="">FASHION</li>
              <li className="">FAVOURITE</li>
              <li className="">LIFESTYLE</li>
            </ul>

            <div>
              <button className="w-[8.375rem] h-16 bg-black text-white rounded-lg text-[1.5rem]">SIGN UP</button>
            </div>
          </div>
        </div>
      </header>
    )
    
}