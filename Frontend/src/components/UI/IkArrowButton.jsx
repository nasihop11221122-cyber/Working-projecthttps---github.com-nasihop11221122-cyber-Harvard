import { useRef, useEffect } from "react";
import { BsArrowUpRight, BsArrowUpLeft } from "react-icons/bs";
import gsap from "gsap";

// color: "white" | "black" | "transparent"
// arrowSide: "left" | "right" (default)
const colorConfig = {
  white: {
    btnBg: "bg-white",
    hoverBtnBg: "hover:bg-black",
    textColor: "text-black",
    hoverTextColor: "group-hover:text-white",
    iconBg: "bg-black",
    padding: "px-2 py-2",
    hoverIconBg: "group-hover:bg-white",
    iconColor: "text-white",
    hoverIconColor: "group-hover:text-black",
    border: "border border-black/20",
  },
  black: {
    btnBg: "bg-bg-card",
    hoverBtnBg: "hover:bg-bg-light",
    textColor: "text-white",
    hoverTextColor: "group-hover:text-black",
    padding: "px-2 py-2",
    iconBg: "bg-white",
    hoverIconBg: "group-hover:bg-black",
    iconColor: "text-black",
    hoverIconColor: "group-hover:text-white",
    border: "border border-border-light",
  },
  transparent: {
    btnBg: "bg-transparent",
    hoverBtnBg: "hover:bg-black",
    textColor: "text-white",
    hoverTextColor: "group-hover:text-white",
    iconBg: "bg-white",
    hoverIconBg: "group-hover:bg-white",
    iconColor: "text-text-dark",
    hoverIconColor: "group-hover:text-text-dark",
  },
};

export const IkArrowButton = ({
  label,
  color = "black",
  arrowSide = "right",
}) => {
  const btnRef = useRef(null);
  const cfg = colorConfig[color] ?? colorConfig.black;
  const ArrowIcon = arrowSide === "left" ? BsArrowUpRight : BsArrowUpRight;

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  const iconEl = (
    <span className={`
        rounded-full h-6 w-6 flex items-center justify-center
        relative overflow-hidden shrink-0
        ${cfg.iconBg} ${cfg.hoverIconBg}
        ${cfg.iconColor} ${cfg.hoverIconColor}
        transition-all duration-300
    `}>
      <ArrowIcon className="absolute transition-all duration-500
        group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0" />
      <ArrowIcon className="absolute translate-y-4 -translate-x-4 opacity-0
        transition-all duration-500
        group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
    </span>
  );

  return (
    <button
      ref={btnRef}
      className={`
        ${cfg.btnBg} ${cfg.hoverBtnBg} ${cfg.border}
        flex items-center gap-2
        rounded-full group overflow-hidden
        transition-all duration-400
        px-3 py-2 w-fit max-w-full
        ${arrowSide === "left" ? "flex-row-reverse" : ""}
      `}
    >
      {iconEl}

      <span className={`
          flex flex-col relative overflow-hidden h-6 justify-center
          ${cfg.textColor} ${cfg.hoverTextColor}
          transition-colors duration-300
      `}>
        <p className="transition-all duration-500 group-hover:-translate-y-8 text-lg whitespace-nowrap">
          {label}
        </p>
        <p className="absolute translate-y-8 transition-all duration-500
            group-hover:translate-y-0 text-lg whitespace-nowrap">
          {label}
        </p>
      </span>
    </button>
  );
};