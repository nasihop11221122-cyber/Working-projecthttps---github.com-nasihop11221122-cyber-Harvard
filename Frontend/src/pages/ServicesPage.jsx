// import { Link } from "react-router-dom";
// import { SecHeading } from "../components/UI/Secheading.jsx";
// import CTASection from "../components/sections/Cta.jsx";
// import useInView from "../hooks/useInView.js";
// import { SSI_SERVICES } from "../constants/servicesPageData.js";
// import { getServicesPageHeader } from "../constants/servicesPageData.js";
// import { ArrowBtn } from "../components/UI/ArrowBtn.jsx";
// import { useState, useEffect } from "react";
// import api from "../services/api.js";
// import { Helmet } from "react-helmet-async";


// const SubServiceRow = ({ item, serviceId }) => (
//     <Link
//         to={`/services/${item._id}/${serviceId}`}
//         className="relative overflow-hidden flex items-center justify-between gap-4 border-b border-border-light py-8 group"
//     >
//         <span
//             aria-hidden="true"
//             className="absolute inset-0 bg-secondary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-380 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         />
//         <div className="relative z-10 flex items-center gap-5 min-w-0">
//             <span className="text-sm font-medium shrink-0 text-text-dark transition-colors duration-300">
//                 {item.number}
//             </span>
//             <span className="text-lg md:text-xl font-semibold truncate text-text-dark transition-colors duration-300">
//                 {item.title}
//             </span>
//         </div>
//         <ArrowBtn
//             iconBg="bg-white"
//             iconColor="text-text-dark"
//             hoverIconBg="group-hover:bg-black"
//             hoverIconColor="group-hover:text-text-primary"
//         />
//     </Link>
// );

// const ServiceCategoryBlock = ({ category, index }) => {
//     const [ref, isInView] = useInView({ threshold: 0.1 });
//     const imageRight = index % 2 === 0;

//     return (
//         <div
//             ref={ref}
//             style={{
//                 opacity: isInView ? 1 : 0,
//                 transform: isInView ? "translateY(0)" : "translateY(24px)",
//                 transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
//             }}
//             className="py-12 md:py-16"
//         >
//             <div className={`grid grid-cols-1 gap-10 lg:gap-16 ${imageRight ? "lg:grid-cols-[4fr_2fr]" : "lg:grid-cols-[2fr_4fr]"}`}>

//                 {/* Subcategory rows */}
//                 <div className={imageRight ? "order-1" : "order-2"}>
//                     <h3 className="text-text-dark font-medium text-2xl md:text-2xl lg:text-3xl tracking-tight mb-8">
//                         {category.title}
//                     </h3>
//                     <div className="border-t border-border-light">
//                         {category.subCategories.map((sub, i) => (
//                             <SubServiceRow serviceId={category._id} key={sub.id} item={{ ...sub, number: String(i + 1).padStart(2, "0") }} />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Thumbnail */}
//                 <div
//                     className={`w-full rounded-2xl overflow-hidden ${imageRight ? "order-2" : "order-1"}`}
//                     style={{ minHeight: "240px" }}
//                 >
//                     <img
//                         src={category.thumbnail}
//                         alt={category.title}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                     />
//                 </div>

//             </div>
//         </div>
//     );
// };

// const ServicesHero = ({ heading, subtitle }) => (
//     <section className="bg-bg-secondary pt-36 pb-16 lg:pt-44 lg:pb-6">
//         <div className="max-w-330 mx-auto px-3">
//             <div className="grid md:grid-cols-2 gap-6">
//                 <SecHeading title={heading} text="lg:text-6xl" font="font-extrabold" />
//                 <p className="text-black/50 font-thin md:text-lg max-w-xl mt-4 tracking-tight">
//                     {subtitle}
//                 </p>
//             </div>
//         </div>
//     </section>
// );

// const ServicesPage = () => {
//     const header = getServicesPageHeader();
//     const [scrolled, setScrolled] = useState(false);
//     let [services, setServices] = useState([]);

//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);




