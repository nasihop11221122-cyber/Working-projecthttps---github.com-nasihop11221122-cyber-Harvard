import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { FaReact, FaCss } from "react-icons/fa6";
import { BsFiletypeHtml } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import AnimatedNumber from '../UI/AnimatedNumber';
import ScrollReveal from '../../hooks/ScrollReveal';
import { ArrowBtn } from '../UI/ArrowBtn';
// import { IkArrowButton } from '../UI/IkArrowButton';

// importing about data...
import { AboutData } from '../../constants/HomeData';
import { ClientLogos } from '../../constants/Clients.js'
import InfiniteScroller from '../common/InfiniteScroller.jsx';
import { useNavigate } from 'react-router-dom';
import Marquee from '../UI/Marquee.jsx';
import {
  GraduationCap,
  BookOpen,
  Library,
  School,
  Users,
  Brain,
  Award,
  BadgeCheck,
  Laptop,
  Globe,
  NotebookPen,
  ClipboardList,
  Calculator,
  Lightbulb,
  Microscope,
  Target,
  BookMarked,
  MonitorSmartphone,
  University,
  FileText,
} from "lucide-react";


//header scrollable text lines...
const LINES = [`${AboutData.heading}`, `${AboutData.highlight}`];


//Marquee logos
// const logos = ClientLogos.map((logo, i) => (
//   <img key={i} src={`/images/clients/${logo}`} alt={`Client ${i + 1}`} className="h-8 sm:h-12 object-contain" />
// ));
const logos = [
  {
    name: "Computer Science",
    logo: GraduationCap,
  },
  {
    name: "Online Courses",
    logo: Laptop,
  },
  {
    name: "Digital Library",
    logo: Library,
  },
  {
    name: "Software Engineering",
    logo: BookOpen,
  },
  {
    name: "Artificial Intelligence",
    logo: Brain,
  },
  {
    name: "Students",
    logo: Users,
  },
  {
    name: "Certifications",
    logo: Award,
  },
  {
    name: "Verified Learning",
    logo: BadgeCheck,
  },
  {
    name: "Assignments",
    logo: ClipboardList,
  },
  {
    name: "Study Notes",
    logo: NotebookPen,
  },
  {
    name: "Mathematics",
    logo: Calculator,
  },
  {
    name: "Science",
    logo: Microscope,
  },
  {
    name: "Innovation",
    logo: Lightbulb,
  },
  {
    name: "Global Education",
    logo: Globe,
  },
  {
    name: "University",
    logo: University,
  },
  {
    name: "E-Learning",
    logo: MonitorSmartphone,
  },
  {
    name: "Study Materials",
    logo: BookMarked,
  },
  {
    name: "Exams",
    logo: FileText,
  },
  {
    name: "Career Goals",
    logo: Target,
  },
  {
    name: "Academy",
    logo: School,
  },
];

// ✅ convert to simple array (IMPORTANT)
const logoUrls = logos.map(item => item.logo);


