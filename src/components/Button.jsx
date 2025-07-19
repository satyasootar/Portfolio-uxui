import { useState } from "react";
import CustomCursor from "./CustomCursor";

const ClipboardCopy = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("satya.sootar06@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <div className="w-full max-w-[16rem] cursor-none">
            <div className="relative">
                <label htmlFor="npm-install-copy-button" className="sr-only">
                    Copy Email
                </label>
                <button
                    onClick={handleCopy}
                    className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 border-1 rounded-lg p-2 inline-flex items-center justify-center cursor-none"
                >
                    {!copied ? (
                        <svg
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 18 20"
                        >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                    ) : (
                        <svg
                            className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                            />
                        </svg>
                    )}
                </button>
                <div
                    role="tooltip"
                    className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs right-0 top-[calc(100%+8px)] ${copied ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    {copied ? "Copied!" : "Copy to clipboard"}
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
    );
};


// Shimmering button-------------------------------------------------------------------------------------------------

export const ShimmerButton = ({ text = "Click Me", link }) => {
    return (
        <button
            className="group/resume relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition-transform duration-400 ease-in-out active:scale-95 overflow-hidden hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 cursor-none"
            onClick={() => window.open(link, "_blank")}
        >
            <span className="relative z-[1]">{text}</span>

            {/* Resume Icon */}
            <div className="relative ml-1 h-5 w-5 z-[1] overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover/resume:-translate-y-5 group-hover/resume:translate-x-4">
                    <svg
                        width="40"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 -translate-x-4"
                    >
                        <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {/* Shimmering effect */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/resume:duration-1000 group-hover/resume:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
            </div>
        </button>
    );
};




// social media buttons----------------------------------------------------------------------------------------------------------------
export const SocialMediaButtons = () => {
    return (
        <div className="flex space-x-6">
            {/* Instagram Button */}
            <div className="group relative inline-block cursor-none">
                <button className="focus:outline-none " onClick={() => window.open("https://www.instagram.com/satyasootar", "_blank")}>
                    <svg
                        viewBox="0 0 16 16"
                        className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-pink-500 cursor-none"
                        fill="currentColor"
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        />
                    </svg>
                </button>
                <span className="absolute top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                    Instagram
                </span>
            </div>

            {/* LinkedIn Button */}
            <div className="group relative inline-block">
                <button className="focus:outline-none" onClick={() => window.open("https://www.linkedin.com/in/satyaprangyasootar", "_blank")}>
                    <svg
                        viewBox="0 0 16 16"
                        className="cursor-none bi bi-linkedin transform transition-transform duration-300 hover:scale-125 hover:text-blue-600"
                        fill="currentColor"
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        />
                    </svg>
                </button>
                <span className="absolute top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                    LinkedIn
                </span>
            </div>

            {/* Twitter/X Button */}
            <div className="group relative inline-block">
                <button className="focus:outline-none" onClick={() => window.open("https://x.com/Satyasootar", "_blank")}>
                    <svg
                        viewBox="0 0 16 16"
                        className="cursor-none bi bi-twitter-x transform transition-transform duration-300 hover:scale-125 hover:text-primary-text"
                        fill="currentColor"
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                        />
                    </svg>
                </button>
                <span className="absolute top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                    Twitter
                </span>
            </div>
        </div>
    );
};



export const Resumebutton = () => {
    return (
        <button
            className="cursor-none active:scale-95 relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-primary-accent transition-transform duration-150 ease-in-out shadow-[inset_1px_2px_5px_#00000080]"
        >
            {/* Animated inner fill & circle */}
            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-primary-accent transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                    <div className="size-[0.8rem] text-primary-text group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            height="100%"
                            width="100%"
                        >
                            <path
                                fill="currentColor"
                                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Text section with padding shift animation */}
            <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] text-primary-text">
                Resume
            </div>
        </button>
    );
};





export default ClipboardCopy;