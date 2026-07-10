import React from 'react'
import SuccessStory from './SuccessStory'
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { SecHeading } from "../UI/Secheading";
import { ArrowBtn } from "../UI/ArrowBtn"; // your existing ArrowBtn component
import { UseInViewWrapper } from '../UI/UseInViewWrapper';
import { FAQData } from '../../constants/HomeData.js';

const FaqItem = ({ item, isOpen, onToggle }) => (
    <div className="bg-[#f5f5f5] rounded-2xl px-6 md:px-8 py-6 transition-all duration-300">

        {/* ── Question Row ── */}
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-4 text-left"
        >
            {/* Question */}
            <span className="text-lg md:text-xl font-medium text-text-dark">
                {item.question}
            </span>

            {/* Icon */}
            <span
                className={`
          flex items-center justify-center w-10 h-10 rounded-full
          transition-all duration-300
          ${isOpen
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"}
        `}
            >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </span>
        </button>

        {/* ── Answer ── */}
        <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? "12px" : "0px",
            }}
        >
            <p className="text-text-muted text-sm md:text-base leading-relaxed pr-10">
                {item.answer}
            </p>
        </div>

    </div>
);
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    // Clicking the open item closes it (null). Clicking another swaps to it.
    const [openId, setOpenId] = useState(null);
  let Navigate=useNavigate()
    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };


    return (
        <>
            <SuccessStory />

            <section className="bg-bg-dark py-20 lg:py-28">

                <div className="mx-auto grid justify-center items-center gap-8 lg:gap-10">

                    <UseInViewWrapper>
                        <div className="header flex flex-col items-center text-center gap-5 max-w-175 mx-auto">

                            {/* Heading */}
                            <SecHeading title={FAQData.heading} />

                            {/* Subtitle */}
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-150">
                                {FAQData.subtitle}
                            </p>

                            {/* Button */}
                            <UseInViewWrapper delay={800}>
                                <div onClick={function(){
                                    Navigate("/contact")
                                }} className="mt-2">
                                    <ArrowBtn
                                        label="Contact Us"
                                        onClick={() => Navigate("/contact")}
                                        btnBg="bg-gray-50"
                                        padding='px-4 py-4'
                                        iconBg="bg-primary"
                                        iconColor="text-white"
                                        textColor="text-text-dark"
                                        border='border border-text-muted'
                                        hoverBtnBg="hover:bg-primary"
                                        hoverIconBg="group-hover:bg-secondary"
                                        hoverIconColor='group-hover:text-text-dark'
                                        hoverTextColor="group-hover:text-text-primary"
                                    />
                                </div>
                            </UseInViewWrapper>

                        </div>
                    </UseInViewWrapper>


                    {/* FAQ quesitons */}
                    <div className="*:my-2">
                        {FAQData.items.map((item, idx) => (
                            <UseInViewWrapper delay={800} key={idx}>
                                <FaqItem
                                    key={idx}
                                    item={item}
                                    isOpen={openId === item.id}
                                    onToggle={() => handleToggle(item.id)}
                                />
                            </UseInViewWrapper>
                        ))}
                    </div>

                </div>

            </section>


        </>
    )
}

export default FAQ