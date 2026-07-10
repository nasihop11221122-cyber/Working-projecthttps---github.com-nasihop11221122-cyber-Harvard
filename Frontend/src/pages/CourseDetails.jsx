// import { useEffect, useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   Clock,
//   BarChart2,
//   Users,
//   Plus,
//   Minus,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// import { SecHeading } from "../components/UI/Secheading";
// import CTASection from "../components/sections/Cta";
// import useInView from "../hooks/useInView";
// import { EnrollmentModal } from "../components/common/EnrollmentModel";
// import HeroCarousel from "../components/common/Carousel";
// import api from "../services/api";
// import { ArrowBtn } from "../components/UI/ArrowBtn";
// import { Helmet } from "react-helmet-async";

// const getSafeImageUrl = (image) => {
//   if (typeof image === "string") return image;
//   return image?.url || "";
// };

// // const getCourseById = async (id, signal) => {
// //   const response = await api.get(`/getCourse/${id}`, { signal });
// //   return response?.data?.data || null;
// // };

// const getCourseBySlug = async (slug, signal) => {
//   const response = await api.get(`/getCourse/${slug}`, { signal });
//   return response?.data?.data || null;
// };

// const CourseHero = ({ course, onEnroll }) => {
//   const title = course?.title || "Untitled Course";
//   const titleWords = title.split(" ").filter(Boolean);

//   return (
//     <section className="bg-bg-dark pt-36 pb-16 lg:pt-44 lg:pb-20">
//       <div className="max-w-330 mx-auto px-6 lg:px-10">
//         <Link
//           to="/courses"
//           className="inline-flex items-center p-2 gap-2 mb-10 text-text-muted text-sm rounded-lg transition-colors duration-200 group group-hover:translate-x-1"
//         >
//           <ArrowLeft
//             size={16}
//             className="transition-transform duration-200 text-text-muted group-hover:-translate-x-1 group-hover:text-text-dark"
//           />
//           All Courses
//         </Link>

//         <div className="flex flex-col items-center text-center gap-6">
//           {course?.category && (
//             <span className="px-4 py-1.5 rounded-full border border-border-dark text-text-muted text-xs font-medium tracking-widest uppercase">
//               {course.category}
//             </span>
//           )}

//           <SecHeading
//             title={
//               titleWords.length > 3
//                 ? [
//                   titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(" "),
//                   titleWords.slice(Math.ceil(titleWords.length / 2)).join(" "),
//                 ]
//                 : [title]
//             }
//           />

//           {course?.subtitle && (
//             <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl font-light">
//               {course.subtitle}
//             </p>
//           )}

//           {course?.description && (
//             <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl opacity-75">
//               {course.description}
//             </p>
//           )}

//           <div className="flex items-center gap-4 flex-wrap justify-center mt-2">
//             {[
//               { Icon: BarChart2, value: course?.level },
//               { Icon: Clock, value: course?.duration },
//               {
//                 Icon: Users,
//                 value:
//                   typeof course?.students === "number"
//                     ? `${course.students} Students`
//                     : undefined,
//               },
//             ]
//               .filter((item) => item.value)
//               .map(({ Icon, value }) => (
//                 <span
//                   key={value}
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-dark text-text-muted text-sm"
//                 >
//                   <Icon size={13} className="text-text-label" />
//                   {value}
//                 </span>
//               ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const FloatingEnrollButton = ({ onEnroll }) => (
//   <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
//     <button
//       onClick={onEnroll}
//       className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-secondary px-4 py-3 sm:px-5 text-sm font-semibold tracking-wide text-text-dark shadow-[0_18px_45px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary/60"
//     >
//       <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-text-dark transition-transform duration-300 group-hover:rotate-45">
//         <ArrowRight size={13} className="text-secondary" />
//       </span>
//       <span className="relative hidden sm:inline">Enroll Now</span>
//       <span className="relative sm:hidden">Enroll</span>
//     </button>
//   </div>
// );

// const CarouselSection = ({ course }) => {
//   const carouselData = useMemo(() => {
//     const images = Array.isArray(course?.images) ? course.images : [];

