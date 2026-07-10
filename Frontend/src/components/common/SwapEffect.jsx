
export const SwapEffect = ({
    children,
    className = "",
    hoverTextColor = "group-hover:text-black",
}) => {

    return (
        <span
            className={`
        group flex flex-col relative overflow-hidden h-6 justify-center ${hoverTextColor}
        ${className}
      `}
        >
            {/* First (default) */}
            <span className="transition-all duration-500 group-hover:-translate-y-8">
                {children}
            </span>

            {/* Second (hover) */}
            <span className="absolute translate-y-8 transition-all duration-500 group-hover:translate-y-0">
                {children}
            </span>
        </span>
    );
};