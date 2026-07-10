import { useState } from "react";
import { ArrowBtn } from "../UI/ArrowBtn";
import { SecHeading } from "../UI/Secheading";
import { ServicesData } from "../../constants/HomeData.js";
import { useNavigate } from "react-router-dom";

const VISIBLE_TAGS = 3;

// ─── Service Row ─────────────────────────────────────────────────────
const ServiceRow = ({
    service,
    isExpanded,
    onMouseEnter,
    onMouseLeave,
    onClick,
}) => (
    <div
        className="w-full relative overflow-hidden border-b border-gray-200 cursor-pointer group"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
    >
        {/* Background Fill */}
        <div
            className="absolute inset-0 bg-secondary z-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
                transform: isExpanded ? "translateY(0%)" : "translateY(100%)",
            }}
        />

        {/* Content */}
        <div className="relative grid z-10 py-6 md:py-7">

            {/* ── TOP ROW ── */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 px-3 py-4 sm:p-4">

                {/* LEFT: NUMBER + TITLE */}
                <div className="flex items-center gap-3 sm:gap-6 min-w-0">

                    {/* NUMBER */}
                    <span className="text-base sm:text-xl font-medium shrink-0">
                        {service.number}
                    </span>

                    {/* TITLE */}
                    <h3 className="text-base sm:text-xl md:text-2xl font-medium text-text-dark truncate">
                        {service.title}
                    </h3>
                </div>

                {/* RIGHT: ICON */}
                <div className="relative shrink-0 w-7 h-7 sm:w-8 sm:h-8">

                    {/* Default */}
                    <span
                        className="absolute right-0 sm:right-4 flex items-center justify-center transition-opacity duration-300"
                        style={{ opacity: isExpanded ? 0 : 1 }}
                    >
                        <ArrowBtn
                            iconBg="bg-gray-50"
                            iconColor="text-text-dark"
                        />
                    </span>

                    {/* Expanded */}
                    <span
                        className="absolute right-0 sm:right-4 flex items-center justify-end transition-opacity duration-300"
                        style={{ opacity: isExpanded ? 1 : 0 }}
                    >
                        <ArrowBtn
                            iconBg="bg-primary"
                            iconColor="text-text-primary"
                            hoverIconBg="bg-primary"
                            hoverIconColor="text-text-primary"
                        />
                    </span>
                </div>
            </div>

            {/* ── EXPANDED CONTENT ── */}
            <div
                className="overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                    maxHeight: isExpanded ? "220px" : "0px",
                    opacity: isExpanded ? 1 : 0,
                }}
            >
                <div
                    className="pt-5 flex items-center justify-center gap-4 md:flex-row lg:items-center"
                >

                    {/* IMAGE */}
                    <div className="w-55 h-27.5 rounded-xl overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-col gap-4">

                        <p className="text-xl font-thin uppercase tracking-widest text-text-dark">
                            Categories
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {service.tags.slice(0, VISIBLE_TAGS).map((tag) => (
                                <span
                                    key={tag}
                                    className="
                                    px-3 py-1 rounded-lg bg-gray-100
                                 text-text-muted text-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>


                    </div>



                </div>
            </div>
        </div>
    </div>
);

// ─── Services Section ────────────────────────────────────────────────
const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [activeId, setActiveId] = useState(null);

    const handleMouseEnter = (id) => setHoveredId(id);
    const handleMouseLeave = () => setHoveredId(null);

    const navigate = useNavigate()

    const handleClick = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    const isExpanded = (id) =>
        hoveredId === id || activeId === id;

    return (
        <section className="bg-bg-dark py-20 lg:py-28 px-4">
            <div className="max-w-330 mx-auto">

                {/* HEADER */}
                <div className="mb-10">
                    <ArrowBtn
                        label="Our Services"
                        iconBg="bg-black"
                        iconColor="text-white"
                        textColor="text-black"
                        padding="px-2 py-2"
                        hoverBtnBg="hover:bg-white"
                        hoverIconBg="group-hover:bg-black"
                        hoverTextColor="group-hover:text-black"
                        onClick={() => navigate("/services")}
                    />
                </div>

                <div className="mb-12">
                    <SecHeading title={ServicesData.Title} />
                </div>

                {/* SERVICES LIST */}
                <div className="w-full">
                    {ServicesData.ServicesList.map((service) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            isExpanded={isExpanded(service.id)}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(service.id)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
