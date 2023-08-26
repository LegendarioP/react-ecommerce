import Image from "next/image";

import firstGirl from "../assets/showcase/first-girl.png"
import secondGirl from "../assets/showcase/second-girl.png"
import thirdGirl from "../assets/showcase/third-girl.png"
import { ArrowRight } from "lucide-react";


export default function ShowcaseCatalog() {
    return (
        <section className="mx-24.5 my-16 flex flex-col gap-24">
            <div className="text-5xl font-black"> NEW ARRIVALS </div>

            <div className="flex justify-between"> 

            <div className="flex flex-col gap-7 mr-3 transition-all duration-300 ease-in-out hover:scale-105 group" >

                <Image src={firstGirl} alt={`girl`} className="shadow-customS rounded-2xl group-hover:shadow-customH"/> 
                <div className="flex items-center justify-between">
                <div> 
                    <span className="text-2xl font-medium"> Hoodies & Sweetshirt </span>
                    <p className="text-2xl text-project-w"> Explore Now! </p>
                </div>
                <ArrowRight className="stroke-project-w"/>
                </div>

            </div>

            <div className="flex flex-col gap-7 mr-3 transition-all duration-300 ease-in-out hover:scale-105 group" >
                <Image src={secondGirl} alt={`girl`} className="shadow-customS rounded-2xl group-hover:shadow-customH"/> 
                <div className="flex items-center justify-between">
                <div> 
                    <span className="text-2xl font-medium"> Hoodies & Sweetshirt </span>
                    <p className="text-2xl text-project-w"> Explore Now! </p>
                </div>
                <ArrowRight className="stroke-project-w"/>
                </div>

            </div>


            <div className="flex flex-col gap-7 mr-3 transition-all duration-300 ease-in-out hover:scale-105 group" >
                <Image src={thirdGirl} alt={`girl`} className="shadow-customS rounded-2xl group-hover:shadow-customH"/> 
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
    )
}