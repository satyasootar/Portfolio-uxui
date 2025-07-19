import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContentHeading } from './ContentHeading';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ number, title, description, bgColor, badgeColor }) => {
    return (
        <div className={`w-full mobile:w-80 ${bgColor} rounded-3xl p-8 mobile:p-12 border border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className={`${badgeColor} w-12 h-12 mobile:w-16 mobile:h-16 rounded-full border-gray-800 flex items-center justify-center mb-6 mobile:mb-8`}>
                <span className="text-white font-bold text-lg mobile:text-xl">{number}</span>
            </div>
            <h3 className="text-gray-900 text-2xl mobile:text-3xl font-bold mb-3 leading-tight">{title}</h3>
            <p className="text-gray-700 text-base mobile:text-lg leading-relaxed">{description}</p>
        </div>
    );
};

const SkillCards = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    const skillsData = [
        { number: "01", title: "User Research", description: "Conducting comprehensive user studies, interviews, and analysis to understand user needs and behaviors.", bgColor: "bg-blue-100", badgeColor: "bg-blue-400" },
        { number: "02", title: "Wireframing", description: "Creating detailed wireframes and structural blueprints for digital products and user interfaces.", bgColor: "bg-cyan-100", badgeColor: "bg-cyan-400" },
        { number: "03", title: "Responsive Design", description: "Designing adaptive interfaces that work seamlessly across different devices and screen sizes.", bgColor: "bg-orange-100", badgeColor: "bg-orange-400" },
        { number: "04", title: "Prototyping", description: "Building interactive prototypes to test and validate design concepts before final implementation.", bgColor: "bg-gray-100", badgeColor: "bg-gray-400" },
        { number: "05", title: "Interaction Design", description: "Crafting intuitive user interactions and defining how users engage with digital products.", bgColor: "bg-purple-100", badgeColor: "bg-purple-400" },
        { number: "06", title: "Visual Design", description: "Creating aesthetically pleasing interfaces with attention to color, typography, and visual hierarchy.", bgColor: "bg-pink-100", badgeColor: "bg-pink-400" },
    ];

    useEffect(() => {
        const isLaptop = window.matchMedia('(min-width: 1024px)').matches;
        if (!isLaptop) return;

        const container = containerRef.current;
        const track = trackRef.current;

        // const smoother = gsap.globalTimeline.getChildren().find(obj => obj.vars?.wrapper === "#smooth-wrapper");

        const scrollWidth = track.scrollWidth - container.offsetWidth;

        const ctx = gsap.context(() => {
            gsap.to(track, {
                x: () => `-${scrollWidth}`,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    scroller: "#smooth-wrapper" // VERY IMPORTANT: use ScrollSmoother’s wrapper
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen">

            {/* Laptop Only: Sticky Horizontal Scroll */}
            <div ref={containerRef} className="hidden laptop:block relative" style={{ height: '100vh' }}>
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <div className="w-full max-w-6xl mx-auto">
                        <ContentHeading text="Skills I Conquered" />
                        <div
                            ref={trackRef}
                            className="flex gap-8 w-max will-change-transform"
                        >
                            {skillsData.map((skill, index) => (
                                <SkillCard key={index} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="block laptop:hidden px-4 py-16">
                <ContentHeading text="Skills I Conquered" />
                <div className="grid gap-10 tablet:grid-cols-2">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillCards;
