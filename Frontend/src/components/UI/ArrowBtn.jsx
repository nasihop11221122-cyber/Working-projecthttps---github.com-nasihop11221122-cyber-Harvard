import { useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";

export const ArrowBtn = ({
    label,
    onClick,

    btnBg = "bg-transparent",
    iconBg = "bg-black",
    border = "",

    textColor = "text-white",
    iconColor = "text-black",

    hoverBtnBg = "hover:bg-black",
    hoverIconBg = "group-hover:bg-white",

    hoverTextColor = "group-hover:text-black",
    hoverIconColor = "group-hover:text-white",

    padding = "px-2 py-2",
}) => {
    const btnRef = useRef(null);

    useEffect(() => {
        if (!btnRef.current) return;

        gsap.fromTo(
            btnRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            className={`
                ${btnBg}
                ${hoverBtnBg}
                ${padding}
                ${border}
                flex items-center gap-2
                rounded-full group overflow-hidden
                transition-all duration-400
            `}
        >
            {/* Icon */}
            <span
                className={`
                    rounded-full h-6 w-6 flex items-center justify-center
                    relative overflow-hidden
                    ${iconBg}
                    ${hoverIconBg}
                    ${iconColor}
                    ${hoverIconColor}
                    transition-all duration-300
                `}
            >
                <BsArrowUpRight className={`absolute transition-all duration-500 group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0`} />

                <BsArrowUpRight className="absolute translate-y-4 -translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </span>

            {/* Text */}
            <span
                className={`
                    flex flex-col relative overflow-hidden h-6 justify-center
                    ${textColor}
                    ${hoverTextColor}
                    transition-colors duration-300
                `}
            >
                <p className="transition-all duration-500 group-hover:-translate-y-8 text-lg">
                    {label}
                </p>

                <p className="absolute translate-y-8 transition-all duration-500 group-hover:translate-y-0 text-lg">
                    {label}
                </p>
            </span>
        </button>
    );
};