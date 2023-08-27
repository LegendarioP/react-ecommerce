import Image from "next/image";
import showcase1 from '../assets/showcase/vitrine1.png'
import showcase2 from '../assets/showcase/vitrine2.png'
import { ArrowRight } from "lucide-react";


export default function ShowcaseBanner() {
    return (
        <section className="mx-24.5 my-16 flex flex-col gap-24">
            <div className="text-5xl font-black"> Young’s Favourite </div>

            <div className="flex justify-between"> 

                <div className="flex flex-col gap-7 mr-3 transition-all duration-300 ease-in-out hover:scale-105 group" >
                    <div className="">
                        <Image src={showcase1} alt={`girl`} className="rounded-2xl group-hover:shadow-customH"/> 
                    </div>
                    <div className="flex items-center justify-between">
                        <div> 
                            <span className="text-2xl font-medium"> Trending on instagram </span>
                            <p className="text-2xl text-project-w"> Explore Now! </p>
                        </div>
                        <ArrowRight className="stroke-project-w"/>
                    </div>
                </div>

                <div className="flex flex-col gap-7 mr-3 transition-all duration-300 ease-in-out hover:scale-105 group" >
                    <div className="">
                        <Image src={showcase2} alt={`girl`} className="rounded-2xl group-hover:shadow-customH"/> 
                    </div>
                    <div className="flex items-center justify-between">
                        <div> 
                            <span className="text-2xl font-medium"> All Under $40 </span>
                            <p className="text-2xl text-project-w"> Explore Now! </p>
                        </div>
                        <ArrowRight className="stroke-project-w"/>
                    </div>

                </div>

            </div>
        </section>
    )
}