//     const slides = images
//       .map(getSafeImageUrl)
//       .filter(Boolean)
//       .map((url) => ({
//         image: url,
//         title: course?.category || undefined,
//         subtitle: course?.title || undefined,
//       }));

//     const thumbnailUrl = getSafeImageUrl(course?.thumbnail);

//     if (thumbnailUrl) {
//       slides.unshift({
//         image: thumbnailUrl,
//         title: course?.category || undefined,
//         subtitle: course?.title || undefined,
//       });
//     }

//     return slides;
//   }, [course]);

//   if (carouselData.length === 0) return null;

//   return (
//     <section className="bg-bg-light py-12 lg:py-16">
//       <div className="max-w-330 mx-auto px-6 lg:px-10">
//         <HeroCarousel data={carouselData} />
//       </div>
//     </section>
//   );
// };

// const OutcomeItem = ({ outcome, animDelay }) => {
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: isInView ? 1 : 0,
//         transform: isInView ? "translateY(0)" : "translateY(20px)",
//         transition: `opacity 0.5s ease ${animDelay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
//       }}
//       className="flex gap-3 py-5 border-b border-border-light last:border-b-0"
//     >
//       <CheckCircle size={18} className="text-text-dark shrink-0 mt-0.5" />
//       <div className="flex flex-col gap-1">
//         <p className="text-text-dark font-semibold text-base">
//           {outcome?.title || "Learning outcome"}
//         </p>
//         {outcome?.caption && (
//           <p className="text-text-muted text-sm leading-relaxed">{outcome.caption}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const AboutSection = ({ course }) => {
//   const [headingRef, headingInView] = useInView({ threshold: 0.15 });
//   const whatYouLearn = Array.isArray(course?.whatYouLearn) ? course.whatYouLearn : [];

//   if (!course?.about && whatYouLearn.length === 0) return null;

//   return (
//     <section className="bg-bg-light py-16 lg:py-24">
//       <div className="max-w-330 mx-auto px-6 lg:px-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//           <div className="lg:sticky lg:top-28 lg:self-start">
//             <h2
//               ref={headingRef}
//               style={{
//                 opacity: headingInView ? 1 : 0,
//                 transform: headingInView ? "translateY(0)" : "translateY(24px)",
//                 transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
//               }}
//               className="text-text-dark font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8"
//             >
//               About This Course
//             </h2>

//             {course?.about && (
//               <p className="text-text-muted text-base leading-relaxed">{course.about}</p>
//             )}
//           </div>

//           {whatYouLearn.length > 0 && (
//             <div>
//               <p className="text-text-label text-xs font-semibold uppercase tracking-widest mb-2">
//                 What You'll Learn
//               </p>
//               <div className="border-t border-border-light">
//                 {whatYouLearn.map((item, idx) => (
//                   <OutcomeItem
//                     key={item?._id || item?.title || idx}
//                     outcome={item}
//                     animDelay={idx * 80}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ModuleRow = ({ module, index, isOpen, onToggle }) => {
//   const tags = Array.isArray(module?.tags) ? module.tags : [];

//   return (
//     <div className="border-b border-border-light">
//       <button
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
//       >
//         <div className="flex items-center gap-5 min-w-0">
//           <span className="text-sm font-medium shrink-0 text-text-label">
//             ({String(index + 1).padStart(2, "0")})
//           </span>
//           <span className="text-base md:text-lg font-semibold truncate text-text-dark transition-colors duration-200">
//             {module?.title || "Untitled Module"}
//           </span>
//         </div>
//         <span className="shrink-0 text-text-dark transition-transform duration-200">
//           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
//         </span>
//       </button>

//       <div
//         className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
//         style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
//       >
//         {tags.length > 0 && (
//           <ul className="pb-5 flex flex-col gap-2.5">
//             {tags.map((tag, idx) => (
//               <li key={`${tag}-${idx}`} className="flex items-start gap-3 text-sm text-text-muted">
//                 <span className="w-1 h-1 rounded-full bg-text-label shrink-0 mt-2" />
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// const CurriculumSection = ({ curriculum = [] }) => {
//   const [openIdx, setOpenIdx] = useState(null);
//   const [ref, isInView] = useInView({ threshold: 0.1 });