//     useEffect(() => {
//         api.get('/services')
//             .then(response => {
//                 setServices(response.data.AllServices);
//             })
//             .catch(error => {
//                 console.error('Error fetching services:', error);
//             });
//     }, [])

//     return (

//         <>
//             <Helmet>
//                 <title>IT Services in Bannu | SSI Bannu Software House</title>

//                 <meta
//                     name="description"
//                     content="SSI Bannu provides professional IT services including web development, software solutions and digital services in Bannu."
//                 />

//                 <meta
//                     name="keywords"
//                     content="software house Bannu, IT services Bannu, web development Bannu"
//                 />

//                 <link
//                     rel="canonical"
//                     href="https://www.ssibannu.com/services"
//                 />

//                 <meta property="og:title" content="IT Services in Bannu" />
//                 <meta
//                     property="og:description"
//                     content="Professional IT and software services by SSI Bannu."
//                 />
//                 <meta property="og:type" content="website" />
//                 <meta
//                     property="og:url"
//                     content="https://www.ssibannu.com/services"
//                 />
//                 <meta
//                     property="og:image"
//                     content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
//                 />
//             </Helmet>

//             <main className="relative">

//                 <div className={`sticky top-0 transition-all duration-300 ${scrolled ? "blur-md opacity-40 bg-bg-main" : "blur-none bg-transparent opacity-100"}`}>
//                     <ServicesHero heading={header.heading} subtitle={header.subtitle} />
//                 </div>

//                 <section className="pb-20 lg:pb-28">
//                     <div className="max-w-330 mx-auto px-3">
//                         {services?.map((category, index) => (
//                             <ServiceCategoryBlock key={category.id} category={category} index={index} />
//                         ))}
//                     </div>
//                 </section>

//                 <CTASection />

//             </main>
//         </>
//     );
// };

// export default ServicesPage;

















import { Link } from "react-router-dom";
import { SecHeading } from "../components/UI/Secheading.jsx";
import CTASection from "../components/sections/Cta.jsx";
import useInView from "../hooks/useInView.js";
import { SSI_SERVICES } from "../constants/servicesPageData.js";
import { getServicesPageHeader } from "../constants/servicesPageData.js";
import { ArrowBtn } from "../components/UI/ArrowBtn.jsx";
import { useState, useEffect } from "react";
import api from "../services/api.js";
import SEO from '../services/SEO'; // ✅ SEO Component Import

// ─────────────────────────────────────────────────────────────────────────────
// SubServiceRow Component
// ─────────────────────────────────────────────────────────────────────────────
const SubServiceRow = ({ item, serviceId }) => (
    <Link
        to={`/services/${item._id}/${serviceId}`}
        className="relative overflow-hidden flex items-center justify-between gap-4 border-b border-border-light py-8 group"
    >
        <span
            aria-hidden="true"
            className="absolute inset-0 bg-secondary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-380 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        <div className="relative z-10 flex items-center gap-5 min-w-0">
            <span className="text-sm font-medium shrink-0 text-text-dark transition-colors duration-300">
                {item.number}
            </span>
            <span className="text-lg md:text-xl font-semibold truncate text-text-dark transition-colors duration-300">
                {item.title}
            </span>
        </div>
        <ArrowBtn
            iconBg="bg-white"
            iconColor="text-text-dark"
            hoverIconBg="group-hover:bg-black"
            hoverIconColor="group-hover:text-text-primary"
        />
    </Link>
);

