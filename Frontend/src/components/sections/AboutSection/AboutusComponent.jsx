import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedNumber from '../../../components/UI/AnimatedNumber.jsx';
import ScrollReveal from '../../../hooks/ScrollReveal';
import aboutus from "../../../../public/images/Projects/ourteam.jpg"
const AboutusComponent = () => {
    const stats = [
        { value: "85", label: "build thousends", name: "stars of comunity" },
        { value: "90", label: "Perents", name: "Satisfaction" },
        { value: "95", label: "Practical Training", name: "Approach" },
    ];

    const headerRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(headerRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(statsRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.3"
            );
    }, []);

    return (
        <div className="w-full bg-white px-2 mt-18">
            <div className="mx-auto">
                {/* Header */}
                <div ref={headerRef} className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-20">
                    <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-bold text-black text-center lg:text-left">
                        About us
                    </h1>

                    <p className="text-md sm:text-lg text-gray-500 text-center lg:text-right max-w-xl">
                        tools that make your work easier. We focus on smart
                        <br />
                        design and useful features, project after project.
                    </p>
                </div>

                {/* Image */}
                <ScrollReveal className="mt-6 md:mt-8 lg:mt-12">
                    <img
                        src={aboutus}
                        alt="About us"
                        className="w-full h-auto object-cover rounded-lg"
                        loading='lazy'
                    />
                </ScrollReveal>

                {/* Stats */}
                <div ref={statsRef} className="mt-8 md:mt-10 lg:mt-16">
                    <div className="border border-[#D1D1D1] rounded-2xl bg-white overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                            {stats.map((item, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center justify-center text-center px-4 py-6 md:py-8 relative">

                                    {index !== 0 && (
                                        <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-[#E5E5E5]" />
                                    )}

                                    {index !== 0 && (
                                        <div className="block sm:hidden absolute top-0 left-4 right-4 h-px bg-[#E5E5E5]" />
                                    )}

                                    <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#1a1a1a] flex items-center">
                                        <AnimatedNumber number={parseInt(item.value)} />
                                        %
                                    </h2>

                                    <p className="text-gray-500 text-xs sm:text-sm mt-2">
                                        {item.label}
                                    </p>

                                    <p className="text-black font-medium text-sm sm:text-base mt-1">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutusComponent;