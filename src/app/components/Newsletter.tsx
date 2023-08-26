import { inherits } from "util";

export default function Newsletter() {
    return(
        <section className="w-full h-[38.93rem] bg-project-y1 flex justify-center text-white">
            
            <div className="flex flex-col justify-center items-center">

                <div className="w-[63.125rem] relative ">
                    <h2 className="font-black text-[3.4375rem] text-center">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                </div>

                <p className="font-normal text-[2rem]">Type your email down below and be young wild generation</p>
                
                {/* <div className="w-[35.875rem] h-[5.4375rem] relative flex justify-end items-center text-black">
                    <input type="text" className="w-[35.875rem] h-[5.4375rem] absolute rounded-lg pl-2 text-2xl" placeholder="Add your email here" />
                    <button className="py-4 px-9 bg-black text-white rounded-lg text-[1.5rem] absolute mr-2"> SEND </button>
                </div> */}

                <div className="mt-6 w-[35.875rem] h-[5.4375rem] relative flex justify-end items-center text-black bg-white rounded-lg" id="newsletter">
                    <input type="text" className="w-full h-full rounded-lg pl-8 text-2xl focus-visible:outline-none" placeholder="Add your email here" />
                    <button className="py-4 px-9 bg-black text-white rounded-lg text-[1.5rem] mr-2"> SEND </button>
                </div>


            </div>

        </section>
    )
}