import { Link } from "react-router-dom";
import { ArrowBtn } from "../UI/ArrowBtn"; // your existing component
import ImageSlider3D from "../UI/ImageSlider3D";
import { IkArrowButton } from "../UI/IkArrowButton";
import { CTAData } from "../../constants/HomeData";




// ─── CTASection ───────────────────────────────────────────────────────────────
const CTASection = () => (
    <>

        <section className="bg-bg-card pt-20 lg:pt-28 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-2 lg:px-0">

                <div className="flex flex-col gap-16">

                    {/* ── Center content ── */}
                    <div className="flex flex-col items-center text-center gap-6 px-0 lg:px-8 pb-4">

                        <h2 className="text-text-primary text-4xl md:text-5xl font-medium tracking-tight">
                            Let's Build <br /> something meaningful
                        </h2>

                        <p className="text-text-muted text-lg leading-relaxed max-w-150">
                            {CTAData.description}
                        </p>

                        <Link to="/contact">
                            <ArrowBtn
                                label={CTAData.button.label}
                                onClick={() => { }}
                                btnBg="bg-secondary"
                                iconBg="bg-primary"
                                border="group-hover:border-border-light"
                                iconColor="text-text-primary"
                                padding="px-2.5 py-2.5"
                                textColor="text-text-secondary font-medium"
                                hoverBtnBg="hover:bg-black"
                                hoverIconBg="group-hover:bg-secondary"
                                hoverIconColor="group-hover:text-text-dark"
                                hoverTextColor="group-hover:text-text-primary"
                            />

                        </Link>
                        
                    </div>

                    {/* ── Slider Section ── */}
                    {/* <div className="perspective-[1200px]">
                        <ImageSlider3D images={images} />
                    </div> */}

                    {/* <div className="w-full h-1 bg-zinc-700"></div> */}

                </div>
            </div>
        </section>
    </>
);

export default CTASection;