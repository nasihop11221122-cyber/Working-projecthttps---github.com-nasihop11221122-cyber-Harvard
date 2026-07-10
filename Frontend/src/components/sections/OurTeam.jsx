// import { useState, useRef } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { ArrowBtn } from '../UI/ArrowBtn.jsx'
// import { SecHeading } from '../UI/Secheading'
// import { TeamCard } from '../UI/TeamCard'
// import { TeamData } from "../../constants/HomeData.js";
// import { IkArrowButton } from "../UI/IkArrowButton.jsx";
// import { SliderArrow } from "../common/SliderArrow.jsx";
// import { useNavigate } from "react-router-dom";



// const CARDS_PER_VIEW = 4; // desktop default — slider scrolls 1 card at a time


// // ───------------ TeamSection ──────────────────────
// const TeamSection = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const sliderRef = useRef(null);

//     const maxIndex = TeamData.Members.length - CARDS_PER_VIEW;

//     const goTo = (index) => {
//         const clamped = Math.max(0, Math.min(index, maxIndex));
//         setCurrentIndex(clamped);
//     };

//     // Each card width + gap
//     const CARD_WIDTH = 284;
//     const translateX = currentIndex * CARD_WIDTH;

//     return (
//         <section className="w-full bg-bg-dark py-16 lg:py-20 overflow-hidden">
//             <div className="max-w-330 mx-auto p-4" id='team'>

//                 {/* ───────────────── HEADER SECTION ───────────────── */}
//                 <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//                     <ArrowBtn
//                         label="Our Team"
//                         iconBg="bg-black"
//                         iconColor="text-white"
//                         textColor="text-black"
//                         padding="px-2 py-2"
//                         hoverBtnBg="hover:bg-white"
//                         hoverIconBg="group-hover:bg-black"
//                         hoverTextColor="group-hover:text-black"
//                     />

//                 </div>

//                 {/* Heading + Desktop Arrows */}
//                 <div className="mt-6 mb-12 flex items-center justify-between gap-4">
//                     <div className="w-full text-center lg:text-left">
//                         <SecHeading
//                             title={TeamData.heading}
//                             subtitle={TeamData.subtitle}
//                         />
//                     </div>

//                     {/* Desktop Only Arrows */}
//                     <div className="hidden lg:flex items-center gap-2">
//                         <SliderArrow
//                             direction="left"
//                             onClick={() => goTo(currentIndex - 1)}
//                             disabled={currentIndex === 0}
//                         />
//                         <SliderArrow
//                             direction="right"
//                             onClick={() => goTo(currentIndex + 1)}
//                             disabled={currentIndex >= maxIndex}
//                         />
//                     </div>
//                 </div>

//                 {/* ───────────────── SLIDER TRACK ───────────────── */}
//                 <div
//                     ref={sliderRef}
//                     className="overflow-hidden"
//                 >
//                     <div
//                         className="flex gap-6"
//                         style={{
//                             transform: `translateX(-${translateX}px)`,
//                             transition:
//                                 "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
//                         }}
//                     >
//                         {TeamData.Members.map((member, idx) => (
//                             <TeamCard
//                                 key={member.id}
//                                 member={member}
//                                 animDelay={idx < CARDS_PER_VIEW ? idx * 100 : 0}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* ───────────────── MOBILE/TABLET ARROWS ───────────────── */}
//                 <div className="flex justify-end gap-2 mt-6 lg:hidden">
//                     <SliderArrow
//                         direction="left"
//                         onClick={() => goTo(currentIndex - 1)}
//                         disabled={currentIndex === 0}
//                     />
//                     <SliderArrow
//                         direction="right"
//                         onClick={() => goTo(currentIndex + 1)}
//                         disabled={currentIndex >= maxIndex}
//                     />
//                 </div>

//                 {/* ───────────────── DOTS ───────────────── */}
//                 <div className="flex items-center gap-2 mt-10">
//                     {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => goTo(i)}
//                             aria-label={`Go to slide ${i + 1}`}
//                             className={`
//                                 h-0.75 rounded-full transition-all duration-300 cursor-pointer
//                                 ${i === currentIndex
//                                     ? "w-8 bg-secondary"
//                                     : "w-4 bg-border-dark hover:bg-text-muted"
//                                 }
//                             `}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };


// export default TeamSection;







import { useState, useRef, useEffect } from "react";
import { ArrowBtn } from '../UI/ArrowBtn.jsx';
import { SecHeading } from '../UI/Secheading';
import { TeamCard } from '../UI/TeamCard';
import { TeamData } from "../../constants/HomeData.js";
import { SliderArrow } from "../common/SliderArrow.jsx";

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [cardWidth, setCardWidth] = useState(284 + 24); // width + gap
    const sliderRef = useRef(null);
    const firstCardRef = useRef(null); // 👈 ref on first card

    // Swipe refs
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // ── Swipe Handlers ──
    //     // ───── SWIPE LOGIC ─────
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;

        // threshold to avoid accidental swipe
        if (distance > 50) {
            goTo(currentIndex + 1); // swipe left
        } else if (distance < -50) {
            goTo(currentIndex - 1); // swipe right
        }
    };




    // ── Responsive: update cardsPerView + cardWidth on resize ──
    useEffect(() => {
        const update = () => {
            // Update cards per view
            if (window.innerWidth < 640) setCardsPerView(1);
            else if (window.innerWidth < 1024) setCardsPerView(2);
            else setCardsPerView(4);

            // Measure actual card width from DOM
            if (firstCardRef.current) {
                const gap = 24; // gap-6 = 24px
                setCardWidth(firstCardRef.current.offsetWidth + gap);
            }
        };

        update(); // run on mount
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Math.max(0, TeamData.Members.length - cardsPerView);

    const goTo = (index) => {
        const clamped = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(clamped);
    };

    const translateX = currentIndex * cardWidth;

    return (
        <section className="w-full bg-bg-dark py-16 lg:py-20 overflow-hidden">
            <div className="max-w-330 mx-auto p-4" id='team'>

                {/* HEADER — unchanged */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <ArrowBtn
                        label="Our Team"
                        iconBg="bg-black"
                        iconColor="text-white"
                        textColor="text-black"
                        padding="px-2 py-2"
                        hoverBtnBg="hover:bg-white"
                        hoverIconBg="group-hover:bg-black"
                        hoverTextColor="group-hover:text-black"
                    />
                </div>

                {/* Heading + Desktop Arrows */}
                <div className="mt-6 mb-12 flex items-center justify-between gap-4">
                    <div className="w-full text-center lg:text-left">
                        <SecHeading title={TeamData.heading} subtitle={TeamData.subtitle} />
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <SliderArrow direction="left" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} />
                        <SliderArrow direction="right" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= maxIndex} />
                    </div>
                </div>

                {/* SLIDER TRACK */}
                <div ref={sliderRef} className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>

                    <div
                        className="flex gap-6"
                        style={{
                            transform: `translateX(-${translateX}px)`,
                            transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                    >
                        {TeamData.Members.map((member, idx) => (
                            <TeamCard
                                key={member.id}
                                member={member}
                                animDelay={idx < cardsPerView ? idx * 100 : 0}
                                // 👇 attach ref to first card only
                                ref={idx === 0 ? firstCardRef : null}
                            />
                        ))}
                    </div>
                </div>

                {/* MOBILE/TABLET ARROWS — unchanged */}
                <div className="flex justify-end gap-2 mt-6 lg:hidden">
                    <SliderArrow direction="left" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} />
                    <SliderArrow direction="right" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex >= maxIndex} />
                </div>

                {/* DOTS */}
                <div className="flex items-center gap-2 mt-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`
                                h-0.75 rounded-full transition-all duration-300 cursor-pointer
                                ${i === currentIndex ? "w-8 bg-secondary" : "w-4 bg-border-dark hover:bg-text-muted"}
                            `}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};






// import { ArrowBtn } from '../UI/ArrowBtn.jsx';
// import { SecHeading } from '../UI/Secheading';
// import { TeamCard } from '../UI/TeamCard';
// import { TeamData } from "../../constants/HomeData.js";
// import { SliderArrow } from "../common/SliderArrow.jsx";

// const TeamSection = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [cardsPerView, setCardsPerView] = useState(4);

//     const sliderRef = useRef(null);

//     // Swipe refs
//     const touchStartX = useRef(0);
//     const touchEndX = useRef(0);

//     // ───── RESPONSIVE CARDS ─────
//     const getCardsPerView = () => {
//         if (window.innerWidth < 640) return 1;
//         if (window.innerWidth < 1024) return 3;
//         return 4;
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             setCardsPerView(getCardsPerView());
//             setCurrentIndex(0); // reset to avoid overflow
//         };

//         handleResize(); // run on mount
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // ───── SLIDER LOGIC ─────
//     const maxIndex = TeamData.Members.length - cardsPerView;

//     const goTo = (index) => {
//         const clamped = Math.max(0, Math.min(index, maxIndex));
//         setCurrentIndex(clamped);
//     };

//     // 👉 Dynamic width (KEY FIX)
//     const CARD_WIDTH = sliderRef.current
//         ? sliderRef.current.offsetWidth / cardsPerView
//         : 280;

//     const translateX = currentIndex * CARD_WIDTH;

//     // ───── SWIPE LOGIC ─────
//     const handleTouchStart = (e) => {
//         touchStartX.current = e.touches[0].clientX;
//     };

//     const handleTouchMove = (e) => {
//         touchEndX.current = e.touches[0].clientX;
//     };

//     const handleTouchEnd = () => {
//         const distance = touchStartX.current - touchEndX.current;

//         // threshold to avoid accidental swipe
//         if (distance > 50) {
//             goTo(currentIndex + 1); // swipe left
//         } else if (distance < -50) {
//             goTo(currentIndex - 1); // swipe right
//         }
//     };

//     return (
//         <section className="w-full bg-bg-dark py-16 lg:py-20 overflow-hidden">
//             <div className="max-w-330 mx-auto p-4" id='team'>

//                 {/* HEADER */}
//                 <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//                     <ArrowBtn label="Our Team" />
//                 </div>

//                 {/* Heading + Arrows */}
//                 <div className="mt-6 mb-12 flex items-center justify-between gap-4">
//                     <div className="w-full text-center lg:text-left">
//                         <SecHeading
//                             title={TeamData.heading}
//                             subtitle={TeamData.subtitle}
//                         />
//                     </div>

//                     <div className="hidden lg:flex gap-2">
//                         <SliderArrow
//                             direction="left"
//                             onClick={() => goTo(currentIndex - 1)}
//                             disabled={currentIndex === 0}
//                         />
//                         <SliderArrow
//                             direction="right"
//                             onClick={() => goTo(currentIndex + 1)}
//                             disabled={currentIndex >= maxIndex}
//                         />
//                     </div>
//                 </div>

//                 {/* ───── SLIDER ───── */}
//                 <div
//                     ref={sliderRef}
//                     className="overflow-hidden"
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                     onTouchEnd={handleTouchEnd}
//                 >
//                     <div
//                         className="flex gap-6"
//                         style={{
//                             transform: `translateX(-${translateX}px)`,
//                             transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
//                         }}
//                     >
//                         {TeamData.Members.map((member, idx) => (
//                             <div
//                                 key={member.id}
//                                 style={{ minWidth: `${100 / cardsPerView}%` }} // 🔥 IMPORTANT
//                             >
//                                 <TeamCard
//                                     member={member}
//                                     animDelay={idx < cardsPerView ? idx * 100 : 0}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE ARROWS */}
//                 <div className="flex justify-end gap-2 mt-6 lg:hidden">
//                     <SliderArrow
//                         direction="left"
//                         onClick={() => goTo(currentIndex - 1)}
//                         disabled={currentIndex === 0}
//                     />
//                     <SliderArrow
//                         direction="right"
//                         onClick={() => goTo(currentIndex + 1)}
//                         disabled={currentIndex >= maxIndex}
//                     />
//                 </div>

//                 {/* DOTS */}
//                 <div className="flex items-center gap-2 mt-10">
//                     {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//                         <button
//                             key={i}
//                             onClick={() => goTo(i)}
//                             className={`
//                 h-1 rounded-full transition-all duration-300
//                 ${i === currentIndex
//                                     ? "w-8 bg-secondary"
//                                     : "w-4 bg-border-dark"
//                                 }
//               `}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };


export default TeamSection;