const About = () => {
  const sectionRef = useRef(null);
  const [letters, setLetters] = useState([]);
  const letterEls = useRef([]);
  const animatedRef = useRef(false);

  const navigate = useNavigate()

  // Refs for GSAP animations
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const statsCardRef = useRef(null);

  useEffect(() => {
    const chars = [];
    LINES.forEach((line, li) => {
      if (li > 0) chars.push({ char: '\n' });
      for (const ch of line) chars.push({ char: ch });
    });
    setLetters(chars);
  }, []);

  // Scroll triggered section animations
  useEffect(() => {
    const targets = [buttonRef, headingRef, descRef, statsCardRef];

    targets.forEach(ref => {
      if (ref.current) gsap.set(ref.current, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const tl = gsap.timeline();
          gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 })
          gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.15 })
          gsap.to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.15 })
          gsap.to(statsCardRef.current, { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out', delay: 0.15 });

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const paintLetters = useCallback((count) => {
    letterEls.current.forEach((el, i) => {
      if (el) {
        el.style.color = i < count ? '#111111' : '#BBBBBB';
      }
    });
  }, []);

  useEffect(() => {
    if (letters.length === 0) return;

    const textLetters = letters.filter(l => l.char !== '\n' && l.char !== ' ');
    const total = textLetters.length;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.max(0, Math.min(1,
        (winH - rect.top) / (sectionRef.current.offsetHeight + winH * 0.4)
      ));
      paintLetters(Math.floor(progress * total));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial animation if already visible
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight * 0.9) {
      let i = 0;
      const tick = () => {
        if (i <= total) {
          paintLetters(i);
          i += 3;
          setTimeout(tick, 20);
        }
      };
      tick();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [letters, paintLetters]);

  let letterIdx = 0;

  return (
    <div className='flex items-center justify-center mt-10 lg:mt-26 pb-10'>
      <section
        ref={sectionRef}
        className="bg-bg-light w-[97%] min-h-screen px-2 md:px-10 pt-10 md:pt-15 pb-10 relative rounded-4xl"
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start md:flex-col md:items-center md:justify-center lg:flex-row lg:items-start mb-6 md:mb-9">
          <div ref={buttonRef} className="w-full sm:w-55 shrink-0 pt-1 mb-4 sm:mb-0 flex sm:block md:flex md:justify-center md:w-auto lg:w-55 lg:block justify-center">
            <ArrowBtn
              label="About Us"
              iconBg="bg-black"
              iconColor="text-white"
              textColor="text-black"
              padding="px-2 py-2"
              hoverBtnBg="hover:bg-white"
              hoverIconBg="group-hover:bg-black"
              hoverTextColor="group-hover:text-black"
              onClick={() => navigate("/about")}
            />
          </div>

          <h1 ref={headingRef} className="w-full text-center flex-1 text-6.5 sm:text-[34px] md:text-[40px] tracking-tighter sm:text-left md:text-center lg:text-left sm:px-6 md:px-0 lg:px-34 py-2 md:py-10 leading-tight">
            {letters.map((item, i) => {
              if (item.char === '\n') return <br key={i} />;
              if (item.char === ' ') {
                return <span key={i} className="inline-block w-[0.27em]">&nbsp;</span>;
              }
              const idx = letterIdx++;
              return (
                <span
                  key={i}
                  ref={el => { letterEls.current[idx] = el; }}
                  className="inline transition-colors duration-100 text-zinc-900"
                  style={{ color: '#BBBBBB' }}
                >
                  {item.char}
                </span>
              );
            })}
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start md:items-center">
          {/* Image Section */}
          <div className="w-full lg:w-auto lg:shrink-0 md:flex md:justify-center">
            <ScrollReveal className="w-full md:w-105 h-85 sm:h-105 md:h-140 rounded-3xl overflow-hidden bg-[#1e1e2e]">
              <img
                src={AboutData.image}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </ScrollReveal>
          </div>


          {/* Stats Section */}
          <div className="w-full grid justify-center items-center lg:justify-start gap-2 pt-2 md:px-2 md:py-4 font-thin mr-6">

            <div className='mx-auto lg:mx-0'>
              <p ref={descRef} className="text-[14px] sm:text-[15px] md:text-[20px] text-text-muted flex flex-col tracking-tighter leading-relaxed pb-12">
                <span className='md:ml-30'>
                  <strong className="text-text-dark font-thin">{AboutData.description.strong}</strong>{' '}
                  <span>{AboutData.description.span1}</span>
                </span>
                <span>{AboutData.description.span2}</span>
                <span>{AboutData.description.span3}</span>
              </p>
            </div>


            <div ref={statsCardRef} className='grid lg:grid-cols-2 gap-2 bg-bg-white max-w-full'>

              {/* Left Column */}
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="bg-white rounded-2xl px-4 py-2 flex justify-between h-22">
                  <span className="text-4xl font-medium text-gray-800 flex items-center gap-0.5">
                    <AnimatedNumber number={27} />
                    <span className=''>+</span>
                  </span>
                  <span className="text-text-muted text-sm font-mono">01</span>
                </div>

                <div className="bg-white rounded-2xl p-8 flex flex-col justify-between h-80 w-full">
                  <div className="text-right">
                    <h3 className="text-xl font-medium text-gray-800 leading-tight">Success project <br /> completed</h3>
                  </div>
                  <p className="text-gray-500 text-sm max-w-50">
                    {AboutData.stats.note}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="bg-white rounded-2xl px-4 py-2 flex justify-between h-22">
                  <p className="text-4xl font-medium text-gray-800 flex items-center gap-0.5">
                    <AnimatedNumber number={95} />
                    <span>%</span>
                  </p>
                  <span className="text-gray-400 text-sm font-mono">02</span>
                </div>

                <div className=" cards bg-white rounded-2xl p-8 flex flex-col justify-between h-80 w-full">
                  <div className="text-right">
                    <h3 className="text-xl font-medium text-gray-800 leading-tight">perents <br /> satisfaction rate</h3>
                  </div>

                  <div className="hidden md:flex items-center mt-auto overflow-hidden relative">
                    <div className="w-full opacity-70 hover:opacity-100 transition duration-300">

                      <Marquee
                        items={logos.map((item) => {
                          const Icon = item.logo;

                          return {
                            icon: <Icon className="size-8 text-blue-600" />,
                            label: "",
                          };
                        })}
                        speed={30}
                      />

                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;