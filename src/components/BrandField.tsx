import Image from "next/image";
// IMAGES IMPORTATIONS

import mm from "../assets/mm.png"
import obey from "../assets/obey.png"
import shopify from "../assets/shopify.png"
import lacoste from "../assets/lacoste.png"
import levi from "../assets/levis.png"
import amazon from "../assets/amazon.png"


export default function BrandField(){
    return (
      <section className="w-full h-[186px] bg-project-y flex items-center justify-center">
        <ul className="flex w-full justify-around items-center">
          <li>
            <Image src={mm} alt="m&m"/>
          </li>
          <li>
            <Image src={obey} alt="obey"/>
          </li>
          <li>
            <Image src={shopify} alt="shopify"/>
          </li>
          <li>
            <Image src={lacoste} alt="lacoste"/>
          </li>
          <li>
            <Image src={levi} alt="levi"/>
          </li>
          <li>
            <Image src={amazon} alt="amazon"/>
          </li>
        </ul>
      </section>
    )
}


