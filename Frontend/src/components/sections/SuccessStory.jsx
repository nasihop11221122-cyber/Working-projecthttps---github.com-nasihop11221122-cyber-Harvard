import { ArrowBtn } from "../UI/ArrowBtn.jsx";
import AnimatedNumber from "../UI/AnimatedNumber"; // ← your own CountUp component
import { SecHeading } from "../UI/Secheading.jsx";
import { UseInViewWrapper } from "../UI/UseInViewWrapper.jsx"; // ← your own useInView hook   
import { successStoryData } from "../../constants/HomeData.js";

// ─── Star rating ──────────────────────────────────────────────────────────────
// 5 filled stars — rendered as unicode to avoid an extra import
const StarRating = () => (
    <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M8 1L9.854 5.516L14.657 5.635L11 8.765L12.292 13.365L8 10.8L3.708 13.365L5 8.765L1.343 5.635L6.146 5.516L8 1Z"
                    fill="#0A0A0A"
                />
            </svg>
        ))}
    </div>
);

// ─── SuccessSection ───────────────────────────────────────────────────────────
const SuccessStory = () => (
    <section className="bg-bg-main py-10 md:py-20 lg:py-28">
        <div className="max-w-330 mx-auto px-6 lg:px-0">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 *:text-lg gap-6">

                {/* ───────── CARD 1 ───────── */}
                <UseInViewWrapper>
                    <div className="bg-bg-light p-6 rounded-2xl flex flex-col justify-between 
                        min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[500px]md:col-span-2 h-full lg:col-span-1">

                        {/* Top Left */}
                        <div>
                            <SecHeading
                                title="SSIB"
                                subtitle={successStoryData.heading}

                            />
                        </div>

                        {/* Bottom Right */}
                        <div className="self-end text-right">
                            <p className="text-text-label text-sm max-w-[250px]">
                                {successStoryData.description}
                            </p>
                        </div>

                    </div>
                </UseInViewWrapper>



                {/* ───────── CARD 2 (MATCHED DESIGN) ───────── */}
                {/* <UseInViewWrapper delay={700}> */}
                <div className="relative rounded-2xl overflow-hidden p-2 min-h-95 lg:min-h-125">

                    {/* Background Image */}
                    <img
                        src={successStoryData.image}
                        alt="testimonial-image"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />

                    {/* Soft White Overlay (Full fade like screenshot) */}
                    <div className="absolute w-[90%] mx-auto inset-0 bg-gradient-to-t from-white via-white/30 via-60% to-white/10" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">

                        <div className="max-w-[90%]">
                            <p className="text-text-dark text-base md:text-lg leading-relaxed">
                                {successStoryData.list[0].feedback}
                            </p>

                            <div className="mt-4 md:mt-6">
                                <p className="text-text-dark font-semibold text-base">
                                    {successStoryData.list[0].name}
                                </p>
                                <p className="text-text-label text-sm">
                                    {successStoryData.list[0].role}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* </UseInViewWrapper> */}


                {/* ───────── CARD 3 ───────── */}
                <UseInViewWrapper delay={800}>
                    <div className="bg-gray-100 p-6 rounded-2xl flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[500px]">

                        {/* TOP */}
                        <div className="flex flex-col gap-4">
                            <StarRating />

                            <p className="text-text-dark text-lg font-medium">
                                {successStoryData.list[1].feedback}
                            </p>
                        </div>


                        {/* BOTTOM */}
                        <div className="flex flex-col gap-6 mt-6">

                            {/* Stats */}
                            <div className="flex items-center gap-8">
                                <div>
                                    <p className="text-5xl font-medium tracking-wide flex items-end gap-0.5">
                                        <AnimatedNumber steps={45} number={7} />
                                        <span className="text-4xl mb-1">+</span>
                                    </p>
                                    <p className="text-xs text-text-label mt-1">Presence in countries.</p>
                                </div>

                                <div>
                                    <p className="text-5xl font-medium tracking-wide flex items-end gap-0.5">
                                        <AnimatedNumber steps={45} number={12} />
                                        <span className="text-4xl mb-1">+</span>
                                    </p>
                                    <p className="text-xs text-text-label mt-1">Experience</p>
                                </div>
                            </div>


                            {/* Testimonial Person */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={successStoryData.list[1].avatar}
                                    alt={successStoryData.list[1].name}
                                    className="w-12 h-12 rounded-full object-cover shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-text-dark">
                                        {successStoryData.list[1].name}
                                    </p>
                                    <p className="text-xs text-text-label">
                                        {successStoryData.list[1].role}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </UseInViewWrapper>

            </div>
        </div>
    </section>
);

export default SuccessStory;