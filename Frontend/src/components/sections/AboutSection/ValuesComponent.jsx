import React, { useState } from 'react';
import { ArrowBtn } from '../../UI/ArrowBtn';
import { cardsData } from "../../../constants/aboutdata.js"
import { useNavigate, Navigate } from 'react-router-dom'

const ValuesComponent = () => {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen bg-[#171717] w-full py-14 md:py-20 px-4 md:px-6 lg:px-8'>
            {/* Section Button */}
            <div className="w-full flex items-center justify-center pb-4 md:pb-5 ">
                <ArrowBtn
                    onClick={() => navigate("/services")}
                    label="Our Services"
                    iconBg="bg-white"
                    iconColor="text-black"
                    textColor="text-white"
                    padding="px-4 py-4"
                    hoverIconBg="group-hover:bg-white"
                    hoverTextColor="group-hover:text-white"
                    hoverBtnBg="hover:bg-transparent"
                    hoverIconColor="group-hover:text-black"
                />
            </div>

            {/* Main Heading */}
            <div className="w-full flex items-center justify-center text-center px-4">
                <h1 className='text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-medium tracking-tighter text-white leading-tight'>
                    Our works across industries
                </h1>
            </div>

            {/* Subheading - Two lines on mobile, one line on desktop */}
            <div className="w-full flex items-center justify-center text-center mt-4 md:mt-6 px-4">
                <h2 className='text-[#A3A3A3] text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto flex flex-col tracking-tighter'>
                    <span className="block sm:inline">Check out our awesome projects that are sure to grab </span>
                    <span className="block sm:inline">attention on Instagram!</span>
                </h2>
            </div>


            <div className="w-full flex items-center justify-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cardsData.map((card) => (
                        <div key={card.name}
                            className="relative rounded-2xl p-6 h-100 border border-[#3a3a3a]
             shadow-lg flex flex-col justify-between overflow-hidden
             bg-[linear-gradient(230deg,#ffffff14,#ffffff05_93%)]"
                        >

                            <div
                                className="absolute inset-0 opacity-0 
                                bg-[linear-gradient(230deg,#ffffff26,#ffffff10_93%)]
                                 transition-opacity duration-500 ease-out
                                 hover:opacity-100"
                            />
                            {/* Icon */}
                            <div>
                                <img
                                    src={card.Icon}
                                    alt={card.name}
                                    className="w-20 h-20 opacity-70"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-[28px] font-medium tracking-tight text-white mb-3">
                                    {card.name}
                                </h3>
                                <p className="text-gray-400 text-sm text-[16px] leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ValuesComponent;
