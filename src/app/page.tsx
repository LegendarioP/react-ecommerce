import Image from "next/image";
import HeaderField from "./components/HeaderField";
import bannerTop from "../assets/banners/banner-top.png";
import bannerMid from "../assets/banners/banner-top.png";
import BrandField from "./components/BrandField";

import firstGirl from "../assets/showcase/first-girl.png"
import secondGirl from "../assets/showcase/second-girl.png"
import thirdGirl from "../assets/showcase/third-girl.png"


import { ArrowRight } from "lucide-react";
//import { ArrowRight } from "lucide";


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


      <section className="mx-24.5 my-16 flex flex-col gap-24">
        <div className="text-5xl font-black"> NEW ARRIVALS </div>

        <div className="flex justify-between"> 

          <div className="flex flex-col gap-7 mr-3" >
            <Image src={firstGirl} alt={`girl`} className=""/> 
            <div className="flex items-center justify-between">
              <div> 
                <span className="text-2xl font-medium"> Hoodies & Sweetshirt </span>
                <p className="text-2xl text-project-w"> Explore Now! </p>
              </div>
              <ArrowRight className="stroke-project-w"/>
            </div>

          </div>

          <div className="flex flex-col gap-7 mr-3" >
            <Image src={secondGirl} alt={`girl`} className=""/> 
            <div className="flex items-center justify-between">
              <div> 
                <span className="text-2xl font-medium"> Hoodies & Sweetshirt </span>
                <p className="text-2xl text-project-w"> Explore Now! </p>
              </div>
              <ArrowRight className="stroke-project-w"/>
            </div>

          </div>


          <div className="flex flex-col gap-7 mr-3" >
            <Image src={thirdGirl} alt={`girl`} className=""/> 
            <div className="flex items-center justify-between">
              <div> 
                <span className="text-2xl font-medium"> Hoodies & Sweetshirt </span>
                <p className="text-2xl text-project-w"> Explore Now! </p>
              </div>
              <ArrowRight className="stroke-project-w"/>
            </div>

          </div>


        </div>
      </section>









    </main>
    </>
  )
}
