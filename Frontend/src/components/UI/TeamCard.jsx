import { useState, useRef, forwardRef } from "react";
import useInView from "../../hooks/useInView";
import { ArrowLeft, ArrowRight } from "lucide-react";


export const TeamCard = ({ member, animDelay }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <article
            ref={ref}
            // Scroll-triggered staggered fade + slide up
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${animDelay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
            }}
            className="shrink-0 w-65 md:w-70 group cursor-pointer"
        >

            {/* Image container — crossfade hover effect */}
            <div className="relative overflow-hidden rounded-2xl aspect-3/4 mb-4 group">

                {/* Base Image */}
                <img
                    src={member.image}
                    alt={member.name}
                    className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform duration-700
            group-hover:scale-105
        "
                    loading="lazy"
                />

                {/* Hover Overlay Reveal Image */}
                <div
                    className="
            absolute inset-0
            overflow-hidden
            pointer-events-none
            z-10
        "
                >
                    <img
                        src={member.hoverImage}
                        alt={member.name}
                        className="
                w-full h-full
                object-cover
                transition-all
                duration-1200
                ease-[cubic-bezier(0.22,1,0.36,1)]

                scale-110
                group-hover:scale-100

                [clip-path:inset(0_0_100%_0)]
                group-hover:[clip-path:inset(0_0_0_0)]
            "
                        loading="lazy"
                    />
                </div>

                {/* Bottom Shadow Blend */}
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

            {/* Info */}
            <div>
                <h3 className="text-text-secondary font-medium text-3xl tracking-tight">
                    {member.name}
                </h3>
                <p className="text-text-muted text-normal mt-1">{member.role}</p>
            </div>
        </article>
    );
};