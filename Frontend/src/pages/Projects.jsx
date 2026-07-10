// // import React from 'react'
// // import ProjectStart from '../components/sections/ProjectsSection/ProjectStart.jsx'
// // import ProjectDetails from '../components/sections/ProjectsSection/ProjectDetails.jsx'

// // const Projects = () => {
// //   return (

// //     <main className='bg-secondary px-3 p-[152px_0px_120px]'>

// //         <ProjectStart />
// //         <ProjectDetails />
      
// //     </main>
// //   )
// // }

// // export default Projects


// import React from "react";
// import { Helmet } from "react-helmet-async";

// import ProjectStart from "../components/sections/ProjectsSection/ProjectStart.jsx";
// import ProjectDetails from "../components/sections/ProjectsSection/ProjectDetails.jsx";

// const Projects = () => {
//   return (
//     <>
//       {/* ───────────── SEO ───────────── */}
//       <Helmet>
//         <title>Our Projects | SSI Bannu Software House</title>

//         <meta
//           name="description"
//           content="Explore projects completed by SSI Bannu. We build modern websites, software solutions and digital products for businesses in Bannu and beyond."
//         />

//         <meta
//           name="keywords"
//           content="SSI Bannu projects, software house projects Bannu, web development projects, IT company portfolio"
//         />

//         <link
//           rel="canonical"
//           href="https://www.ssibannu.com/projects"
//         />

//         <meta property="og:title" content="Our Projects | SSI Bannu" />
//         <meta
//           property="og:description"
//           content="View real projects built by SSI Bannu software house."
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://www.ssibannu.com/projects"
//         />
//         <meta
//           property="og:image"
//           content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
//         />
//       </Helmet>

//       {/* ───────────── PAGE CONTENT ───────────── */}
//       <main className="bg-secondary px-3 p-[152px_0px_120px]">
//         <ProjectStart />
//         <ProjectDetails />
//       </main>
//     </>
//   );
// };

// export default Projects;


import React from "react";
import SEO from '../services/SEO';
import { Link } from "react-router-dom";

import ProjectStart from "../components/sections/ProjectsSection/ProjectStart.jsx";
import ProjectDetails from "../components/sections/ProjectsSection/ProjectDetails.jsx";

const Projects = () => {
    return (
        <>
            {/* ✅ SEO Component - Improved for better SEO */}
            <SEO
                // ✅ REMOVED "Coming Soon" - Better title
                title="SSI Bannu Projects - Software House & Web Development Portfolio in Bannu"
                
                // ✅ Better description - More detailed
                description="Explore SSI Bannu's software development projects in Bannu. We build modern websites, custom applications, and digital solutions for businesses. View our portfolio."
                
                // ✅ More comprehensive keywords
                keywords="SSI Bannu projects, software house Bannu, web development projects Bannu, IT company portfolio Bannu, custom software Bannu, web design Bannu, digital solutions Bannu, software development Bannu"
                
                url="https://www.ssibannu.com/projects"
                image="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
                imageWidth="1200"
                imageHeight="630"
                siteName="SSI Bannu"
                locale="en_US"
                author="SSI Bannu"
                city="Bannu"
                region="PK-KP"
                twitterCard="summary_large_image"
                isLocalBusiness={true}
                isBreadcrumb={true}
                breadcrumbItems={[
                    { name: "Home", url: "https://www.ssibannu.com/" },
                    { name: "Projects", url: "https://www.ssibannu.com/projects" }
                ]}
            />

            <main className="bg-secondary px-3 p-[152px_0px_120px]">                  

                    <ProjectStart />
                    
                    <ProjectDetails />
        
            </main>
        </>
    );
};

export default Projects;