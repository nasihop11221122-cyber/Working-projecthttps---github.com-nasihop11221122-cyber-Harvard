import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SecHeading = ({ title, subtitle, text = 'text-black', font, subText = '' }) => {
    const headingRef = useRef(null);

    useEffect(() => {
        const el = headingRef.current;

        if (!el) return;

        gsap.fromTo(
            el.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div ref={headingRef} className="max-w-3xl mt-2">
            <h1 className={`section-head ${text} ${font}`}>
                THS
            </h1>
            <h2 className={`section-head ${subText}`}>{subtitle}</h2>
        </div>
    );
};
