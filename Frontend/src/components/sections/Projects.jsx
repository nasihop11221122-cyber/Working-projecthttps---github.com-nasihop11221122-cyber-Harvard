import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowBtn } from "../UI/ArrowBtn";
import { SecHeading } from "../UI/Secheading";
import useInView from "../../hooks/useInView";
import ScrollReveal from "../../hooks/ScrollReveal";
import { UseInViewWrapper } from "../UI/UseInViewWrapper";
import Marquee from "../UI/Marquee";
import {ProjectsFullData } from "../../constants/Projectsdata";
import { IkArrowButton } from "../UI/IkArrowButton";




// For the marquee, we only need the logo URLs
// const logos = ClientLogos.map(client => client.logo);

const logos = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  // ✅ Newly Added
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  {
    name: "Cloudinary",
    logo: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/PNG/cloudinary_logo_blue_0720_2x.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  // 🗄️ Database & Backend
  {
    name: "Mongoose",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // ⚙️ Dev Tools & Build
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "npm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Webpack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  },

  // ☁️ Cloud & Deployment
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },


  // 🔌 Real-time & Auth
  {
    name: "Socket.io",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "JWT",
    logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
  },

  // ⚪ Light versions using Simple Icons CDN
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/ffffff", // ✅ white
  },
  {
    name: "Vercel",
    logo: "https://cdn.simpleicons.org/vercel/ffffff", // ✅ white
  },
  {
    name: "Express",
    logo: "https://cdn.simpleicons.org/express/ffffff", // ✅ white (was also black)
  },
  {
    name: "Socket.io",
    logo: "https://cdn.simpleicons.org/socketdotio/ffffff", // ✅ white
  },
];

// ✅ convert to simple array (IMPORTANT)
const logoUrls = logos.map(item => item.logo);


// ─── Projects Data ────────────
import { ProjectsData } from "../../constants/HomeData";



const OFFSET_CLASS = {
  up: "lg:-translate-y-10", // card 2 row 1 — shifts 40px up on desktop
  down: "lg:translate-y-10",  // card 2 row 3 — shifts 40px down on desktop
}





// ─── ProjectCard ──────────────────────────────────────────────────────────────
// Single project card with hover overlay + scroll fade-in.
const ProjectCard = ({ project, animDelay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const navigate = useNavigate()


  return (

    <div className={`transition-transform duration-300 ${project.offset ? OFFSET_CLASS[project.offset] : ""}`}>
      <Link
        to={`/projectDetails/${project.id}`}
        className="block relative overflow-hidden rounded-lg group aspect-4/3"
      >
        {/* ── Project image ──
            grayscale by default → full color on hover.
            Also scales slightly on hover.
        */}
        <img
          src={project.thumbnailImage}
          alt={project.name}
          className="
            w-full h-full object-cover
            grayscale group-hover:grayscale-0 group-hover:rounded-3xl
            transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
          "
          loading="lazy"
        />


        {/* ── "View CaseStudy" button ──
            Slides up + fades in on hover.
        */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            translate-y-2 group-hover:translate-y-0
            transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        >
          <ArrowBtn
            label="View CaseStudy"
            onClick={() => { }}
            btnBg="bg-bg-card"
            iconBg="bg-bg-card"
            border="border-border-light"
            iconColor="text-text-primary"
            padding="px-2.5 py-2.5"
            textColor="text-text-primary"
            hoverBtnBg="hover:bg-bg-card"
            hoverIconBg="group-hover:bg-bg-main"
            hoverIconColor="group-hover:text-text-dark"
            hoverTextColor="group-hover:text-text-primary"
          />

        </div>
      </Link>
    </div>
  );
};


// ─── ProjectsSection ─────────────────────────────────────────────────────────
const ProjectsSection = () => (
  <section className="bg-bg-card py-20 lg:py-28">
    <div className="max-w-[1320px] mx-auto px-6 lg:px-10">


      <div className="mx-auto grid justify-center items-center">
        <h3 className="text-text-primary font-semibold text-center text-2xl my-6">{ProjectsData.topHead}</h3>

        <div className="mb-20 overflow-hidden bg-blend-overlay">
          <div className="flex items-center justify-center mt-auto overflow-hidden relative">
            <div className=" overflow-x-hidden opacity-70 hover:opacity-100 transition duration-300">

              <Marquee
                items={logoUrls.map((url) => ({
                  icon: <img src={url} alt="logo" className="size-14" />,
                  label: "",
                }))}
                speed={30}
              />



            </div>
          </div>

        </div>
      </div>


      <div className="flex flex-col items-center gap-4 text-center mb-10">
        {/* SectionBtn — light variant (light bg section) */}
        <UseInViewWrapper delay={700}>
          <Link to="/projects">
            <ArrowBtn
              label="Our Projects"
              iconBg="bg-secondary"
              iconColor="text-text-dark"
              textColor="text-text-primary"
              padding="px-2 py-2"
              hoverTextColor="text-text-primary"
              hoverIconColor="group-hover:text-text-dark"

            />
          </Link>
        </UseInViewWrapper>

        {/* ── Section heading ── */}
        <UseInViewWrapper delay={900}>
          <div className="mb-4">
            <SecHeading
              title={ProjectsData.heading}
              text="text-text-primary"
            />
          </div>


          {/* Subtitle — right side on desktop */}
          <p className="text-text-muted md:max-w-xl font-medium text-xl leading-relaxed">
            {ProjectsData.description}
          </p>
        </UseInViewWrapper>
      </div>

      {/*
        ── Projects grid ───────────────────────────────────────────────────
        1 col mobile → 2 col tablet → 3 col desktop
        gap-5
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectsFullData.slice(0, 6).map((project, idx) => (
          <ScrollReveal key={idx}>
            <ProjectCard
              key={project.id}
              project={project}
              // Stagger across all 9 cards: 80ms each
              // Capped at 3 per row so only the visible first row staggers
              animDelay={(idx % 3) * 70}
            />
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
);

export default ProjectsSection;
