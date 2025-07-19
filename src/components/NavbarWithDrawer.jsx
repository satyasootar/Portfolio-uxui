import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClipboardCopy from "./Button";
import { ShimmerButton } from "./Button";
import { SocialMediaButtons } from "./Button";

export const NavbarWithDrawer = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const MenuItem = ({ Icon, label, isActive }) => {
        return (
            <div className="inline-flex items-center gap-2">
                <div
                    className={`flex items-center gap-3 py-2 px-2 rounded-sm cursor-none transition-all duration-300 ${isActive
                        ? " text-primary-text"
                        : " text-white"
                        }`}
                >
                    <div
                        className={`p-1 rounded-sm ${isActive ? "bg-white border" : "bg-black"
                            } tablet:p-2 `}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? "text-primary-text" : "text-white"} tablet:w-7 tablet:h-7 laptop:w-6 laptop:h-6`} />
                    </div>
                </div>
                <p className="font-archivo text-base font-normal tablet:text-xl">{label}</p>
            </div>
        );
    };

    // Icons
    const HomeIcon = (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    );

    const MailIcon = (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
    );

    const LinkedIn = (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );

    const ShapesIcon = (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
    );

    const Instagram = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );

    const Twitter = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );

    const Behance = (props) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
        >
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    );

    const About = (props) => (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 8"
            fill="currentColor"
        >
            <path d="M13.0245 1.182C12.1105 1.182 11.6025 1.8595 11.496 2.594H14.5695C14.486 1.8935 13.991 1.1845 13.025 1.1845L13.0245 1.182ZM11.519 3.597C11.6755 4.3675 12.3135 4.909 13.207 4.909C13.6885 4.909 14.3865 4.7295 14.795 4.2995L15.579 5.201C14.871 5.9405 13.811 6.1515 13.087 6.1515C11.3265 6.1515 9.9545 4.88 9.9545 3.078C9.9545 1.3905 11.217 0 13.001 0C14.725 0 16.001 1.32 16.001 3.068V3.578H11.519V3.597ZM7.1935 6.149V2.3545C7.1935 1.7065 6.904 1.331 6.3 1.331C5.7585 1.331 5.3995 1.7215 5.1565 2.003V6.1615H3.589V2.362C3.589 1.7105 3.313 1.3415 2.711 1.3415C2.1695 1.3415 1.7945 1.732 1.5655 2.0135V6.172H0V0.0885H1.568V0.854C1.8335 0.5465 2.4345 0.0155001 3.3725 0.0155001C4.206 0.0155001 4.7705 0.365 5.023 1.0755C5.3745 0.568 6.023 0.0155001 6.963 0.0155001C8.0985 0.0155001 8.7575 0.6875 8.7575 1.9895V6.1515H7.1895L7.192 6.146L7.1935 6.149Z" />
        </svg>
    );



    // Drawer Content Component 
    const DrawerContent = ({ isDesktop = false, onClose }) => (
        <div className={`h-full w-full bg-[#fffbe8] z-[100px]  ${isDesktop ? 'p-3 pl-15 border-r-1 pt-[2rem]' : 'p-3 tablet:px-[64px] '}`}>
            <div className="h-full w-full sticky">
                {/* Header Images */}
                <div className="flex justify-between items-center mb-4">
                    <NavLink to="/" className="cursor-none">
                        <img
                            className="rounded-full border border-black w-[3rem] h-[3rem] tablet:w-[4.625rem] tablet:h-[4.625rem]"
                            src="https://avatars.githubusercontent.com/u/130484055?v=4"
                            alt="Profile"

                        />
                    </NavLink>
                    {!isDesktop && (
                        <div
                            id="Crossicon"
                            className="rotate-45 cursor-none"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <p className="text-primary-text font-archivo text-base font-medium tablet:text-2xl ">
                    Satya Prangya Sootar
                </p>
                <div className="flex my-2 ">
                    <div className="text-primary-text font-archivo text-[0.625rem] font-extralight mb-3 tablet:text-[1rem] flex items-center gap-13">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=satya.sootar06@gmail.com&su=Hello%20Satya&body=I%20wanted%20to%20talk%20to%20you%20about..."
                            target="_blank"
                            rel="noopener noreferrer" className="cursor-none" >satya.sootar06@gmail.com</a> <ClipboardCopy />
                    </div>
                </div>

                {/* Buttons */}
                <div className="inline-flex flex-col gap-4 mb-5 ">

                    <ShimmerButton text="Resume" link="https://drive.google.com/file/d/17S1nVURBMDgnHvYA087-pFMDih4qBtAl/view?usp=sharing" />

                </div>

                {/* Menu */}
                <p className="tablet:text-2xl">Menu</p>
                <div className="text-primary-text flex flex-col font-archivo text-base font-normal mb-2 ">
                    <NavLink to="/" end onClick={onClose} className="cursor-none">
                        {({ isActive }) => (
                            <MenuItem Icon={HomeIcon} label="Home" isActive={isActive} />
                        )}
                    </NavLink>
                    <NavLink to="/about" onClick={onClose} className="cursor-none" >
                        {
                            ({ isActive }) => (
                                <MenuItem Icon={About} label="About" isActive={isActive} />
                            )
                        }
                    </NavLink>
                    {/* <NavLink to="/contact" onClick={onClose}>
                        {({ isActive }) => (
                            <MenuItem Icon={MailIcon} label="Contact" isActive={isActive} />
                        )}
                    </NavLink> */}
                    <NavLink to="/playground" onClick={onClose} className="cursor-none">
                        {({ isActive }) => (
                            <MenuItem Icon={ShapesIcon} label="Playground" isActive={isActive} />
                        )}
                    </NavLink>
                </div>

                {/* Social */}
                <p className="font-archivo font-normal mt-5 mb-2 tablet:text-2xl">Socials</p>
                <div className="min-w-[2rem] cursor-none">

                    <SocialMediaButtons />
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile/Tablet Navbar */}
            <div className="relative bg-[#fffbe8] top-0 z-50 laptop:hidden px-[1.25rem] tablet:px-[4rem]">
                {/* Navbar */}
                <div className="flex justify-between items-center py-[0.7rem] border-b-1 border-b-[#b9b9b9]">
                    <div className="w-[2.8125rem] h-[2.8125rem] rounded-[2.8125rem] border-[0.529px] border-[#242424] tablet:w-[4.625rem] tablet:h-[4.625rem] tablet:rounded-[4.625rem] tablet:border-[0.871px]">
                        <NavLink to="/" >
                            <img
                                className="rounded-[2.8125rem] tablet:w-[4.625rem] tablet:h-[4.625rem] tablet:rounded-[4.625rem] tablet:border-[0.871px]"
                                src="https://avatars.githubusercontent.com/u/130484055?v=4"
                                alt="Profile image"
                            />

                        </NavLink>
                    </div>
                    <div onClick={() => setShowDrawer(true)} className="cursor-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
                            <line y1="1" x2="28" y2="1" stroke="black" strokeWidth="2" />
                            <line y1="10" x2="28" y2="10" stroke="black" strokeWidth="2" />
                            <line y1="19" x2="28" y2="19" stroke="black" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 ${showDrawer ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setShowDrawer(false)}
                />

                {/* Mobile Drawer */}
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-[#fffbe8] z-50 transform transition-transform duration-300 ease-in-out ${showDrawer ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <DrawerContent onClose={() => setShowDrawer(false)} />
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden laptop:block fixed top-0 left-0 h-full w-80 bg-[#fffbe8] z-90 border-r border-gray-200">
                <DrawerContent isDesktop={true} onClose={() => { }} />
            </div>
        </>
    );
};

export default NavbarWithDrawer;