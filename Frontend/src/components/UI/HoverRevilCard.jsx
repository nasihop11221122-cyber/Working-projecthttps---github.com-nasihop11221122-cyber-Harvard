import React, { useRef, useState, useEffect } from 'react';

export const HoverRevealCard = ({
    image,
    hoverImage,
    title,
    subtitle,
    animDelay = 0,
    width = "w-[260px] md:w-[280px]",
    aspect = "aspect-[3/4]",
    className = "",
}) => {


    // hooks/useInView.js file bana kr usem yeh code daal do aur pir wahan se use krna.
    // Detects krtha hai when element enters the viewport.   
    const useInView = (options = {}) => {
        const ref = useRef(null);
        const [isInView, setIsInView] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Once visible, stay visible (no re-trigger on scroll out)
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                },
                { threshold: 0.15, ...options }
            );

            const el = ref.current;
            if (el) observer.observe(el);

            return () => { if (el) observer.unobserve(el); };
        }, []);

        return [ref, isInView];
    };

    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <article
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(40px)",
                transition: `
                    opacity 0.6s ease ${animDelay}ms,
                    transform 0.6s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms
                `,
            }}
            className={`
                flex-shrink-0 group cursor-pointer
                ${width}
                ${className}
            `}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden rounded-2xl mb-4 group ${aspect}`}>

                {/* Base Image */}
                <img
                    src={image}
                    alt={title}
                    className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                    "
                    loading="lazy"
                />

                {/* Hover Reveal Image */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                    <img
                        src={hoverImage}
                        alt={title}
                        className="
                            w-full h-full
                            object-cover
                            transition-all
                            duration-[1200ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            scale-110
                            group-hover:scale-100

                            [clip-path:inset(0_0_100%_0)]
                            group-hover:[clip-path:inset(0_0_0_0)]
                        "
                        loading="lazy"
                    />
                </div>

                {/* Bottom Shadow */}
                <div
                    className="
                        absolute bottom-0 left-0 right-0 h-10
                        bg-gradient-to-t
                        from-black/10
                        to-transparent
                        pointer-events-none
                        z-20
                        opacity-100
                        group-hover:opacity-0
                        transition-opacity
                        duration-[1200ms]
                    "
                />
            </div>

            {/* Content */}
            {(title || subtitle) && (
                <div>
                    {title && (
                        <h3 className="text-text-secondary font-medium text-3xl leading-snug">
                            {title}
                        </h3>
                    )}

                    {subtitle && (
                        <p className="text-text-muted text-normal mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
        </article>
    );
};


// usage for example
// import HoverRevilCard from './HoverRevilCard'
// <HoverRevealCard
//     image="/project1.png"
//     hoverImage="/project-hover.png"
//     title="Ibrahim khan"
//     subtitle="MERN Stack dev"
// />