// import React, { useEffect, useState } from 'react'
// import { projects, ProjectsFullData } from "../../../constants/Projectsdata.js"
// import ScrollReveal from '../../../hooks/ScrollReveal.jsx';
// import { Link } from 'react-router-dom';
// import { ArrowBtn } from '../../UI/ArrowBtn.jsx';
// import api from '../../../services/api.js';

// const ProjectDetails = () => {

//   let [projects, setProjects] = useState([])

//   useEffect(() => {
//     async function getProjects() {
//       const { data } = await api.get('/projects');
//       setProjects(data.data);
//     }
//     getProjects()
//   }, [])


//   return (
//     <div className="relative z-10 -mt-20 pt-10 pb-20 backdrop-blur-xs bg-white/90 rounded-t-3xl">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {projects.map((item, index) => (
//           <Link
//             key={index}
//             to={`/projectDetails/${item._id}`}
//             className="w-full"
//           >

//             {/* Image */}
//             <ScrollReveal className="rounded-3xl overflow-hidden bg-gray-100">
//               <img
//                 src={item?.thumbnail?.url}
//                 alt={item?.name}
//                 className="w-full h-auto object-cover transition duration-500 hover:scale-105"
//               />
//             </ScrollReveal>

//             {/* Text */}
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold text-black">
//                 {item?.name}
//               </h2>
//               <p className="text-gray-500 text-sm mt-1">
//                 {item?.description}
//               </p>
//             </div>

//           </Link >
//         ))}

//       </div>

//       <div className="w-full flex items-center justify-center pb-4 md:pb-5 mt-20  ">
//         <ArrowBtn
//           label="CONTACT US"
//           iconBg="bg-white"
//           iconColor="text-black"
//           textColor="text-white"
//           padding="px-4 py-4"
//           hoverIconBg="group-hover:bg-white"
//           hoverTextColor="group-hover:text-white"
//           hoverBtnBg="hover:bg-black"
//           hoverIconColor="group-hover:text-black"
//           btnBg='bg-black'
//         />
//       </div>

//     </div>
//   )
// }

// export default ProjectDetails;



import React, { useEffect, useState } from 'react';
import ScrollReveal from '../../../hooks/ScrollReveal.jsx';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../UI/ArrowBtn.jsx';
import api from '../../../services/api.js';

const ProjectSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-3xl overflow-hidden bg-gray-200 h-72 w-full" />

      <div className="mt-4 space-y-3">
        <div className="h-6 w-2/3 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-4/5 rounded bg-gray-200" />
      </div>
    </div>
  );
};

const EmptyProjectsCard = () => {
  return (
    <div className="col-span-full">
      <div className="rounded-3xl border border-gray-200 bg-white p-10 md:p-14 text-center shadow-sm">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-black flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
          </svg>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 capitalize">
        currently we are  updating our projects
        </h3>

        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We're currently preparing and uploading our latest projects.
          Please check back soon to explore our work and study our hardworking.
        </p>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);

        const { data } = await api.get('/projects');

        setProjects(data?.data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    getProjects();
  }, []);

  return (
    <div className="relative z-10 -mt-20 pt-10 pb-20 backdrop-blur-xs bg-white/90 rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {loading ? (
          [...Array(4)].map((_, index) => (
            <ProjectSkeleton key={index} />
          ))
        ) : projects.length > 0 ? (
          projects.map((item) => (
            <Link
              key={item._id}
              to={`/projectDetails/${item._id}`}
              className="w-full"
            >
              <ScrollReveal className="rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={item?.thumbnail?.url}
                  alt={item?.name}
                  className="w-full h-auto object-cover transition duration-500 hover:scale-105"
                />
              </ScrollReveal>

              <div className="mt-4">
                <h2 className="text-xl font-semibold text-black">
                  {item?.name}
                </h2>

                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {item?.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <EmptyProjectsCard />
        )}

      </div>

      <div className="w-full flex items-center justify-center pb-4 md:pb-5 mt-20">
        <ArrowBtn
          label="CONTACT US"
          iconBg="bg-white"
          iconColor="text-black"
          textColor="text-white"
          padding="px-4 py-4"
          hoverIconBg="group-hover:bg-white"
          hoverTextColor="group-hover:text-white"
          hoverBtnBg="hover:bg-black"
          hoverIconColor="group-hover:text-black"
          btnBg="bg-black"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;