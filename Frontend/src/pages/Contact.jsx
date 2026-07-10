// import React from "react";
// import { MapPin, Phone, Mail } from "lucide-react";
// import { socialLinks } from "../constants/socialLinks.js";
// import ContactForm from "../components/UI/Form.jsx";
// import { Helmet } from "react-helmet-async";


// const ContactPage = () => {
//     return (
//         <>

//             <Helmet>
//                 <title>Contact SSI Bannu | Get in Touch for IT Services & Courses</title>

//                 <meta
//                     name="description"
//                     content="Contact SSI Bannu for web development, software solutions and IT courses in Bannu. We are here to help you grow your career."
//                 />

//                 <meta
//                     name="keywords"
//                     content="contact SSI Bannu, software house contact Bannu, IT academy contact, web development Bannu"
//                 />

//                 <link rel="canonical" href="https://www.ssibannu.com/contact" />

//                 <meta property="og:title" content="Contact SSI Bannu" />
//                 <meta
//                     property="og:description"
//                     content="Get in touch with SSI Bannu for IT services and training in Bannu."
//                 />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:url" content="https://www.ssibannu.com/contact" />

//                 <meta
//                     property="og:image"
//                     content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
//                 />
//             </Helmet>

//             <section className="min-h-screen bg-bg-dark pt-36 pb-20 px-6 lg:px-8">

//                 <div className="max-w-330 mx-auto">

//                     {/* ── HEADING ── */}
//                     <div className="text-center mb-16">
//                         <h1 className="text-text-dark font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4">
//                             Let's work together
//                         </h1>
//                         <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
//                             Let’s build something impactful together.
//                         </p>
//                     </div>

//                     {/* ── IMAGE + MAP ── */}
//                     <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">

//                         {/* Image */}
//                         <div className="flex justify-center md:justify-start">
//                             <img
//                                 src="https://res.cloudinary.com/dzo12ba3f/image/upload/v1778054308/ssi-frontend-media/file_l3rctm.jpg"
//                                 alt="Contact"
//                                 className="w-72 md:w-96 rounded-2xl object-cover"
//                             />
//                         </div>

//                         {/* Map */}
//                         <div className="rounded-2xl overflow-hidden border border-border-dark h-[300px] md:h-[350px]">
//                             <iframe
//                                 title="Bannu Map"
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107096.64159926581!2d70.48658987237324!3d32.98346808626968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d807d15d5dcb9f%3A0x594a45bd114db9!2sSYED%20SFOFTWARE%20HOUSE%20bANNU!5e0!3m2!1sen!2s!4v1777877680061!5m2!1sen!2s"
//                                 className="w-full h-full grayscale invert contrast-75"
//                                 loading="lazy"
//                             />
//                         </div>
//                     </div>

//                     {/* ── FORM + INFO ── */}
//                     <div className="grid md:grid-cols-2 gap-12">

//                         {/* FORM */}
//                         <ContactForm />

//                         {/* CONTACT INFO */}
//                         <div className="space-y-6">

//                             <div className="flex gap-4">
//                                 <Phone className="text-text-muted" />
//                                 <div>
//                                     <h3 className="text-text-dark font-semibold">Call</h3>
//                                     <p className="text-text-muted text-sm">+92319162469</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <Mail className="text-text-muted" />
//                                 <div>
//                                     <h3 className="text-text-dark font-semibold">Email</h3>
//                                     <p className="text-text-muted text-sm">info@ssi.com</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <MapPin className="text-text-muted" />
//                                 <div>
//                                     <h3 className="text-text-dark font-semibold">Location</h3>
//                                     <p className="text-text-muted text-sm">Bannu, KPK, Pakistan</p>
//                                 </div>
//                             </div>

//                             {/* Social */}
//                             <div className="pt-4">
//                                 <p className="text-text-label text-xs uppercase tracking-widest mb-3">
//                                     Follow Us
//                                 </p>
//                                 <div className="flex gap-4">
//                                     {socialLinks.map((link, i) => (
//                                         <a key={i} href={link.href}
//                                             className={link.hoverClass} >
//                                             <link.Icon className={` w-5 h-5`} />
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ContactPage;


