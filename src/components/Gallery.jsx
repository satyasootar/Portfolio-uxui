import Marquee from "react-fast-marquee"

export const Gallery = () => {
    return (
        <div>
            <Marquee pauseOnHover="true" speed="200" style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",


                display: "flex",
                gap: "10px"
            }}>

                <div className="flex flex-cols gap-6 items-end ">
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/boat.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/Boys.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/plane.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/smile.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/sunset.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/Synbot.jpeg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/Webdesign.jpg" />
                    <img className="border-2 rounded-sm hover:border-sky-300 laptop:max-h-[25rem] max-h-[15rem]" src="./Gallery/Waterfall.jpg" />
                </div>

            </Marquee>
        </div>
    )
}
