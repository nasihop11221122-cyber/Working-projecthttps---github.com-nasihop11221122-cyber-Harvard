// import React from 'react'
// import OurTeam from '../components/sections/OurTeam'
// import About from '../components/sections/About'
// import FAQ from '../components/sections/FAQ'
// import Cta from '../components/sections/Cta'
// import Services from '../components/sections/Services'
// import Projects from '../components/sections/Projects'
// import HeroSection from '../components/sections/Hero'
// // import { Helmet } from "react-helmet-async";
// import SEO from '../services/SEO.jsx'


// const Home = () => {


//     return (
//         <>

//             <Helmet>
//                 <title>SSI Bannu | Best Software House in Bannu</title>
//                 <meta name="description" content="SSI Bannu provides web development, software solutions and IT courses in Bannu." />
//                 <meta name="keywords" content="software house in Bannu, web development Bannu, IT courses Bannu" />

//                 <link rel="canonical" href="https://www.ssibannu.com/" />

//                 <meta property="og:url" content="https://www.ssibannu.com/" />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:title" content="SSI Bannu" />
//                 <meta property="og:description" content="Best IT and Software Academy in Bannu" />
//                 <meta property="og:image" content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png" />
//                 <meta property="og:image:width" content="1200" />
//                 <meta property="og:image:height" content="630" />
//             </Helmet>

//             <main className='min-h-auto w-full'>

//                 <HeroSection />

//                 <About />

//                 <Projects />

//                 <Services />

//                 <OurTeam />

//                 <FAQ />

//                 <Cta />
//             </main>

//         </>
//     )
// }

// export default Home


import React from 'react'
import OurTeam from '../components/sections/OurTeam'
import About from '../components/sections/About'
import FAQ from '../components/sections/FAQ'
import Cta from '../components/sections/Cta'


import HeroSection from '../components/sections/Hero'
import SEO from '../services/SEO.jsx'

// Courses data for schema
const coursesData = [
    {
        name: "Web Engineering",
        description: "Full-stack web development course in Bannu",
        slug: "web-engineering"
    },
    {
        name: "UI/UX Craft",
        description: "User interface and experience design training",
        slug: "ui-ux-craft"
    },
    {
        name: "Motion Editing",
        description: "Video editing and motion graphics course",
        slug: "motion-editing"
    },
    {
        name: "Cyber Security",
        description: "Cybersecurity training and certification",
        slug: "cyber-security"
    },
    {
        name: "Growth Marketing",
        description: "Digital marketing and growth strategies",
        slug: "growth-marketing"
    },
    {
        name: "React Development",
        description: "Modern React.js development course",
        slug: "react-development"
    },
    {
        name: "C++ Systems",
        description: "C++ programming and systems development",
        slug: "cpp-systems"
    },
    {
        name: "Mobile Apps",
        description: "Mobile app development training",
        slug: "mobile-apps"
    },
    {
        name: "Visual Design",
        description: "Professional graphic design and visual communication",
        slug: "visual-design"
    },
    {
        name: "3D Experience",
        description: "3D modeling and animation course",
        slug: "3d-experience"
    }
];

const Home = () => {
    return (
        <>
            {/* ✅ SEO Component - All SEO in one place */}
            <SEO
                title="Best Software House in Bannu | SSI Bannu | IT Courses, Web Development & Digital Services"

                description="SSI Bannu is the best software house in Bannu offering web development, mobile app development, graphic design, UI UX design, SEO, digital marketing, software development, freelancing training, cyber security, and professional IT courses. Join SSI Bannu to build your IT career."

                keywords={[
                    "SSI Bannu",
                    "software house in Bannu",
                    "best software house in Bannu",
                    "software company in Bannu",
                    "web development Bannu",
                    "website development Bannu",
                    "web design Bannu",
                    "mobile app development Bannu",
                    "android app development Bannu",
                    "graphic design Bannu",
                    "UI UX design Bannu",
                    "digital marketing Bannu",
                    "SEO services Bannu",
                    "software development Bannu",
                    "IT company Bannu",
                    "IT institute Bannu",
                    "best IT institute in Bannu",
                    "computer courses Bannu",
                    "best computer courses Bannu",
                    "IT courses Bannu",
                    "web development course Bannu",
                    "React course Bannu",
                    "MERN Stack course Bannu",
                    "cyber security course Bannu",
                    "freelancing course Bannu",
                    "Python course Bannu",
                    "C++ course Bannu",
                    "graphic designing course Bannu",
                    "UI UX course Bannu",
                    "video editing course Bannu",
                    "3D animation course Bannu",
                    "best computer institute in Bannu",
                    "coding classes Bannu",
                    "learn programming Bannu",
                    "software training Bannu",
                    "internship Bannu",
                    "IT training center Bannu",
                    "computer courses for beginners Bannu",
                    "professional IT training Bannu",
                    "career in IT Bannu",
                ]}

                url="https://www.ssibannu.com/"
                image="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"

                siteName="SSI Bannu"

                author="SSI Bannu"

                city="Bannu"
                region="PK-KP"

                isLocalBusiness={true}
                isCourseList={true}
                courses={coursesData}

                isBreadcrumb={true}
                breadcrumbItems={[
                    {
                        name: "Home",
                        url: "https://www.ssibannu.com/"
                    }
                ]}
            />

            <main className='min-h-auto w-full'>
                <HeroSection />
                <About />
                
                
                <OurTeam />
                <FAQ />
                <Cta />
            </main>
        </>
    )
}

export default Home