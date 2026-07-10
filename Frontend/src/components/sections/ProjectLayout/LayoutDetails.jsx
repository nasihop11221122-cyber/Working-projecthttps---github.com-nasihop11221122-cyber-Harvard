import ScrollReveal from "../../../hooks/ScrollReveal.jsx"
import { steps } from "../../../constants/Projectsdata.js"
import { step2 } from "../../../constants/Projectsdata.js"
import { step3 } from "../../../constants/Projectsdata.js"
import { projects } from "../../../constants/Projectsdata.js" // Import projects data
import { useEffect, useRef, useState } from "react" // Added useState
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const LayoutDetails = () => {

    const containerRef = useRef(null);

    // Refs for About Project section
    const aboutTitleRef = useRef(null);
    const aboutDescRef = useRef(null);

    // Refs for Steps sections
    const stepsContainerRef1 = useRef(null);
    const stepsContainerRef2 = useRef(null);
    const stepsContainerRef3 = useRef(null);

    // Projects Slider State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    // Check screen size for slider
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const itemsPerView = isMobile ? 1 : 2;
    const maxIndex = Math.max(0, projects.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        // Store ScrollTrigger instances for cleanup
        const triggers = [];

        // About Project Section Animation
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        aboutTl.fromTo(aboutTitleRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(aboutDescRef.current,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            );

        if (aboutTl.scrollTrigger) triggers.push(aboutTl.scrollTrigger);

        // Steps Section 1 Animation
        const step1Elements = stepsContainerRef1.current?.querySelectorAll('.step-item');
        if (step1Elements) {
            step1Elements.forEach((step, index) => {
                const numberEl = step.querySelector('.step-number');
                const titleEl = step.querySelector('.step-title');
                const descEl = step.querySelector('.step-desc');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.fromTo(numberEl,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: index * 0.1 }
                )
                    .fromTo(titleEl,
                        { x: -30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.3"
                    )
                    .fromTo(descEl,
                        { x: 30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.4"
                    );

                if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
            });
        }

        // Steps Section 2 Animation
        const step2Elements = stepsContainerRef2.current?.querySelectorAll('.step-item');
        if (step2Elements) {
            step2Elements.forEach((step, index) => {
                const numberEl = step.querySelector('.step-number');
                const titleEl = step.querySelector('.step-title');
                const descEl = step.querySelector('.step-desc');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.fromTo(numberEl,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: index * 0.1 }
                )
                    .fromTo(titleEl,
                        { x: -30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.3"
                    )
                    .fromTo(descEl,
                        { x: 30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.4"
                    );

                if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
            });
        }

        // Steps Section 3 Animation
        const step3Elements = stepsContainerRef3.current?.querySelectorAll('.step-item');
        if (step3Elements) {
            step3Elements.forEach((step, index) => {
                const numberEl = step.querySelector('.step-number');
                const titleEl = step.querySelector('.step-title');
                const descEl = step.querySelector('.step-desc');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });

                tl.fromTo(numberEl,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: index * 0.1 }
                )
                    .fromTo(titleEl,
                        { x: -30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.3"
                    )
                    .fromTo(descEl,
                        { x: 30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                        "-=0.4"
                    );

                if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
            });
        }

        // Cleanup function
        return () => {
            triggers.forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <>
            {/* About Project Section */}
            <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
                <div className="w-full bg-[#1A1A1A] rounded-2xl sm:rounded-3xl relative">

                    {/* Image Section - NO ANIMATION */}
                    <div className="relative w-full pt-[52%] sm:pt-[48%] lg:pt-[44%]">
                        <img
                            src="/images/Projects/project-1.webp"
                            alt="Project Preview"
                            className="absolute left-1/2 -translate-x-1/2 top-[-18%] sm:top-[-16%] lg:top-[-18%] w-[80%] sm:w-[78%] lg:w-[80%] xl:h-150 lg:h-full md:h-full sm:h-full object-cover rounded-2xl sm:rounded-3xl border-[3px] sm:border-4 border-white"
                        />
                    </div>

                    {/* Text Section with ScrollTrigger */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-8 px-10 sm:px-7 xl:px-30 pt-20 pb-20">
                        <div ref={aboutTitleRef} className="shrink-0 sm:min-w-37.5 lg:min-w-50">
                            <h1 className="text-white font-medium text-[26px] sm:text-[32px] lg:text-[42px] leading-tight tracking-tight">
                                About project
                            </h1>
                        </div>
                        <div ref={aboutDescRef} className="flex flex-col gap-3">
                            <p className="text-gray-400 text-[20px] leading-relaxed tracking-tighter max-w-xl lg:max-w-2xl">
                                Jotumu is a user-friendly grocery app that streamlines the grocery
                                shopping process. We aim to provide users a wide range of local shops
                                and products, enhancing convenience and supporting local businesses.
                            </p>
                            <p className="text-gray-400 text-[20px] leading-relaxed tracking-tighter max-w-xl lg:max-w-2xl">
                                Our team took on the challenge of crafting a mobile app that blends functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Image - NO ANIMATION */}
            <ScrollReveal className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden">
                    <img
                        src="/images/Projects/project-7.webp"
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </ScrollReveal>

            {/* Steps Section 1 with ScrollTrigger */}
            <div ref={stepsContainerRef1} className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 py-4 sm:py-6 lg:py-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="step-item flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-0 py-5 sm:py-6 md:py-8 lg:py-10 border-b border-gray-200 last:border-b-0"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0 md:w-1/2 lg:flex-1 min-w-0">
                            <div className="step-number w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                                <span className="text-white text-lg sm:text-xl md:text-2xl tracking-tighter font-medium">
                                    {step.number}
                                </span>
                            </div>
                            <span className="step-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tighter wrap-break-words">
                                {step.title}
                            </span>
                        </div>
                        <div className="step-desc md:w-1/2 lg:flex-1 pl-0 md:pl-4 lg:pl-1 text-left">
                            <p className="text-sm sm:text-base md:text-[17px] lg:text-[19px] text-gray-700 leading-relaxed tracking-tight">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Grid Section - NO ANIMATION on images */}
            <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
                        <img
                            src="/images/Projects/project-8.webp"
                            alt="Project 8"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                        <img
                            src="/images/Projects/project-9.webp"
                            alt="Project 9"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                    </ScrollReveal>
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="/images/Projects/project-10.webp"
                            alt="Project 10"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                        <img
                            src="/images/Projects/project-11.webp"
                            alt="Project 11"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                    </ScrollReveal>
                </div>
            </div>

            {/* Steps Section 2 with ScrollTrigger */}
            <div ref={stepsContainerRef2} className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 py-4 sm:py-6 lg:py-8">
                {step2.map((step, index) => (
                    <div
                        key={index}
                        className="step-item flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-0 py-5 sm:py-6 md:py-8 lg:py-10 border-b border-gray-200 last:border-b-0"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0 md:w-1/2 lg:flex-1 min-w-0">
                            <div className="step-number w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                                <span className="text-white text-lg sm:text-xl md:text-2xl tracking-tighter font-medium">
                                    {step.number}
                                </span>
                            </div>
                            <span className="step-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tighter wrap-break-words">
                                {step.title}
                            </span>
                        </div>
                        <div className="step-desc md:w-1/2 lg:flex-1 pl-0 md:pl-4 lg:pl-1 text-left">
                            <p className="text-sm sm:text-base md:text-[17px] lg:text-[19px] text-gray-700 leading-relaxed tracking-tight">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Width Image - NO ANIMATION */}
            <ScrollReveal className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden">
                    <img
                        src="/images/Projects/project-7.webp"
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </ScrollReveal>

            {/* Steps Section 3 with ScrollTrigger */}
            <div ref={stepsContainerRef3} className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 py-4 sm:py-6 lg:py-8">
                {step3.map((step, index) => (
                    <div
                        key={index}
                        className="step-item flex flex-col md:flex-row items-start gap-3 sm:gap-4 md:gap-0 py-5 sm:py-6 md:py-8 lg:py-10 border-b border-gray-200 last:border-b-0"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0 md:w-1/2 lg:flex-1 min-w-0">
                            <div className="step-number w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                                <span className="text-white text-lg sm:text-xl md:text-2xl tracking-tighter font-medium">
                                    {step.number}
                                </span>
                            </div>
                            <span className="step-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tighter wrap-break-words">
                                {step.title}
                            </span>
                        </div>
                        <div className="step-desc md:w-1/2 lg:flex-1 pl-0 md:pl-4 lg:pl-1 text-left">
                            <p className="text-sm sm:text-base md:text-[17px] lg:text-[19px] text-gray-700 leading-relaxed tracking-tight">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* Final Image Grid - NO ANIMATION on images */}
            <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-25 pt-8 sm:pt-10 lg:pt-14 pb-6 sm:pb-8 lg:pb-10">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
                        <img
                            src="/images/Projects/project-15.webp"
                            alt="Project 15"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                        <img
                            src="/images/Projects/project-13.webp"
                            alt="Project 13"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                    </ScrollReveal>
                    <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="/images/Projects/project-14.webp"
                            alt="Project 14"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                        <img
                            src="/images/Projects/project-12.webp"
                            alt="Project 12"
                            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-xl"
                        />
                    </ScrollReveal>
                </div>
            </div>          

        </>
    )
}

export default LayoutDetails