// ─────────────────────────────────────────────────────────────────────────────
// ServiceCategoryBlock Component
// ─────────────────────────────────────────────────────────────────────────────
const ServiceCategoryBlock = ({ category, index }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    const imageRight = index % 2 === 0;

    return (
        <div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
            }}
            className="py-12 md:py-16"
        >
            <div className={`grid grid-cols-1 gap-10 lg:gap-16 ${imageRight ? "lg:grid-cols-[4fr_2fr]" : "lg:grid-cols-[2fr_4fr]"}`}>

                {/* Subcategory rows */}
                <div className={imageRight ? "order-1" : "order-2"}>
                    <h3 className="text-text-dark font-medium text-2xl md:text-2xl lg:text-3xl tracking-tight mb-8">
                        {category.title}
                    </h3>
                    <div className="border-t border-border-light">
                        {category.subCategories?.map((sub, i) => (
                            <SubServiceRow serviceId={category._id} key={sub.id} item={{ ...sub, number: String(i + 1).padStart(2, "0") }} />
                        ))}
                    </div>
                </div>

                {/* Thumbnail */}
                <div
                    className={`w-full rounded-2xl overflow-hidden ${imageRight ? "order-2" : "order-1"}`}
                    style={{ minHeight: "240px" }}
                >
                    <img
                        src={category.thumbnail}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// ServicesHero Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesHero = ({ heading, subtitle }) => (
    <section className="bg-bg-secondary pt-36 pb-16 lg:pt-44 lg:pb-6">
        <div className="max-w-330 mx-auto px-3">
            <div className="grid md:grid-cols-2 gap-6">
                <SecHeading title={heading} text="lg:text-6xl" font="font-extrabold" />
                <p className="text-black/50 font-thin md:text-lg max-w-xl mt-4 tracking-tight">
                    {subtitle}
                </p>
            </div>
        </div>
    </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main ServicesPage Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesPage = () => {
    const header = getServicesPageHeader();
    const [scrolled, setScrolled] = useState(false);
    const [services, setServices] = useState([]);

    // Scroll effect for hero
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Fetch services from API
    useEffect(() => {
        api.get('/services')
            .then(response => {
                setServices(response.data.AllServices);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);

    // ✅ Services data for schema
    const servicesSchemaData = services?.map((service) => ({
        name: service.title,
        description: service.subCategories?.map(sub => sub.title).join(', '),
        slug: service.slug,
        url: `https://www.ssibannu.com/services/${service.slug}`
    })) || [];

    return (
        <>
            {/* ✅ SEO Component - Complete SEO for Services Page */}
            <SEO
                // Primary Meta Tags
                title="IT Services in Bannu | Web Development, Software Solutions - SSI Bannu"
                description="SSI Bannu provides professional IT services in Bannu including web development, custom software, mobile apps, UI/UX design, and digital solutions. Get expert IT services in Bannu."
                keywords="IT services Bannu, software house Bannu, web development Bannu, custom software solutions Bannu, mobile app development Bannu, UI/UX design Bannu, digital services Bannu, IT solutions Bannu, software company Bannu, web design Bannu"

                // URL & Images
                url="https://www.ssibannu.com/services"
                image="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
                imageWidth="1200"
                imageHeight="630"

                // Site Info
                siteName="SSI Bannu"
                locale="en_US"
                author="SSI Bannu"

                // Location - Bannu Specific
                city="Bannu"
                region="PK-KP"

                // Social Media
                twitterCard="summary_large_image"

                // ✅ Schema Options
                isLocalBusiness={true}     // ✅ Local Business Schema
                // isCourseList={false}    // ❌ Course list nahi hai
                isBreadcrumb={true}        // ✅ Breadcrumb Schema
                breadcrumbItems={[
                    { name: "Home", url: "https://www.ssibannu.com/" },
                    { name: "Services", url: "https://www.ssibannu.com/services" }
                ]}
            />

            <main className="relative">
                {/* Hero Section with blur effect */}
                <div className={`sticky top-0 transition-all duration-300 ${scrolled ? "blur-md opacity-40 bg-bg-main" : "blur-none bg-transparent opacity-100"}`}>
                    <ServicesHero heading={header.heading} subtitle={header.subtitle} />
                </div>

                {/* Services Categories */}
                <section className="pb-20 lg:pb-28">
                    <div className="max-w-330 mx-auto px-3">
                        {services?.map((category, index) => (
                            <ServiceCategoryBlock key={category._id || index} category={category} index={index} />
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <CTASection />
            </main>
        </>
    );
};

export default ServicesPage;