import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { socialLinks } from "../constants/socialLinks.js";
import ContactForm from "../components/UI/Form.jsx";
import SEO from '../services/SEO'; // ✅ SEO Component Import
import img from "../../public/images/Projects/Principle.jfif"

const ContactPage = () => {
    // 🔹 Schema for Contact Page
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact SSI Bannu",
        "description": "Get in touch with SSI Bannu for IT courses, software development, and freelancing training in Bannu.",
        "url": "https://www.ssibannu.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "SSI Bannu",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bannu",
                "addressRegion": "KPK",
                "addressCountry": "Pakistan"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92319162469",
                "contactType": "Admissions",
                "availableLanguage": ["English", "Urdu"]
            }
        }
    };

    return (
        <>
            {/* ✅ SEO Component - Complete SEO for Contact Page */}
            <SEO
                // Primary Meta Tags
                title="Contact SSI Bannu - Get in Touch for IT Courses & Software Services in Bannu"
                description="Contact SSI Bannu for web development, software solutions, IT courses, and freelancing training in Bannu. Call us or visit our office to start your IT career."
                keywords="contact SSI Bannu, software house contact Bannu, IT academy contact, web development Bannu, IT courses Bannu, freelancing training Bannu, call SSI Bannu, Bannu software house, learn IT in Bannu"

                // URL & Images
                url="https://www.ssibannu.com/contact"
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
                isBreadcrumb={true}        // ✅ Breadcrumb Schema
                breadcrumbItems={[
                    { name: "Home", url: "https://www.ssibannu.com/" },
                    { name: "Contact", url: "https://www.ssibannu.com/contact" }
                ]}
            >
                {/* ✅ Custom Schema for Contact Page */}
                <script type="application/ld+json">
                    {JSON.stringify(contactSchema)}
                </script>
            </SEO>

            <section className="min-h-screen bg-bg-dark pt-36 pb-20 px-6 lg:px-8">
                <div className="max-w-330 mx-auto">

                    {/* ── HEADING ── */}
                    <div className="text-center mb-16">
                        <h1 className="text-text-dark font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4">
                            Let's work together
                        </h1>
                        <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
                            Let's build something impactful together.
                        </p>
                    </div>

                    {/* ── IMAGE + MAP ── */}
                    <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">

                        {/* Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img}
                                alt="SSI Bannu office contact - IT institute in Bannu"
                                className="w-72 md:w-96 rounded-2xl object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden border border-border-dark h-[300px] md:h-[350px]">
                            <iframe
                                title="SSI Bannu location map - Bannu KPK"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107096.64159926581!2d70.48658987237324!3d32.98346808626968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d807d15d5dcb9f%3A0x594a45bd114db9!2sSYED%20SFOFTWARE%20HOUSE%20bANNU!5e0!3m2!1sen!2s!4v1777877680061!5m2!1sen!2s"
                                className="w-full h-full grayscale invert contrast-75"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* ── FORM + INFO ── */}
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* FORM */}
                        <ContactForm />

                        {/* CONTACT INFO */}
                        <div className="space-y-6">

                            <div className="flex gap-4">
                                <Phone className="text-text-muted" />
                                <div>
                                    <h3 className="text-text-dark font-semibold">Call Us</h3>
                                    <p className="text-text-muted text-sm">
                                        <a href="tel:+92319162469" className="hover:text-primary transition">
                                            +92 319 162469
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Mail className="text-text-muted" />
                                <div>
                                    <h3 className="text-text-dark font-semibold">Email Us</h3>
                                    <p className="text-text-muted text-sm">
                                        <a href="mailto:info@ssi.com" className="hover:text-primary transition">
                                            info@ths.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="text-text-muted" />
                                <div>
                                    <h3 className="text-text-dark font-semibold">Visit Us</h3>
                                    <p className="text-text-muted text-sm">
                                        Bannu, KPK, Pakistan
                                    </p>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="pt-4">
                                <p className="text-text-label text-xs uppercase tracking-widest mb-3">
                                    Follow Us
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link, i) => (
                                        <a 
                                            key={i} 
                                            href={link.href}
                                            className={link.hoverClass}
                                            aria-label={`Follow SSI Bannu on ${link.name || 'social media'}`}
                                        >
                                            <link.Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;