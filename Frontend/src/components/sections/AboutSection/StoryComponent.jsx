import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBtn } from '../../UI/ArrowBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../../../hooks/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const StoryComponent = () => {

    const navigate = useNavigate();

    const sectionRef = useRef(null);
    const leftImg = useRef(null);
    const centerImg = useRef(null);
    const rightImg = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            if (window.innerWidth < 1024) return;

            const common = {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
            };

            gsap.fromTo(leftImg.current,
                { y: -120 },
                {
                    y: 60,
                    scrollTrigger: {
                        ...common,
                        scrub: 0.5,
                    }
                }
            );

            gsap.fromTo(centerImg.current,
                { y: 180, scale: 0.98 },
                {
                    y: -100,
                    scale: 1,
                    scrollTrigger: {
                        ...common,
                        scrub: 0.7,
                    }
                }
            );

            gsap.fromTo(rightImg.current,
                { y: 0 },
                {
                    y: -40,
                    scrollTrigger: {
                        ...common,
                        scrub: 0.4,
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <div className="w-full bg-white pt-20">

            <div className="mx-auto  px-3">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">

                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">

                        {/* Section Button */}
                        <div className="mb-3 sm:mb-4 md:mb-6">
                            <ArrowBtn
                                onClick={() => navigate('/courses')}
                                label="Our Courses"
                                iconBg="bg-black"
                                iconColor="text-white"
                                textColor="text-black"
                                padding="px-2 py-2"
                                hoverBtnBg="hover:bg-white"
                                hoverIconBg="group-hover:bg-black"
                                hoverTextColor="group-hover:text-black"
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[52px] leading-tight tracking-tight text-center lg:text-left">
                            Starting small to shaping
                            <br className="hidden sm:block" />
                            Educational experiences
                        </h2>

                    </div>

                    {/* Right Section - Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-5 sm:gap-5 gap-y-5 ">

                            <p className="sm:text-base md:text-lg text-gray-500 text-[16px] leading-relaxed tracking-tighter">
                               Founded on a tradition of academic excellence, our institution is dedicated to empowering students through exceptional education, innovative research, and transformative learning experiences. We cultivate intellectual curiosity, critical thinking, and leadership while preparing students to make meaningful contributions to their communities and the world.

                            </p>

                            <p className="sm:text-base md:text-lg text-gray-500 text-[16px] leading-relaxed tracking-tighter">
                               Our approach combines rigorous academic study with hands-on learning, research, and real-world experiences. Through collaborative projects, innovative teaching, and access to modern resources, students develop the knowledge, critical thinking, and leadership skills needed to excel in their careers and make a meaningful impact on society.
                             </p>

                        </div>
                    </div>
                </div>
            </div>


            {/* Images Section */}
            <div
                ref={sectionRef}
                className=" w-full lg:h-200 relative mt-10"
            >

                {/* MOBILE + TABLET (normal grid) */}
                <ScrollReveal className="grid grid-cols-1 sm:grid-cols-3 md:hidden gap-4 p-3">
                    <img src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672425/about1_u17tpl.jpg" className="w-full rounded-2xl object-cover" />
                    <img src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672723/about2_lfvf9y.jpg" className="w-full rounded-2xl object-cover" />
                    <img src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672762/about3_jxy7gc.jpg" className="w-full rounded-2xl object-cover" />
                </ScrollReveal>


                {/* DESKTOP (animated layered version) */}
                <ScrollReveal className="hidden md:grid relative w-full aspect-16/9">

                    <img
                        ref={leftImg}
                        src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672425/about1_u17tpl.jpg"
                        className="absolute w-[28%] h-[85%] object-cover rounded-2xl top-0 left-0"
                    />

                    <img
                        ref={centerImg}
                        src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672723/about2_lfvf9y.jpg"
                        className="absolute w-[38%] h-[90%] object-cover rounded-2xl top-[10%] left-1/2 -translate-x-1/2"
                    />

                    <img
                        ref={rightImg}
                        src="https://res.cloudinary.com/dvutwc18m/image/upload/v1783672762/about3_jxy7gc.jpg"
                        className="absolute w-[28%] h-[85%] object-cover rounded-2xl top-0 right-0"
                    />

                </ScrollReveal>

            </div>
        </div>
    );
};

export default StoryComponent;