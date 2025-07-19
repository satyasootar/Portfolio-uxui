import Marquee from "react-fast-marquee"
import Skills from "../components/Skills"
import { TextGenerateEffect } from '../components/TextGenerateEffect'
import { ContentHeading } from "../components/ContentHeading"
import Certificate from "../components/Certificate"
import { Gallery } from "../components/Gallery"

const About = () => {
    return (
        <div className="">
            <TextGenerateEffect
                words="Hi there, I am Satya Prangya Sootar"
                className="text-primary-text font-figtree mobile:text-[1.5rem] tablet:text-[2rem] font-normal pb-[1.18rem]"
                delayPerWord={0.05}
                duration={0.3}
            />

            <div className="w-full">
                <p className="text-secondary-text font-archivo pb-[1.18rem] mobile:text-[0.8125rem] tablet:text-[1rem] font-light">
                    I see design as more than visuals. It's about creating experiences that feel clear, honest, and human. To me, UX/UI is a quiet kind of problem-solving, where empathy and simplicity lead the way. I care about the small details that guide users naturally, without making them think too hard. Every element has a purpose, and every choice tells a part of the story.
                </p>
                <p className="text-secondary-text font-archivo pb-[1.18rem] mobile:text-[0.8125rem] tablet:text-[1rem] font-light">
                    With a background in fullstack development, I think in both design and code. It helps me stay grounded in what's possible while still chasing those small moments of delight. I’m always learning, exploring accessibility, systems, and the craft of making digital spaces that truly feel good to use.
                </p>
            </div>


            {/* Tool stack */}
            <ContentHeading text="Tools" />

            <Marquee pauseOnHover="true" speed="100" style={{
                width: "100%",
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }} className="max-w-screen">
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/ChatGPT.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Figma.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Framer.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Gemini.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Midjourny.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/miro.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Perplexity.png" />
                </div>
                <div className="px-3 laptop:px-11">
                    <img className="shadow-xl rounded-2xl" src="/Toolstack/Vite.png" />
                </div>
            </Marquee>

            {/* Skill stack */}

            <Skills />


            {/* Certificate */}
            <ContentHeading text="Certificate" />
            <Certificate />

            <ContentHeading text="When I am not designing" />
            <Gallery />
        </div>
    )
}

export default About