//   if (!Array.isArray(curriculum) || curriculum.length === 0) return null;

//   return (
//     <section className="bg-bg-light pb-16 lg:pb-20">
//       <div className="max-w-330 mx-auto px-6 lg:px-10">
//         <div
//           ref={ref}
//           style={{
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
//           }}
//           className="mb-10"
//         >
//           <h3 className="text-text-dark font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
//             Course Curriculum
//           </h3>
//           <p className="text-text-muted text-sm mt-3">
//             {curriculum.length} modules · structured from beginner to professional
//           </p>
//         </div>

//         <div className="border-t border-border-light">
//           {curriculum.map((module, idx) => (
//             <ModuleRow
//               key={module?._id || idx}
//               module={module}
//               index={idx}
//               isOpen={openIdx === idx}
//               onToggle={() => setOpenIdx((prev) => (prev === idx ? null : idx))}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const EnrollSection = ({ course }) => {
//   const [ref, isInView] = useInView({ threshold: 0.15 });

//   if (!course?.whyEnroll) return null;

//   return (
//     <section className="bg-bg-light pb-20 lg:pb-28">
//       <div className="max-w-330 mx-auto px-6 lg:px-10">
//         <div
//           ref={ref}
//           style={{
//             opacity: isInView ? 1 : 0,
//             transform: isInView ? "translateY(0)" : "translateY(24px)",
//             transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
//           }}
//           className="max-w-3xl"
//         >
//           <h3 className="text-text-dark font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-7">
//             Why Enroll in This Course?
//           </h3>
//           <p className="text-text-muted text-base leading-relaxed">{course.whyEnroll}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const NotFound = ({ message = "Course not found." }) => (
//   <section className="bg-bg-light min-h-screen flex items-center justify-center">
//     <div className="text-center px-6">
//       <p className="text-text-muted text-lg mb-4">{message}</p>
//       <Link
//         to="/courses"
//         className="text-text-dark font-semibold underline hover:text-text-muted transition-colors"
//       >
//         Back to Courses
//       </Link>
//     </div>
//   </section>
// );

// const LoadingState = () => (
//   <section className="bg-bg-light min-h-screen flex items-center justify-center">
//     <div className="text-center px-6">
//       <div className="w-9 h-9 mx-auto rounded-full border-2 border-border-light border-t-text-dark animate-spin" />
//       <p className="text-text-muted text-sm mt-4">Loading course...</p>
//     </div>
//   </section>
// );

// const CourseDetails = () => {
//   const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // const { id } = useParams();

//   const { slug } = useParams();

//   useEffect(() => {
//     const controller = new AbortController();

//     async function loadCourse() {
//       // if (!id) {
//       //   setError("Course id is missing.");
//       //   return;
//       // }

//       if (!slug) {
//         setError("Course slug is missing.");
//         return;
//       }

//       setLoading(true);
//       setError("");

//       try {
//         // const nextCourse = await getCourseById(id, controller.signal);

//         const nextCourse = await getCourseBySlug(
//           slug,
//           controller.signal
//         );

//         setCourse(nextCourse);
//       } catch (err) {
//         if (err.name !== "CanceledError" && err.name !== "AbortError") {
//           setError(err?.response?.data?.message || err?.message || "Course not found.");
//           setCourse(null);
//         }
//       } finally {
//         if (!controller.signal.aborted) setLoading(false);
//       }
//     }

//     loadCourse();
//     return () => controller.abort();
//   }, [slug]);

//   if (loading) return <LoadingState />;
//   if (!course) return <NotFound message={error || "Course not found."} />;

//   return (

//     <>
//       <Helmet>
//         <title>
//           {course?.title} | SSI Bannu Academy
//         </title>

//         <meta
//           name="description"
//           content={
//             course?.description ||
//             "Professional IT courses at SSI Bannu."
//           }
//         />

//         <link
//           rel="canonical"
//           href={`https://www.ssibannu.com/courses/${course?.slug}`}
//         />

//         <meta
//           property="og:title"
//           content={course?.title}
//         />

//         <meta
//           property="og:description"
//           content={course?.description}
//         />

//         <meta
//           property="og:url"
//           content={`https://www.ssibannu.com/courses/${course?.slug}`}
//         />

//         <meta
//           property="og:type"
//           content="website"
//         />

//         <meta
//           property="og:image"
//           content={course?.thumbnail?.url}
//         />
//       </Helmet>


//       <main>
//         <CourseHero course={course} onEnroll={() => setIsEnrollModalOpen(true)} />
//         <CarouselSection course={course} />
//         <AboutSection course={course} />
//         <CurriculumSection curriculum={course?.curriculum || []} />
//         <EnrollSection course={course} />
//         <CTASection />
//         <FloatingEnrollButton onEnroll={() => setIsEnrollModalOpen(true)} />

//         <EnrollmentModal
//           isOpen={isEnrollModalOpen}
//           onClose={() => setIsEnrollModalOpen(false)}
//           course={course?.title || "Course"}
//         />
//       </main>

//     </>
//   );
// };

// export default CourseDetails;




import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  BarChart2,
  Users,
  Plus,
  Minus,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { SecHeading } from "../components/UI/Secheading";
import CTASection from "../components/sections/Cta";
import useInView from "../hooks/useInView";
import { EnrollmentModal } from "../components/common/EnrollmentModel";
import HeroCarousel from "../components/common/Carousel";
import api from "../services/api";
import { ArrowBtn } from "../components/UI/ArrowBtn";
import SEO from '../services/SEO'; // ✅ SEO Component Import

// ===== HELPER FUNCTIONS =====
const getSafeImageUrl = (image) => {
  if (typeof image === "string") return image;
  return image?.url || "";
};

const getCourseBySlug = async (slug, signal) => {
  const response = await api.get(`/getCourse/${slug}`, { signal });
  return response?.data?.data || null;
};

