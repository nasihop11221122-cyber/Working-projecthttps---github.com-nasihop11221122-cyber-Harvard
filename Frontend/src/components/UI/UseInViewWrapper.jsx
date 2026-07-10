import { useEffect, useRef, useState } from "react";

export const UseInViewWrapper = ({
    children,
    delay = 0,
    duration = 700,
    distance = 30,
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

    const [ref, isInView] = useInView();


    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                    ? "translateY(0px)"
                    : `translateY(${distance}px)`,

                transition: `
          opacity ${duration}ms ease,
          transform ${duration}ms ease
        `,
                transitionDelay: `${delay}ms`,
            }}
        >

            {children}

        </div>
    );
};



// usage for example
// import UseInViewWrapper from './UseInViewWrapper';

// <UseInViewWrapper delay={100}
//  duration={800}
//  distance={50}
//  className="my-class">

//     <YourComponent />

// </UseInViewWrapper>


