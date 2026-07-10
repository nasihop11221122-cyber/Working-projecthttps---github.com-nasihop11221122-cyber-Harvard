import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const LayoutStart = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const tagsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(titleRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(descriptionRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        )
        .fromTo(tagsRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
            "-=0.4"
        );
    }, []);

    return (
        <div ref={containerRef} className="min-h-[40vh] w-full flex items-center px-3 sm:px-6 py-12 mt-20 md:py-16 lg:py-20">
            <div className="mx-auto w-full">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

                    <div 
                        ref={titleRef}
                        className="shrink-0 lg:text-left"
                    >
                        <h1 className="text-[52px] sm:text-7xl lg:text-[52px]  font-medium text-black tracking-tighter leading-[1.1] md:leading-[1.2]">
                            Lune
                        </h1>
                    </div>

                    {/* Right Side - Description and Tags */}
                    <div className="flex flex-col items-center lg:items-end gap-6 md:gap-8 w-full lg:max-w-xl xl:max-w-2xl">
                        {/* Description */}
                        <p 
                            ref={descriptionRef}
                            className="text-base sm:text-lg md:text-xl text-gray-500 text-center lg:text-right tracking-tight leading-relaxed"
                        >
                            Dive into our design projects – a testament to innovation
                            <br className="hidden sm:block" />
                            and success. Discover case studies that influence.
                        </p>

                        {/* Tags Row - Horizontal scroll on mobile, wrap on larger screens */}
                        <div 
                            ref={tagsRef}
                            className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4 w-full"
                        >
                            <span className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-[#F8F8FA] rounded-full text-sm md:text-base font-medium text-gray-700 tracking-tight">
                                Development
                            </span>
                            <span className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-[#F8F8FA] rounded-full text-sm md:text-base font-medium text-gray-700 tracking-tight">
                                X Industry
                            </span>
                            <span className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-[#F8F8FA] rounded-full text-sm md:text-base font-medium text-gray-700 tracking-tight">
                                Website
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutStart;