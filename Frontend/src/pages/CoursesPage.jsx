// // import { useEffect, useState } from "react";
// // import { ArrowRight, Clock, BarChart2, Users } from "lucide-react";
// // import { Link } from "react-router-dom";

// // import { ArrowBtn } from "../components/UI/ArrowBtn";
// // import { SecHeading } from "../components/UI/Secheading";
// // import CTASection from "../components/sections/Cta";
// // import useInView from "../hooks/useInView";
// // import { coursesAllData } from "../constants/courses";
// // import api from "../services/api";
// // import { Helmet } from "react-helmet-async";

// // // ─────────────────────────────────────────────────────────────────────────────
// // // STATIC DATA
// // //
// // // we will Swap COURSES_DATA with API response.
// // // Each course object shape is documented below.
// // // ─────────────────────────────────────────────────────────────────────────────

// // // All available filter categories — "All" always first.
// // const CATEGORIES = [
// //   "All",
// //   "Design",
// //   "Development",
// //   "3D Modeling",
// //   "Marketing",
// //   "CIT",
// //   "Video Editing",
// // ];


// // // Page-level hero stats
// // const STATS = [
// //   { value: "10+", label: "Courses Available" },
// //   { value: "849+", label: "Students Enrolled" },
// //   { value: "100%", label: "Hands-on Training" },
// // ];

// // // Level badge color — subtle variation per level
// // const LEVEL_COLORS = {
// //   Beginner: "border-border-dark text-text-muted",
// //   Intermediate: "border-border-dark text-text-muted",
// //   Advanced: "border-border-dark text-text-muted",
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // StatItem
// // //
// // // Single stat: large number + small label.
// // // Used in the hero stats row.
// // // ─────────────────────────────────────────────────────────────────────────────
// // const StatItem = ({ value, label }) => (
// //   <div className="flex flex-col gap-1">
// //     <span className="text-text-dark font-bold text-3xl md:text-4xl tracking-tight">
// //       {value}
// //     </span>
// //     <span className="text-text-muted text-sm">{label}</span>
// //   </div>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // CoursesHero
// // //
// // // Dark hero — SectionBtn + Heading + subtitle + stats row.
// // // Padding-top accounts for fixed navbar.
// // // ─────────────────────────────────────────────────────────────────────────────
// // const CoursesHero = () => (
// //   <section className="bg-bg-dark pt-36 pb-16 lg:pt-44 lg:pb-20">
// //     <div className="max-w-330 mx-auto px-6 lg:px-10">

// //       {/* Section label */}
// //       <div className="flex justify-center mb-8">
// //         <ArrowBtn
// //           label="Our Courses"
// //           iconBg="bg-black"
// //           iconColor="text-white"
// //           textColor="text-black"
// //           padding="px-2 py-2"
// //           hoverBtnBg="hover:bg-white"
// //           hoverIconBg="group-hover:bg-black"
// //           hoverTextColor="group-hover:text-black"
// //         />
// //       </div>

// //       {/* Heading + subtitle — centered */}
// //       <div className="flex flex-col items-center text-center gap-5 mb-14">
// //         <SecHeading
// //           title="Learn Skills That"
// //           subtitle="Build Real Careers"
// //           text="font-semibold"
// //           subText="font-semibold"
// //         />

// //         <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl">
// //           Hands-on, instructor-led courses designed for the real world.
// //           From design to development — everything you need, right from Bannu.
// //         </p>

// //       </div>

// //       {/*
// //         Stats row
// //         Mobile  : 3 stats in a row, centered, dividers between
// //         Desktop : same, wider spacing
// //       */}
// //       <div className="flex items-center justify-center gap-0 divide-x divide-border-dark">
// //         {STATS.map((stat) => (
// //           <div key={stat.label} className="px-8 md:px-14 first:pl-0 last:pr-0 text-center">
// //             <StatItem value={stat.value} label={stat.label} />
// //           </div>
// //         ))}
// //       </div>

// //     </div>
// //   </section>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // FilterBar
// // // Horizontal scrollable row of category pills.
// // // Active pill: white bg + dark text (filled).
// // // Inactive pill: transparent + border + muted text (ghost).
// // //
// // // Props:
// // //   categories     — string[]
// // //   activeCategory — string (controlled by parent)
// // //   onSelect       — (category: string) => void
// // // ─────────────────────────────────────────────────────────────────────────────
// // const FilterBar = ({ categories, activeCategory, onSelect }) => (
// //   <div className="bg-bg-main grid place-items-center py-6">
// //     <div className="mx-auto px-6 lg:px-10 overflow-hidden">


// //       <div className="max-w-225 mx-auto flex flex-wrap justify-center gap-2 py-4">
// //         {categories.map((cat) => {
// //           const isActive = cat === activeCategory;
// //           return (
// //             <button
// //               key={cat}
// //               onClick={() => onSelect(cat)}
// //               className={`
// //                 relative shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium
// //                 transition-all duration-300 ease-out cursor-pointer
// //                 border backdrop-blur-md
// //                 ${isActive
// //                   ? "bg-black text-white scale-102"
// //                   : "bg-transparent text-text-muted border-gray-400 hover:text-text-dark"
// //                 }
// //               `}
// //             >
// //               {cat}
// //             </button>
// //           );
// //         })}
// //       </div>

// //     </div>
// //   </div>
// // );

// // const FeaturedCourse = ({ course }) => {
// //   const [ref, isInView] = useInView({ threshold: 0.1 });

// //   return (
// //     <div
// //       ref={ref}
// //       style={{
// //         opacity: isInView ? 1 : 0,
// //         transform: isInView ? "translateY(0)" : "translateY(32px)",
// //         transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)",
// //         fontFamily: "'DM Sans', sans-serif",
// //       }}
// //       className="flex flex-col border border-border-dark shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group"
// //     >
// //       <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] lg:min-h-[420px]">

// //         {/* ── Left: content ── */}
// //         <div className="flex flex-col justify-between gap-8 p-8 md:p-10 lg:p-12 border-b border-border-dark lg:border-b-0 lg:border-r">

// //           <div className="flex flex-col gap-5">

// //             {/* Featured + category */}
// //             <div className="flex items-center gap-3">
// //               <span
// //                 className="px-3 py-1 rounded-full bg-secondary text-text-dark"
// //                 style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
// //               >
// //                 Featured
// //               </span>
// //               <span
// //                 className="px-3 py-1 rounded-full border border-border-dark text-text-muted"
// //                 style={{ fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
// //               >
// //                 {course.category}
// //               </span>
// //             </div>

// //             {/* Title */}
// //             <h2
// //               style={{
// //                 fontFamily: "'DM Serif Display', serif",
// //                 fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
// //                 fontWeight: 400,
// //                 lineHeight: 1.15,
// //                 letterSpacing: "-0.02em",
// //               }}
// //             >
// //               {course.title}
// //             </h2>

// //             {/* Description */}
// //             <p
// //               className="text-text-muted max-w-lg"
// //               style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.75, letterSpacing: "0.008em" }}
// //             >
// //               {course.description}
// //             </p>

// //           </div>

// //           {/* Meta + button */}
// //           <div className="flex flex-col gap-6">

// //             <div className="flex items-center gap-6 flex-wrap">
// //               <span
// //                 className="flex items-center gap-2 text-text-muted"
// //                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
// //               >
// //                 <Clock size={13} className="text-text-label" />
// //                 {course.duration}
// //               </span>
// //               <span
// //                 className="flex items-center gap-2 text-text-muted"
// //                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
// //               >
// //                 <BarChart2 size={13} className="text-text-label" />
// //                 {course.level}
// //               </span>
// //               <span
// //                 className="flex items-center gap-2 text-text-muted"
// //                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
// //               >
// //                 <Users size={13} className="text-text-label" />
// //                 {course.students} Students
// //               </span>
// //             </div>

// //             <Link
// //               to={`/courses/${course.slug}`}
// //               className="inline-flex items-center gap-3 w-fit px-5 py-3 rounded-full bg-secondary text-text-dark transition-all duration-300 hover:bg-accent group/btn"
// //               style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.03em" }}
// //             >
// //               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary transition-transform duration-300 group-hover/btn:rotate-45">
// //                 <ArrowRight size={12} className="text-secondary" />
// //               </span>
// //               Enroll Now
// //             </Link>

// //           </div>
// //         </div>


// //         <div className="relative h-64 lg:h-full lg:self-stretch overflow-hidden">
// //           <img
// //             src={course.thumbnail}
// //             alt={course.title}
// //             className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
// //           // loading="eager"
// //           />
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };


// // const CourseCard = ({ course, animDelay }) => {
// //   const [ref, isInView] = useInView({ threshold: 0.1 });





// //   return (

// //     // <Link to={`/courses/${course._id}`}>
    
// //     <Link to={`/courses/${course.slug}`}>
    
// //     <div
// //         ref={ref}
// //         style={{
// //           opacity: isInView ? 1 : 0,
// //           transform: isInView ? "translateY(0)" : "translateY(36px)",
// //           transition: `opacity 0.6s ease ${animDelay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
// //           fontFamily: "'DM Sans', sans-serif",
// //         }}
// //         className="flex flex-col border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group"
// //       >



// //         {/* ── Image area ── */}
// //         <div className="relative overflow-hidden aspect-16/10 shrink-0">

// //           <img
// //             src={course.thumbnail?.url}
// //             alt={course.title}
// //             className="
// //             w-full h-full object-cover
            
// //             transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
// //             group-hover:scale-105
// //           "
// //             loading="lazy"
// //           />

// //           <div className="
// //           absolute inset-0 bg-primary
// //           opacity-0 group-hover:opacity-50
// //           transition-opacity duration-400
// //         " />


// //         </div>

// //         {/* ── Card body ── */}
// //         <div className="flex flex-col gap-3 p-5 flex-1">

// //           {/* Course title — DM Serif Display for authority + warmth */}
// //           <h3
// //             style={{
// //               fontFamily: "'DM Serif Display', serif",
// //               fontSize: "1.2rem",
// //               fontWeight: 400,           // serif displays read best at 400
// //               lineHeight: 1.28,
// //               letterSpacing: "-0.01em",
// //               color: "inherit",
// //             }}
// //           >
// //             {course.title}
// //           </h3>

// //           {/* Description */}
// //           <p
// //             className="text-text-muted flex-1"
// //             style={{
// //               fontFamily: "'DM Sans', sans-serif",
// //               fontSize: "13.5px",
// //               fontWeight: 300,
// //               lineHeight: 1.72,
// //               letterSpacing: "0.008em",
// //               display: "-webkit-box",
// //               WebkitLineClamp: 2,
// //               WebkitBoxOrient: "vertical",
// //               overflow: "hidden",
// //             }}
// //           >
// //             {course.description}
// //           </p>

// //           {/* Divider */}
// //           {/* <div className="h-px bg-gray-200" /> */}

// //           {/* Meta row */}
// //           {/* <div className="flex items-center justify-between">
// //             <span
// //               className="flex items-center gap-1.5 text-text-muted"
// //               style={{
// //                 fontFamily: "'DM Sans', sans-serif",
// //                 fontSize: "12px",
// //                 fontWeight: 400,
// //                 letterSpacing: "0.02em",
// //               }}
// //             >
// //               <Clock size={12} className="text-text-label" />
// //               {course.duration}
// //             </span>
// //             <span
// //               className="flex items-center gap-1.5 text-text-muted"
// //               style={{
// //                 fontFamily: "'DM Sans', sans-serif",
// //                 fontSize: "12px",
// //                 fontWeight: 400,
// //                 letterSpacing: "0.02em",
// //               }}
// //             >
// //               <Users size={12} className="text-text-label" />
// //               {course.students} Students
// //             </span>
// //           </div> */}

// //         </div>
// //       </div>
// //     </Link>
// //   );
// // };
// // // ─────────────────────────────────────────────────────────────────────────────
// // // EmptyState
// // //
// // // Shown when no courses match the active filter.
// // // ─────────────────────────────────────────────────────────────────────────────
// // const EmptyState = ({ category }) => (
// //   <div className="flex flex-col items-center justify-center py-24 text-center">
// //     <p className="text-text-primary font-semibold text-xl mb-2">
// //       No courses in "{category}" yet.
// //     </p>
// //     <p className="text-text-muted text-sm">
// //       New courses are being added regularly. Check back soon.
// //     </p>
// //   </div>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // CoursesPage  (default export)
// // //
// // // State:
// // //   activeCategory — controlled by FilterBar, filters COURSES_DATA
// // //
// // // Logic:
// // //   featuredCourse → only course with featured: true, shown when:
// // //                    filter = "All" OR filter = featuredCourse.category
// // //   gridCourses    → all non-featured courses matching active filter
// // // ─────────────────────────────────────────────────────────────────────────────
// // const CoursesPage = () => {


// //   let [coursesData, setCoursesData] = useState([])
// //   let COURSES_DATA = coursesAllData;
// //   const [activeCategory, setActiveCategory] = useState("All");

// //   // The single featured course (first match — only one should be featured: true)
// //   const featuredCourse = COURSES_DATA.find((c) => c.featured);

// //   // Should the featured card be shown?
// //   const showFeatured =
// //     featuredCourse &&
// //     (activeCategory === "All" || activeCategory === featuredCourse.category);

// //   // Grid courses: non-featured AND matching active filter
// //   const gridCourses = COURSES_DATA.filter((c) => {
// //     // if (c.featured) return false; // featured always shown separately
// //     if (activeCategory === "All") return true;
// //     return c.category === activeCategory;
// //   });

// //   // If the featured course is filtered out and its category is selected,
// //   // include it in the grid so the category still shows something
// //   const featuredInGrid =
// //     featuredCourse &&
// //     !showFeatured &&
// //     activeCategory === featuredCourse.category;

// //   const finalGridCourses = featuredInGrid
// //     ? [featuredCourse, ...gridCourses]
// //     : gridCourses;

// //   const hasResults = showFeatured || finalGridCourses.length > 0;






// //   useEffect(() => {
// //     async function getAllCourses() {
// //       try {
// //         const response = await api.get("/getCourses");
// //         console.log("COURSES DATA", response.data.data);
// //         setCoursesData(response.data.data)
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }
// //     getAllCourses();
// //   }, [])

// //   const filteredCourses = coursesData.filter((course) => {
// //     if (activeCategory === "All") return true;

// //     return (
// //       course.category?.toLowerCase() ===
// //       activeCategory.toLowerCase()
// //     );
// //   });

// //   return (

// //     <>

// //       <Helmet>
// //         <title>IT Courses in Bannu | SSI Bannu Academy</title>

// //         <meta
// //           name="description"
// //           content="Join SSI Bannu Academy and learn professional IT courses including web development, design, marketing and more in Bannu."
// //         />

// //         <meta
// //           name="keywords"
// //           content="IT courses Bannu, web development course Bannu, software training Bannu"
// //         />

// //         <link rel="canonical" href="https://www.ssibannu.com/courses" />

// //         <meta property="og:title" content="IT Courses in Bannu" />
// //         <meta
// //           property="og:description"
// //           content="Learn professional IT skills at SSI Bannu Academy."
// //         />
// //         <meta property="og:type" content="website" />
// //         <meta
// //           property="og:url"
// //           content="https://www.ssibannu.com/courses"
// //         />
// //         <meta
// //           property="og:image"
// //           content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
// //         />
// //       </Helmet>

// //       <main>



// //         {/* 1. Hero */}
// //         <CoursesHero />

// //         {/* 2. Filter bar */}
// //         <FilterBar
// //           categories={CATEGORIES}
// //           activeCategory={activeCategory}
// //           onSelect={setActiveCategory}
// //         />

// //         {/* 3 + 4. Featured + Grid */}
// //         <section className="bg-bg-dark py-14 lg:py-20">
// //           <div className="max-w-330 mx-auto px-6 lg:px-10">

// //             {/* No results */}
// //             {!hasResults && <EmptyState category={activeCategory} />}

// //             {/* Featured course card */}
// //             {/* {showFeatured && (
// //             <div className="mb-8">
// //               <FeaturedCourse course={featuredCourse} />
// //             </div>
// //           )} */}

// //             {/* Courses grid */}
// //             {/* {coursesData?.length > 0 && (
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// //               {coursesData?.map((course, idx) => (
// //                 <CourseCard
// //                   key={course._id}
// //                   course={course}
// //                   // Stagger per column position — resets each row
// //                   animDelay={(idx % 3) * 80}
// //                 />
// //               ))}
// //             </div>
// //           )} */}


// //             {filteredCourses?.length > 0 ? (
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// //                 {filteredCourses.map((course, idx) => (
// //                   <CourseCard
// //                     key={course._id}
// //                     course={course}
// //                     animDelay={(idx % 3) * 80}
// //                   />
// //                 ))}
// //               </div>
// //             ) : (
// //               <EmptyState category={activeCategory} />
// //             )}

// //           </div>
// //         </section>

// //         {/* 5. CTA */}
// //         <CTASection />

// //       </main>

// //     </>
// //   );
// // };

// // export default CoursesPage;


// import { useEffect, useState } from "react";
// import { ArrowRight, Clock, BarChart2, Users } from "lucide-react";
// import { Link } from "react-router-dom";

// import { ArrowBtn } from "../components/UI/ArrowBtn";
// import { SecHeading } from "../components/UI/Secheading";
// import CTASection from "../components/sections/Cta";
// import useInView from "../hooks/useInView";
// import { coursesAllData } from "../constants/courses";
// import api from "../services/api";
// import SEO from '../services/SEO' // ✅ SEO component import kiya

// // ─────────────────────────────────────────────────────────────────────────────
// // STATIC DATA
// // ─────────────────────────────────────────────────────────────────────────────

// // All available filter categories — "All" always first.
// const CATEGORIES = [
//   "All",
//   "Design",
//   "Development",
//   "3D Modeling",
//   "Marketing",
//   "CIT",
//   "Video Editing",
// ];

// // Page-level hero stats
// const STATS = [
//   { value: "10+", label: "Courses Available" },
//   { value: "849+", label: "Students Enrolled" },
//   { value: "100%", label: "Hands-on Training" },
// ];

// // Level badge color
// const LEVEL_COLORS = {
//   Beginner: "border-border-dark text-text-muted",
//   Intermediate: "border-border-dark text-text-muted",
//   Advanced: "border-border-dark text-text-muted",
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // StatItem
// // ─────────────────────────────────────────────────────────────────────────────
// const StatItem = ({ value, label }) => (
//   <div className="flex flex-col gap-1">
//     <span className="text-text-dark font-bold text-3xl md:text-4xl tracking-tight">
//       {value}
//     </span>
//     <span className="text-text-muted text-sm">{label}</span>
//   </div>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // CoursesHero
// // ─────────────────────────────────────────────────────────────────────────────
// const CoursesHero = () => (
//   <section className="bg-bg-dark pt-36 pb-16 lg:pt-44 lg:pb-20">
//     <div className="max-w-330 mx-auto px-6 lg:px-10">

//       {/* Section label */}
//       <div className="flex justify-center mb-8">
//         <ArrowBtn
//           label="Our Courses"
//           iconBg="bg-black"
//           iconColor="text-white"
//           textColor="text-black"
//           padding="px-2 py-2"
//           hoverBtnBg="hover:bg-white"
//           hoverIconBg="group-hover:bg-black"
//           hoverTextColor="group-hover:text-black"
//         />
//       </div>

//       {/* Heading + subtitle — centered */}
//       <div className="flex flex-col items-center text-center gap-5 mb-14">
//         <SecHeading
//           title="Learn Skills That"
//           subtitle="Build Real Careers"
//           text="font-semibold"
//           subText="font-semibold"
//         />

//         <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl">
//           Hands-on, instructor-led courses designed for the real world.
//           From design to development — everything you need, right from Bannu.
//         </p>

//       </div>

//       {/* Stats row */}
//       <div className="flex items-center justify-center gap-0 divide-x divide-border-dark">
//         {STATS.map((stat) => (
//           <div key={stat.label} className="px-8 md:px-14 first:pl-0 last:pr-0 text-center">
//             <StatItem value={stat.value} label={stat.label} />
//           </div>
//         ))}
//       </div>

//     </div>
//   </section>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // FilterBar
// // ─────────────────────────────────────────────────────────────────────────────
// const FilterBar = ({ categories, activeCategory, onSelect }) => (
//   <div className="bg-bg-main grid place-items-center py-6">
//     <div className="mx-auto px-6 lg:px-10 overflow-hidden">
//       <div className="max-w-225 mx-auto flex flex-wrap justify-center gap-2 py-4">
//         {categories.map((cat) => {
//           const isActive = cat === activeCategory;
//           return (
//             <button
//               key={cat}
//               onClick={() => onSelect(cat)}
//               className={`
//                 relative shrink-0 px-5 py-2.5 rounded-xl text-sm font-medium
//                 transition-all duration-300 ease-out cursor-pointer
//                 border backdrop-blur-md
//                 ${isActive
//                   ? "bg-black text-white scale-102"
//                   : "bg-transparent text-text-muted border-gray-400 hover:text-text-dark"
//                 }
//               `}
//             >
//               {cat}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // FeaturedCourse
// // ─────────────────────────────────────────────────────────────────────────────
// const FeaturedCourse = ({ course }) => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: isInView ? 1 : 0,
//         transform: isInView ? "translateY(0)" : "translateY(32px)",
//         transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1)",
//         fontFamily: "'DM Sans', sans-serif",
//       }}
//       className="flex flex-col border border-border-dark shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] lg:min-h-[420px]">

//         {/* Left: content */}
//         <div className="flex flex-col justify-between gap-8 p-8 md:p-10 lg:p-12 border-b border-border-dark lg:border-b-0 lg:border-r">

//           <div className="flex flex-col gap-5">

//             {/* Featured + category */}
//             <div className="flex items-center gap-3">
//               <span
//                 className="px-3 py-1 rounded-full bg-secondary text-text-dark"
//                 style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}
//               >
//                 Featured
//               </span>
//               <span
//                 className="px-3 py-1 rounded-full border border-border-dark text-text-muted"
//                 style={{ fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}
//               >
//                 {course.category}
//               </span>
//             </div>

//             {/* Title */}
//             <h2
//               style={{
//                 fontFamily: "'DM Serif Display', serif",
//                 fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
//                 fontWeight: 400,
//                 lineHeight: 1.15,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               {course.title}
//             </h2>

//             {/* Description */}
//             <p
//               className="text-text-muted max-w-lg"
//               style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.75, letterSpacing: "0.008em" }}
//             >
//               {course.description}
//             </p>

//           </div>

//           {/* Meta + button */}
//           <div className="flex flex-col gap-6">

//             <div className="flex items-center gap-6 flex-wrap">
//               <span
//                 className="flex items-center gap-2 text-text-muted"
//                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
//               >
//                 <Clock size={13} className="text-text-label" />
//                 {course.duration}
//               </span>
//               <span
//                 className="flex items-center gap-2 text-text-muted"
//                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
//               >
//                 <BarChart2 size={13} className="text-text-label" />
//                 {course.level}
//               </span>
//               <span
//                 className="flex items-center gap-2 text-text-muted"
//                 style={{ fontSize: "12.5px", fontWeight: 400, letterSpacing: "0.02em" }}
//               >
//                 <Users size={13} className="text-text-label" />
//                 {course.students} Students
//               </span>
//             </div>

//             <Link
//               to={`/courses/${course.slug}`}
//               className="inline-flex items-center gap-3 w-fit px-5 py-3 rounded-full bg-secondary text-text-dark transition-all duration-300 hover:bg-accent group/btn"
//               style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.03em" }}
//             >
//               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary transition-transform duration-300 group-hover/btn:rotate-45">
//                 <ArrowRight size={12} className="text-secondary" />
//               </span>
//               Enroll Now
//             </Link>

//           </div>
//         </div>

//         {/* Image */}
//         <div className="relative h-64 lg:h-full lg:self-stretch overflow-hidden">
//           <img
//             src={course.thumbnail}
//             alt={course.title}
//             className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // CourseCard
// // ─────────────────────────────────────────────────────────────────────────────
// const CourseCard = ({ course, animDelay }) => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   return (
//     <Link to={`/courses/${course.slug}`}>
//       <div
//         ref={ref}
//         style={{
//           opacity: isInView ? 1 : 0,
//           transform: isInView ? "translateY(0)" : "translateY(36px)",
//           transition: `opacity 0.6s ease ${animDelay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
//           fontFamily: "'DM Sans', sans-serif",
//         }}
//         className="flex flex-col border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group"
//       >

//         {/* Image area */}
//         <div className="relative overflow-hidden aspect-16/10 shrink-0">
//           <img
//             src={course.thumbnail?.url}
//             alt={course.title}
//             className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-400" />
//         </div>

//         {/* Card body */}
//         <div className="flex flex-col gap-3 p-5 flex-1">
//           <h3
//             style={{
//               fontFamily: "'DM Serif Display', serif",
//               fontSize: "1.2rem",
//               fontWeight: 400,
//               lineHeight: 1.28,
//               letterSpacing: "-0.01em",
//               color: "inherit",
//             }}
//           >
//             {course.title}
//           </h3>

//           <p
//             className="text-text-muted flex-1"
//             style={{
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: "13.5px",
//               fontWeight: 300,
//               lineHeight: 1.72,
//               letterSpacing: "0.008em",
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//             }}
//           >
//             {course.description}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // EmptyState
// // ─────────────────────────────────────────────────────────────────────────────
// const EmptyState = ({ category }) => (
//   <div className="flex flex-col items-center justify-center py-24 text-center">
//     <p className="text-text-primary font-semibold text-xl mb-2">
//       No courses in "{category}" yet.
//     </p>
//     <p className="text-text-muted text-sm">
//       New courses are being added regularly. Check back soon.
//     </p>
//   </div>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // CoursesPage (default export)
// // ─────────────────────────────────────────────────────────────────────────────
// const CoursesPage = () => {

//   const [coursesData, setCoursesData] = useState([]);
//   const COURSES_DATA = coursesAllData;
//   const [activeCategory, setActiveCategory] = useState("All");

//   // The single featured course
//   const featuredCourse = COURSES_DATA.find((c) => c.featured);

//   // Should the featured card be shown?
//   const showFeatured =
//     featuredCourse &&
//     (activeCategory === "All" || activeCategory === featuredCourse.category);

//   // Grid courses
//   const gridCourses = COURSES_DATA.filter((c) => {
//     if (activeCategory === "All") return true;
//     return c.category === activeCategory;
//   });

//   const featuredInGrid =
//     featuredCourse &&
//     !showFeatured &&
//     activeCategory === featuredCourse.category;

//   const finalGridCourses = featuredInGrid
//     ? [featuredCourse, ...gridCourses]
//     : gridCourses;

//   const hasResults = showFeatured || finalGridCourses.length > 0;

//   useEffect(() => {
//     async function getAllCourses() {
//       try {
//         const response = await api.get("/getCourses");
//         console.log("COURSES DATA", response.data.data);
//         setCoursesData(response.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getAllCourses();
//   }, []);

//   const filteredCourses = coursesData.filter((course) => {
//     if (activeCategory === "All") return true;
//     return (
//       course.category?.toLowerCase() ===
//       activeCategory.toLowerCase()
//     );
//   });

//   // ✅ Courses data for schema
//   const coursesSchemaData = filteredCourses.map((course) => ({
//     name: course.title,
//     description: course.description,
//     slug: course.slug,
//     url: course.url || `https://www.ssibannu.com/courses/${course.slug}`
//   }));

//   return (
//     <>
//       {/* ✅ SEO Component - Complete SEO for Courses Page */}
//       <SEO
//         // Primary Meta Tags
//         title="IT Courses in Bannu | Web Development, Design & More - SSI Bannu"
//         description="Explore professional IT courses at SSI Bannu Academy. Learn web development, UI/UX design, cyber security, mobile apps, and freelancing skills in Bannu. Enroll now!"
//         keywords="IT courses Bannu, web development course Bannu, software training Bannu, cyber security course Bannu, UI/UX design course Bannu, mobile app development Bannu, freelancing course Bannu, best IT institute Bannu, computer courses Bannu, learn coding Bannu, IT training Bannu"

//         // URL & Images
//         url="https://www.ssibannu.com/courses"
//         image="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
//         imageWidth="1200"
//         imageHeight="630"

//         // Site Info
//         siteName="SSI Bannu"
//         locale="en_US"
//         author="SSI Bannu"

//         // Location - Bannu Specific
//         city="Bannu"
//         region="PK-KP"

//         // Social Media
//         twitterCard="summary_large_image"

//         // Schema Options
//         isLocalBusiness={true}
//         isCourseList={true}
//         courses={coursesSchemaData}
//         isBreadcrumb={true}
//         breadcrumbItems={[
//           { name: "Home", url: "https://www.ssibannu.com/" },
//           { name: "Courses", url: "https://www.ssibannu.com/courses" }
//         ]}
//       />

//       <main>
//         {/* 1. Hero */}
//         <CoursesHero />

//         {/* 2. Filter bar */}
//         <FilterBar
//           categories={CATEGORIES}
//           activeCategory={activeCategory}
//           onSelect={setActiveCategory}
//         />

//         {/* 3. Courses Grid */}
//         <section className="bg-bg-dark py-14 lg:py-20">
//           <div className="max-w-330 mx-auto px-6 lg:px-10">

//             {/* No results */}
//             {!hasResults && <EmptyState category={activeCategory} />}

//             {/* Courses grid */}
//             {filteredCourses?.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {filteredCourses.map((course, idx) => (
//                   <CourseCard
//                     key={course._id}
//                     course={course}
//                     animDelay={(idx % 3) * 80}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <EmptyState category={activeCategory} />
//             )}

//           </div>
//         </section>

//         {/* 4. CTA */}
//         <CTASection />

//       </main>
//     </>
//   );
// };

// export default CoursesPage;


import { useEffect, useState } from "react";
import { ArrowRight, Clock, BarChart2, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { ArrowBtn } from "../components/UI/ArrowBtn";
import { SecHeading } from "../components/UI/Secheading";
import CTASection from "../components/sections/Cta";
import useInView from "../hooks/useInView";
import api from "../services/api";
import SEO from '../services/SEO'

// ─────────────────────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "10+", label: "Courses Available" },
  { value: "849+", label: "Students Enrolled" },
  { value: "100%", label: "Hands-on Training" },
];

// ─────────────────────────────────────────────────────────────────────────────
// StatItem
// ─────────────────────────────────────────────────────────────────────────────
const StatItem = ({ value, label }) => (
  <div className="flex flex-col gap-1">
    <span className="text-text-dark font-bold text-3xl md:text-4xl tracking-tight">
      {value}
    </span>
    <span className="text-text-muted text-sm">{label}</span>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// CoursesHero
// ─────────────────────────────────────────────────────────────────────────────
const CoursesHero = () => (
  <section className="bg-bg-dark pt-36 pb-16 lg:pt-44 lg:pb-20">
    <div className="max-w-330 mx-auto px-6 lg:px-10">

      {/* Section label */}
      <div className="flex justify-center mb-8">
        <ArrowBtn
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

      {/* Heading + subtitle */}
      <div className="flex flex-col items-center text-center gap-5 mb-14">
        <SecHeading
          title="Learn Skills That"
          subtitle="Build Real Careers"
          text="font-semibold"
          subText="font-semibold"
        />

        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl">
          Hands-on, instructor-led courses designed for the real world.
          From design to development — everything you need, right from Bannu.
        </p>

      </div>

      {/* Stats row */}
      <div className="flex items-center justify-center gap-0 divide-x divide-border-dark">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-8 md:px-14 first:pl-0 last:pr-0 text-center">
            <StatItem value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>

    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// CourseCard
// ─────────────────────────────────────────────────────────────────────────────
const CourseCard = ({ course, animDelay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Link to={`/courses/${course.slug}`}>
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(36px)",
          transition: `opacity 0.6s ease ${animDelay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
          fontFamily: "'DM Sans', sans-serif",
        }}
        className="flex flex-col border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden group"
      >
        {/* Image area */}
        <div className="relative overflow-hidden aspect-16/10 shrink-0">
          <img
            src={course.thumbnail?.url}
            alt={course.title}
            className="w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-400" />
        </div>

        {/* Card body */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              lineHeight: 1.28,
              letterSpacing: "-0.01em",
              color: "inherit",
            }}
          >
            {course.title}
          </h3>

          <p
            className="text-text-muted flex-1"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13.5px",
              fontWeight: 300,
              lineHeight: 1.72,
              letterSpacing: "0.008em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {course.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// EmptyState
// ─────────────────────────────────────────────────────────────────────────────
const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <p className="text-text-primary font-semibold text-xl mb-2">
      No courses available yet.
    </p>
    <p className="text-text-muted text-sm">
      New courses are being added regularly. Check back soon.
    </p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// CoursesPage (default export)
// ─────────────────────────────────────────────────────────────────────────────
const CoursesPage = () => {

  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all courses - NO FILTER
  useEffect(() => {
    async function getAllCourses() {
      try {
        setLoading(true);
        const response = await api.get("/getCourses");
        console.log("COURSES DATA", response.data.data);
        setCoursesData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getAllCourses();
  }, []);

  // ✅ Courses data for schema
  const coursesSchemaData = coursesData.map((course) => ({
    name: course.title,
    description: course.description,
    slug: course.slug,
    url: `https://www.ssibannu.com/courses/${course.slug}`
  }));

  return (
    <>
      {/* ✅ SEO Component */}
      <SEO
        title="IT Courses in Bannu | Web Development, Design & More - SSI Bannu"
        description="Explore professional IT courses at SSI Bannu Academy. Learn web development, UI/UX design, cyber security, mobile apps, and freelancing skills in Bannu. Enroll now!"
        keywords="IT courses Bannu, web development course Bannu, software training Bannu, cyber security course Bannu, UI/UX design course Bannu, mobile app development Bannu, freelancing course Bannu, best IT institute Bannu, computer courses Bannu, learn coding Bannu, IT training Bannu"
        url="https://www.ssibannu.com/courses"
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
        isCourseList={true}
        courses={coursesSchemaData}
        isBreadcrumb={true}
        breadcrumbItems={[
          { name: "Home", url: "https://www.ssibannu.com/" },
          { name: "Courses", url: "https://www.ssibannu.com/courses" }
        ]}
      />

      <main>
        {/* 1. Hero */}
        <CoursesHero />

        {/* 2. Courses Grid - NO FILTER BAR */}
        <section className="bg-bg-dark py-14 lg:py-20">
          <div className="max-w-330 mx-auto px-6 lg:px-10">

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="w-10 h-10 rounded-full border-2 border-border-light border-t-text-dark animate-spin" />
              </div>
            )}

            {/* Courses grid - ALL courses shown together */}
            {!loading && coursesData?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {coursesData.map((course, idx) => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    animDelay={(idx % 3) * 80}
                  />
                ))}
              </div>
            ) : (
              !loading && <EmptyState />
            )}

          </div>
        </section>

        {/* 3. CTA */}
        <CTASection />

      </main>
    </>
  );
};

export default CoursesPage;