// ===== COURSE HERO =====
const CourseHero = ({ course, onEnroll }) => {
  const title = course?.title || "Untitled Course";
  const titleWords = title.split(" ").filter(Boolean);

  return (
    <section className="bg-bg-dark pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="max-w-330 mx-auto px-6 lg:px-10">
        <Link
          to="/courses"
          className="inline-flex items-center p-2 gap-2 mb-10 text-text-muted text-sm rounded-lg transition-colors duration-200 group group-hover:translate-x-1"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 text-text-muted group-hover:-translate-x-1 group-hover:text-text-dark"
          />
          All Courses
        </Link>

        <div className="flex flex-col items-center text-center gap-6">
          {course?.category && (
            <span className="px-4 py-1.5 rounded-full border border-border-dark text-text-muted text-xs font-medium tracking-widest uppercase">
              {course.category}
            </span>
          )}

          <SecHeading
            title={
              titleWords.length > 3
                ? [
                  titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(" "),
                  titleWords.slice(Math.ceil(titleWords.length / 2)).join(" "),
                ]
                : [title]
            }
          />

          {course?.subtitle && (
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl font-light">
              {course.subtitle}
            </p>
          )}

          {course?.description && (
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl opacity-75">
              {course.description}
            </p>
          )}

          <div className="flex items-center gap-4 flex-wrap justify-center mt-2">
            {[
              { Icon: BarChart2, value: course?.level },
              { Icon: Clock, value: course?.duration },
              {
                Icon: Users,
                value:
                  typeof course?.students === "number"
                    ? `${course.students} Students`
                    : undefined,
              },
            ]
              .filter((item) => item.value)
              .map(({ Icon, value }) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-dark text-text-muted text-sm"
                >
                  <Icon size={13} className="text-text-label" />
                  {value}
                </span>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// ===== FLOATING ENROLL BUTTON =====
const FloatingEnrollButton = ({ onEnroll }) => (
  <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
    <button
      onClick={onEnroll}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-secondary px-4 py-3 sm:px-5 text-sm font-semibold tracking-wide text-text-dark shadow-[0_18px_45px_rgba(0,0,0,0.22)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary/60"
    >
      <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-text-dark transition-transform duration-300 group-hover:rotate-45">
        <ArrowRight size={13} className="text-secondary" />
      </span>
      <span className="relative hidden sm:inline">Enroll Now</span>
      <span className="relative sm:hidden">Enroll</span>
    </button>
  </div>
);

// ===== CAROUSEL SECTION =====
const CarouselSection = ({ course }) => {
  const carouselData = useMemo(() => {
    const images = Array.isArray(course?.images) ? course.images : [];

    const slides = images
      .map(getSafeImageUrl)
      .filter(Boolean)
      .map((url) => ({
        image: url,
        title: course?.category || undefined,
        subtitle: course?.title || undefined,
      }));

    const thumbnailUrl = getSafeImageUrl(course?.thumbnail);

    if (thumbnailUrl) {
      slides.unshift({
        image: thumbnailUrl,
        title: course?.category || undefined,
        subtitle: course?.title || undefined,
      });
    }

    return slides;
  }, [course]);

  if (carouselData.length === 0) return null;

  return (
    <section className="bg-bg-light py-12 lg:py-16">
      <div className="max-w-330 mx-auto px-6 lg:px-10">
        <HeroCarousel data={carouselData} />
      </div>
    </section>
  );
};

// ===== OUTCOME ITEM =====
const OutcomeItem = ({ outcome, animDelay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${animDelay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${animDelay}ms`,
      }}
      className="flex gap-3 py-5 border-b border-border-light last:border-b-0"
    >
      <CheckCircle size={18} className="text-text-dark shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <p className="text-text-dark font-semibold text-base">
          {outcome?.title || "Learning outcome"}
        </p>
        {outcome?.caption && (
          <p className="text-text-muted text-sm leading-relaxed">{outcome.caption}</p>
        )}
      </div>
    </div>
  );
};

// ===== ABOUT SECTION =====
const AboutSection = ({ course }) => {
  const [headingRef, headingInView] = useInView({ threshold: 0.15 });
  const whatYouLearn = Array.isArray(course?.whatYouLearn) ? course.whatYouLearn : [];

  if (!course?.about && whatYouLearn.length === 0) return null;

  return (
    <section className="bg-bg-light py-16 lg:py-24">
      <div className="max-w-330 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2
              ref={headingRef}
              style={{
                opacity: headingInView ? 1 : 0,
                transform: headingInView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              }}
              className="text-text-dark font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-8"
            >
              About This Course
            </h2>

            {course?.about && (
              <p className="text-text-muted text-base leading-relaxed">{course.about}</p>
            )}
          </div>

          {whatYouLearn.length > 0 && (
            <div>
              <p className="text-text-label text-xs font-semibold uppercase tracking-widest mb-2">
                What You'll Learn
              </p>
              <div className="border-t border-border-light">
                {whatYouLearn.map((item, idx) => (
                  <OutcomeItem
                    key={item?._id || item?.title || idx}
                    outcome={item}
                    animDelay={idx * 80}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ===== MODULE ROW =====
const ModuleRow = ({ module, index, isOpen, onToggle }) => {
  const tags = Array.isArray(module?.tags) ? module.tags : [];

  return (
    <div className="border-b border-border-light">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-5 min-w-0">
          <span className="text-sm font-medium shrink-0 text-text-label">
            ({String(index + 1).padStart(2, "0")})
          </span>
          <span className="text-base md:text-lg font-semibold truncate text-text-dark transition-colors duration-200">
            {module?.title || "Untitled Module"}
          </span>
        </div>
        <span className="shrink-0 text-text-dark transition-transform duration-200">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        {tags.length > 0 && (
          <ul className="pb-5 flex flex-col gap-2.5">
            {tags.map((tag, idx) => (
              <li key={`${tag}-${idx}`} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="w-1 h-1 rounded-full bg-text-label shrink-0 mt-2" />
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// ===== CURRICULUM SECTION =====
const CurriculumSection = ({ curriculum = [] }) => {
  const [openIdx, setOpenIdx] = useState(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  if (!Array.isArray(curriculum) || curriculum.length === 0) return null;

  return (
    <section className="bg-bg-light pb-16 lg:pb-20">
      <div className="max-w-330 mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
          className="mb-10"
        >
          <h3 className="text-text-dark font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
            Course Curriculum
          </h3>
          <p className="text-text-muted text-sm mt-3">
            {curriculum.length} modules · structured from beginner to professional
          </p>
        </div>

        <div className="border-t border-border-light">
          {curriculum.map((module, idx) => (
            <ModuleRow
              key={module?._id || idx}
              module={module}
              index={idx}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx((prev) => (prev === idx ? null : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== ENROLL SECTION =====
const EnrollSection = ({ course }) => {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  if (!course?.whyEnroll) return null;

  return (
    <section className="bg-bg-light pb-20 lg:pb-28">
      <div className="max-w-330 mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
          className="max-w-3xl"
        >
          <h3 className="text-text-dark font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-7">
            Why Enroll in This Course?
          </h3>
          <p className="text-text-muted text-base leading-relaxed">{course.whyEnroll}</p>
        </div>
      </div>
    </section>
  );
};

// ===== NOT FOUND =====
const NotFound = ({ message = "Course not found." }) => (
  <section className="bg-bg-light min-h-screen flex items-center justify-center">
    <div className="text-center px-6">
      <p className="text-text-muted text-lg mb-4">{message}</p>
      <Link
        to="/courses"
        className="text-text-dark font-semibold underline hover:text-text-muted transition-colors"
      >
        Back to Courses
      </Link>
    </div>
  </section>
);

// ===== LOADING STATE =====
const LoadingState = () => (
  <section className="bg-bg-light min-h-screen flex items-center justify-center">
    <div className="text-center px-6">
      <div className="w-9 h-9 mx-auto rounded-full border-2 border-border-light border-t-text-dark animate-spin" />
      <p className="text-text-muted text-sm mt-4">Loading course...</p>
    </div>
  </section>
);

// ===== MAIN COURSE DETAILS COMPONENT =====
const CourseDetails = () => {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { slug } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourse() {
      if (!slug) {
        setError("Course slug is missing.");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const nextCourse = await getCourseBySlug(slug, controller.signal);
        setCourse(nextCourse);
      } catch (err) {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          setError(err?.response?.data?.message || err?.message || "Course not found.");
          setCourse(null);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadCourse();
    return () => controller.abort();
  }, [slug]);

  // ✅ Course Schema Data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course?.title || "Course",
    "description": course?.description || "Professional IT course at SSI Bannu",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "SSI Bannu",
      "url": "https://www.ssibannu.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "In-Person",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bannu",
          "addressCountry": "Pakistan"
        }
      }
    }
  };

  if (loading) return <LoadingState />;
  if (!course) return <NotFound message={error || "Course not found."} />;

  return (
    <>
      {/* ✅ SEO Component - Complete SEO for Course Detail Page */}
      <SEO
        // Primary Meta Tags
        title={`${course.title} Course in Bannu | SSI Bannu Academy`}
        description={course.description || `Learn ${course.title} at SSI Bannu. Professional IT training with practical projects and expert instructors in Bannu.`}
        keywords={`${course.title} course Bannu, ${course.category} course Bannu, learn ${course.title}, IT training Bannu, ${course.category} training Bannu, professional IT courses Bannu, ${course.level} course Bannu`}

        // URL & Images
        url={`https://www.ssibannu.com/courses/${course.slug}`}
        image={course.thumbnail?.url || "https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"}
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
        isLocalBusiness={true}
        isBreadcrumb={true}
        breadcrumbItems={[
          { name: "Home", url: "https://www.ssibannu.com/" },
          { name: "Courses", url: "https://www.ssibannu.com/courses" },
          { name: course.title, url: `https://www.ssibannu.com/courses/${course.slug}` }
        ]}
      >
        {/* ✅ Course Schema - For Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </SEO>

      <main>
        <CourseHero course={course} onEnroll={() => setIsEnrollModalOpen(true)} />
        <CarouselSection course={course} />
        <AboutSection course={course} />
        <CurriculumSection curriculum={course?.curriculum || []} />
        <EnrollSection course={course} />
        <CTASection />
        <FloatingEnrollButton onEnroll={() => setIsEnrollModalOpen(true)} />

        <EnrollmentModal
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          course={course?.title || "Course"}
        />
      </main>
    </>
  );
};

export default CourseDetails;