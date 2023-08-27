import Image from "next/image"
import Link from "next/link"
import mobileAdvisement from "../assets/mobile-app.png"
import appleApp from "../assets/applestore.png"
import playStore from "../assets/playstore.png"



export default function MobileApp() {
    return (
        <section className="flex justify-around items-center mx-24.5">

            <div className="max-w-lg h-96 flex flex-col justify-between">
                <span className="font-black text-5xl leading-[5rem] ">DOWNLOAD APP &GET THE VOUCHER! </span>
                <p className="text-2xl font-medium text-project-g">Get 30% off for first transaction using Rondovision mobile app for now.</p>

                <div className="flex justify-between">
                    <Link href="#">
                        <Image src={appleApp} alt="Apple Store "/>
                    </Link>
                    <Link href="#">
                        <Image src={playStore} alt="Play Store "/>
                    </Link>
                </div>
            </div>
            <div>
                <Image src={mobileAdvisement} alt="help"/>
            </div>
      </section>
    )
}