import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowBtn } from "../../UI/ArrowBtn";
import ScrollReveal from "../../../hooks/ScrollReveal"
import { projects } from "../../../constants/Projectsdata";
import { Link } from "react-router-dom";
import { SliderArrow } from "../../common/SliderArrow.jsx";



const LayoutCarousal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(2);
    const sliderRef = useRef(null);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setIsMobile(true);
                setItemsPerView(1);
            } else {
                setIsMobile(false);
                setItemsPerView(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate max index
    const maxIndex = Math.max(0, projects.length - itemsPerView);

    // Navigation functions
    const goTo = useCallback((index) => {
        if (index < 0) {
            setCurrentIndex(0);
        } else if (index > maxIndex) {
            setCurrentIndex(maxIndex);
        } else {
            setCurrentIndex(index);
        }
    }, [maxIndex]);

    const nextSlide = () => {
        goTo(currentIndex + 1);
    };

    const prevSlide = () => {
        goTo(currentIndex - 1);
    };

    // Touch/Swipe support
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                // Swipe left - go next
                nextSlide();
            } else {
                // Swipe right - go prev
                prevSlide();
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="w-full px-3 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">

            <div className="w-full flex pb-4 md:pb-5 ">
                <ArrowBtn
                    label="Our Projects"
                    iconBg="bg-black"
                    iconColor="text-white"
                    textColor="text-black"
                    padding="px-2 py-2"
                    hoverIconBg="group-hover:bg-black"
                    hoverTextColor="group-hover:text-black"
                    hoverBtnBg="hover:bg-transparent"
                    hoverIconColor="group-hover:text-white"
                />
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12">
                <div className="max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-medium text-gray-900 tracking-tight mb-3 leading-tight">
                        Our works across industries
                    </h2>
                    <p className="text-[20px] text-gray-500 leading-relaxed tracking-relaxed ">
                        Check out our awesome projects that are sure to grab attention on Instagram!
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3">
                    <SliderArrow
                        direction="left"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    />
                    <SliderArrow
                        direction="right"
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                    />
                </div>
            </div>

            {/* Slider Container */}
            <div
                className="overflow-hidden "
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-out will-change-transform"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    }}
                >
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={project.link}
                            className={`shrink-0 px-2 ${isMobile ? "w-full" : "w-1/2"}`}
                        >
                            <div className="group cursor-pointer">
                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 mb-4">
                                    <ScrollReveal className="aspect-[4/3] sm:aspect-[16/12]">
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </ScrollReveal>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>

                                {/* Project Info */}
                                <div className="px-1">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default LayoutCarousal;