import { ArrowUp, ChevronsUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// register plugin
gsap.registerPlugin(ScrollToPlugin);



export const BackToTop = () => {

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1.2,          // control speed (Kenzo feel = slower)
            scrollTo: { y: 0 },
            ease: "power3.inOut",   // smooth premium easing
        });
    };

    return (
    //     <button
    //         onClick={scrollToTop}
    //         className="
    //     fixed bottom-10 right-10 z-40
    //     w-12 h-12 rounded-lg
    //     border border-white/50
    //     grid place-items-center
    //     bg-primary text-white
    //     transition-all duration-300
    //     hover:border-secondary
    //   "
    //     >
    //         <ChevronsUp size={20} />
    //     </button>
    <></>
    );
};