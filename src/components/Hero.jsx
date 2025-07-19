import { Link } from "react-router-dom"
import HeroText from "./HeroText"


export const Hero = () => {
    return (
        <div className=" relative " >

            <HeroText className="text-title" />

            <Link to="/about" >
                <button
                    className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2  text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 active:scale-95 cursor-none"
                >
                    <span>More About me</span>
                    <div
                        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                    >
                        <div className="relative h-full w-10 bg-white/20"></div>
                    </div>

                </button>
            </Link>

            {/* <div className="absolute w-[5.7rem] top-7 right-15 tablet:w-[10.7rem] tablet:top-0 tablet:right-24 laptop:right-20 hover:rotate-5 transition-transform ease-in duration-350" >
                    <img src="/Tag.svg" alt="Tag" />
                </div> */}


        </div>
    )
}
