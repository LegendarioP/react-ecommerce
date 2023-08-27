import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterArea() {
    return(
        <section className="h-[34.0625rem] bg-black flex text-white ">
            <div className="mx-24.5 my-28 w-full flex justify-between">

                <div className="w-2/5 max-w-[25.9375rem] max-h-[15.5rem] flex flex-col justify-between" id="logo">
                    <div>

                        <h2 className="font-black text-[2.5rem]">FASHION</h2>
                        <span className="text-2xl text-project-g1">Complete your style with awesome clothes from us.</span>
                    </div>

                    <div className="flex justify-start text-transparent gap-2" id="social-media">
                        <Link href="#" className="p-[0.94rem] bg-project-y rounded-2xl">
                            <Facebook  className="fill-black"/>
                        </Link>
                        <Link href="#" className="p-[0.94rem] bg-project-y rounded-2xl">
                            <Instagram className="text-black"/>
                        </Link>
                        <Link href="#" className="p-[0.94rem] bg-project-y rounded-2xl">
                            <Twitter className="fill-black"/>
                        </Link>
                        <Link href="#" className="p-[0.94rem] bg-project-y rounded-2xl">
                            <Linkedin className="fill-black"/>
                        </Link>
                    </div>

                </div>

                <div className="flex w-3/5 relative justify-between text-2xl leading-[2]" id="emptyFields">

                    <div className="">
                        <h3 className="text-white">Company</h3>
                        <ul className="text-project-g1 ">
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3>Quick Link</h3>
                        <ul className="text-project-g1">
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3>Legal</h3>
                        <ul className="text-project-g1">
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}