import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/Projects/Logo.png"
function Navbar2() {
  const navigate = useNavigate();
  const [pagesOpen, setPagesOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const navbarRef = useRef(null);
  const pagesDropdownRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastY) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
      if (
        pagesDropdownOpen &&
        pagesDropdownRef.current &&
        !pagesDropdownRef.current.contains(e.target)
      ) {
        setPagesDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, pagesDropdownOpen]);

  const pagesLinks = [
    
    
    { label: "Team", href: "#team" },
    
    { label: "Verify Certificate", href: "/certificate" },
  ];

  const PagesDropdown = ({ isOpen }) => (
    <div
      aria-hidden={!isOpen}
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.97)",
        pointerEvents: isOpen ? "auto" : "none",
        transformOrigin: "top",
        transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="
      absolute top-[calc(100%+12px)] left-4/4 -translate-x-1/2
      bg-bg-main border border-border-light rounded-2xl
      p-6 w-145 shadow-2xl shadow-black/60
      grid grid-cols-3 gap-6
    "
    >
      {DROPDOWN_GROUPS.map((group) => (
        <div key={group.heading}>
          <ul className="flex flex-col gap-1.5">
            {group.links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `text-lg transition-colors duration-150 block py-0.5 p-3 rounded-lg
                   ${isActive
                      ? "text-text-label"
                      : "text-text-label hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );


  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-lg"
        style={{
          height: "55px",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "max-content",
          justifyContent: "space-between",
          gap: "8px",
          overflow: "visible",
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Avatar */}
        <img
          src={logo}
          alt="Avatar"
          className="rounded-full object-cover border-2 border-white shadow-sm shrink-0"
          style={{
            width: isExpanded ? "48px" : "36px",
            height: isExpanded ? "48px" : "36px",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Status */}
        <div
          className="items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full shrink-0"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            opacity: isExpanded ? 0 : 1,
            pointerEvents: isExpanded ? "none" : "auto",
            maxWidth: isExpanded ? "0px" : "220px",
            overflow: "hidden",
            padding: isExpanded ? "0" : undefined,
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <span className="text-sm text-gray-700 whitespace-nowrap">
            Available for Work
          </span>
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block ml-1 animate-pulse" />
        </div>

        {/* Desktop Links */}
        <div
          className="items-center shrink-0 lg:flex hidden"
          style={{
            gap: "4px",
            opacity: isExpanded ? 1 : 0,
            maxWidth: isExpanded ? "600px" : "0px",
            overflow: "visible",
            pointerEvents: isExpanded ? "auto" : "none",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* HOME */}
          <button
            onClick={() => {
              setActiveLink("HOME");
              navigate("/");
            }}
            className="relative px-3 py-1.5 text-sm font-medium rounded-full group"
          >
            <span
              className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "HOME" ? "text-gray-900" : "text-gray-500"
                }`}
            >
              HOME
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-indigo-500 transition-all duration-300">
              HOME
            </span>
          </button>

          {/* ABOUT */}
          <button
            onClick={() => {
              setActiveLink("ABOUT");
              navigate("/about");
            }}
            className="relative px-3 py-1.5 text-sm font-medium rounded-full group"
          >
            <span
              className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "ABOUT" ? "text-gray-900" : "text-gray-500"
                }`}
            >
              ABOUT
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-indigo-500 transition-all duration-300">
              ABOUT
            </span>
          </button>

          {/* PROJECTS */}
          <button
            onClick={() => {
              setActiveLink("PROJECTS");
              navigate("/courses");
            }}
            className="relative px-3 py-1.5 text-sm font-medium rounded-full group"
          >
            <span
              className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "PROJECTS" ? "text-gray-900" : "text-gray-500"
                }`}
            >
              COURSES
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-indigo-500 transition-all duration-300">
              COURSES
            </span>
          </button>

          {/* PAGES Dropdown */}
          <div className="relative" ref={pagesDropdownRef}>
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              className="relative px-3 py-1.5 text-sm font-medium rounded-full group flex items-center gap-1"
            >
              <span className="text-gray-500">PAGES</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              aria-hidden={!pagesDropdownOpen}
              style={{
                opacity: pagesDropdownOpen ? 1 : 0,
                transform: pagesDropdownOpen
                  ? "translateY(0) scaleY(1)"
                  : "translateY(-8px) scaleY(0.97)",
                pointerEvents: pagesDropdownOpen ? "auto" : "none",
                transformOrigin: "top",
                transition:
                  "opacity 0.25s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
              className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-2xl p-3 w-56 shadow-2xl shadow-black/10"
            >
              <ul className="flex flex-col gap-1.5">
                {pagesLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setPagesDropdownOpen(false);
                      }}
                      className="text-sm text-gray-700 hover:text-indigo-600 transition-colors duration-150 block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Contact */}
          <button
            onClick={() => navigate("/contact")}
            className="lg:block hidden px-4 h-9 rounded-full text-white text-sm bg-gray-900 hover:bg-gray-800"
            style={{
              opacity: isExpanded ? 1 : 0,
              maxWidth: isExpanded ? "120px" : "0px",
              overflow: "hidden",
              pointerEvents: isExpanded ? "auto" : "none",
              padding: isExpanded ? undefined : "0",
              transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            CONTACT
          </button>

          {/* Hamburger */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-gray-100"
          >
            <span
              className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </nav >



      {/* Mobile Menu */}
      {
        menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden animate-fadeIn"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className="fixed z-50 lg:hidden bg-white rounded-2xl border border-gray-200 shadow-xl p-4 flex flex-col gap-2 animate-slideDown"
              style={{
                top: "calc(70px + env(safe-area-inset-top))",
                left: "50%",
                transform: "translateX(-50%)",
                width: "calc(100% - 32px)",
                maxWidth: "400px",
              }}
            >
              <button
                onClick={() => {
                  setActiveLink("HOME");
                  navigate("/");
                  setMenuOpen(false);
                }}
                className="relative w-full py-3 text-center rounded-xl overflow-hidden group"
              >
                <span
                  className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "HOME"
                    ? "text-gray-900 font-medium"
                    : "text-gray-600"
                    }`}
                >
                  HOME
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-indigo-600 font-medium">
                  HOME
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveLink("ABOUT");
                  navigate("/about");
                  setMenuOpen(false);
                }}
                className="relative w-full py-3 text-center rounded-xl overflow-hidden group"
              >
                <span
                  className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "ABOUT"
                    ? "text-gray-900 font-medium"
                    : "text-gray-600"
                    }`}
                >
                  ABOUT
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-indigo-600 font-medium">
                  ABOUT
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveLink("PROJECTS");
                  navigate("/projects");
                  setMenuOpen(false);
                }}
                className="relative w-full py-3 text-center rounded-xl overflow-hidden group"
              >
                <span
                  className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "PROJECTS"
                    ? "text-gray-900 font-medium"
                    : "text-gray-600"
                    }`}
                >
                  PROJECTS
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-indigo-600 font-medium">
                  PROJECTS
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveLink("COURSES");
                  navigate("/courses");
                  setMenuOpen(false);
                }}
                className="relative w-full py-3 text-center rounded-xl overflow-hidden group"
              >
                <span
                  className={`block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 ${activeLink === "COURSES"
                    ? "text-gray-900 font-medium"
                    : "text-gray-600"
                    }`}
                >
                  COURSES
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-indigo-600 font-medium">
                  COURSES
                </span>
              </button>

              <div className="relative z-10">

                {/* BUTTON */}
                <button

                  onClick={(e) => {
                    e.stopPropagation()
                    setPagesOpen((prev) => !prev)
                  }}
                  className="w-full py-3 text-center rounded-xl overflow-hidden group flex items-center justify-center gap-2"
                >
                  <span className="text-gray-600">PAGES</span>

                  {/* Arrow */}
                  <span
                    className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${pagesOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}
    `}
                >
                  <div className="ml-4 flex flex-col gap-1">

                    {pagesLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMenuOpen(false);
                        }}
                        className="
            py-2 text-center text-sm text-gray-600
            hover:text-indigo-600 rounded-lg
            transition-colors duration-200
          "
                      >
                        {link.label}
                      </a>
                    ))}

                  </div>
                </div>

              </div>



              <div className="h-px bg-gray-100 my-1" />

              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="relative w-full py-3 text-center rounded-xl overflow-hidden group mt-1"
              >
                <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 bg-gray-900 text-white font-medium rounded-xl py-3">
                  CONTACT
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-indigo-600 text-white font-medium rounded-xl">
                  CONTACT
                </span>
              </button>
            </div>
          </>
        )
      }

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar2;