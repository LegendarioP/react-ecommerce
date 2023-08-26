import Image from "next/image";
import HeaderField from "./components/HeaderField";
import bannerTop from "../assets/banners/banner-top.png";
import bannerMid from "../assets/banners/banner-mid.png";
import BrandField from "./components/BrandField";


import ShowcaseCatalog from "./components/Showcase";
import ShowcaseBanner from "./components/ShowcaseBanner";


import mobileAdvisement from "../assets/mobile-app.png"






export default function Home() {
  return (
    <>
    {/* brand  + menu */}
    <HeaderField />
    <main>
      <section className="mx-24.5 mb-16">
        <Image src={bannerTop} alt="aa" className="rounded-[2rem]"/>
      </section>

      {/* CAMPO DAS MARCAS  */}
      <BrandField />



      {/* Campo de vitrine/showcase para 3 */}
      <ShowcaseCatalog />



      <section className="flex gap-16">
        <Image src={bannerMid} alt="aa" />
      </section>
    
      {/* banners de vitrine */} 
      <ShowcaseBanner />

      <section className="flex justify-center items-center">
        <div>
          <span className="font-black">DOWNLOAD APP & GET THE VOUCHER! </span>

        </div>
        <Image src={mobileAdvisement} alt="help"/>
      </section>


    </main>
    </>
  )
}
