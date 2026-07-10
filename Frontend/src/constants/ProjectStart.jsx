import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const ProjectStart = () => {
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
        <div className="min-h-[35vh] sticky top-30 flex pb-20">
            <div className="w-full ">

                <div
                    ref={headerRef}
                    className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20"
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-[96px] font-semibold text-black text-center lg:text-left tracking-tighter">
                        Projects
                    </h1>

                    <p
                        ref={statsRef}
                        className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-500 text-center lg:text-right max-w-xl tracking-tight px-4 sm:px-0"
                    >
                        Discover our innovative design projects – a testament to
                        <br className="hidden sm:block" /> {/* Sirf tablet/desktop pe show hoga */}
                        creativity and effectiveness. Dive into case studies that
                        <br className="hidden sm:block" /> {/* Sirf tablet/desktop pe show hoga */}
                        demonstrate our influence.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProjectStart;