import { useState, useEffect, useRef } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { ChevronDown, Crosshair, Menu, X } from "lucide-react";
import { ArrowBtn } from "../UI/ArrowBtn";
import { SwapEffect } from "../common/SwapEffect";
import { IkArrowButton } from "../UI/IkArrowButton";

// ─── Importing Nav Data ────────────────────────────────
import { PRIMARY_LINKS, DROPDOWN_GROUPS, MOBILE_LINKS } from "../../constants/NavData";


// ─── NavLinkItem ──────────────────────────────────────────────────────────────
// Desktop nav link 
const NavLinkItem = ({ href, label }) => (
    <NavLink
        to={href}
        className={({ isActive }) =>
            `relative text-[16px] font-medium transition-colors duration-200 group
       ${isActive ? "text-text-dark" : "text-text-dark hover:text-text-dark"}`
        }
    >
        {label}

        {/* Underline — slides in from left */}
        {/* <span
            className="absolute -bottom-0.5 left-0 h-px bg-text-dark
                 w-0 group-hover:w-full transition-all duration-300 ease-out"
        /> */}
    </NavLink>
);

// ─── PagesDropdown ────────────────────────────────────────────────────────────
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

// ─── HamburgerIcon ────────────────────────────────────────────────────────────
const MenuToggleBtn = ({ isOpen, onClick }) => (
    <button
        onClick={onClick}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="
      flex items-center justify-center
      w-10 h-10 cursor-pointer
      text-text-dark
      transition-transform duration-200 active:scale-90
    "
    >
        {/* Swap icon based on state with a quick scale+fade */}
        <span
            className="transition-all duration-200 font-bold"
            style={{
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? "rotate-90 scale-75" : "rotate-0 scale-100",
                position: isOpen ? "absolute" : "relative",
            }}
        >
            <Menu size={22} />
        </span>
        <span
            className="transition-all duration-200"
            style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "rotate-0 scale-100" : "rotate-90 scale-75",
                position: isOpen ? "relative" : "absolute",
            }}
        >
            <X size={22} />
        </span>
    </button>
);


// ─── MobileMenu ───────────────────────────────────────────────────────────────
const MobileMenu = ({ isOpen, onClose, ContactBtn }) => (
    <>
        {/* Backdrop */}
        <div
            onClick={onClose}
            className={`
        fixed inset-0 bg-bg-light backdrop-blur-sm z-40
        transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        />

        {/* Menu panel — slides down from top */}
        <div
            className={`
        fixed top-0 left-0 right-0 z-50 h-auto 
        bg-bg-dark border-b border-white/10
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
        >
            {/* Menu top bar — logo + close */}
            <div className="flex items-center justify-between px-6 py-5">
                <NavLink to="/" onClick={onClose}>
                    <span className="text-text-dark font-bold text-2xl tracking-wide">SSIBannu</span>
                </NavLink>
                <MenuToggleBtn isOpen={true}
                    onClick={onClose} />
            </div>

            {/* Links — staggered fade-in */}
            <nav className="relative px-6 py-6 flex flex-col">

                {/* Pages — dropdown */}
                {/* <div ref={dropdownRef} className="relative">
                    <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`
                    flex items-center gap-1 text-lg font-medium
                    transition-colors duration-200 cursor-pointer
                    ${dropdownOpen ? "text-text-dark" : "hover:text-text-dark"}
                  `}
                    >
                        Pages
                        <ChevronDown
                            size={14}
                            className={`text-xl transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                        />
                    </button>

                    <PagesDropdown isOpen={dropdownOpen} />
                </div> */}

                {PRIMARY_LINKS.map((link, idx) => (
                    <NavLink
                        key={link.href}
                        to={link.href}
                        onClick={onClose}
                        className={({ isActive }) =>
                            `text-lg py-3 border-b border-white/5
               transition-colors duration-200
               ${isActive ? "text-text-dark" : " hover:text-text-dark"}`
                        }
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateX(0)" : "translateX(-16px)",
                            transition: `opacity 0.4s ease ${100 + idx * 50}ms,
                           transform 0.4s cubic-bezier(0.22,1,0.36,1) ${100 + idx * 50}ms`,
                        }}
                    >
                        {link.label}
                    </NavLink>
                ))}

                {/* Contact btn at bottom of mobile menu */}
                <div
                    className="mt-6"
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(12px)",
                        transition: `opacity 0.4s ease ${100 + MOBILE_LINKS.length * 50}ms,
                         transform 0.4s ease ${100 + MOBILE_LINKS.length * 50}ms`,
                    }}
                >
                    <ArrowBtn
                        onClick={() => Navigate('/contacts')}
                        label="Contact Us"
                        btnBg="bg-black"
                        iconBg="bg-white"
                        iconColor="text-black"
                        textColor="text-white font-sembold"
                        padding="px-4 py-4"
                        hoverBtnBg="hover:bg-white"
                        hoverIconBg="group-hover:bg-black"
                        hoverTextColor="group-hover:text-black"
                    />
                </div>
            </nav>
        </div>
    </>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = ({ ContactBtn }) => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropdownRef = useRef(null);


    // ── Scroll detection ──
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Close dropdown on outside click ──
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // ── Close on Escape key ──
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") {
                setDropdownOpen(false);
                setMobileOpen(false);
            }
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);

    // ── Lock body scroll when mobile menu is open ──
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <header
                className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 
          ${scrolled
                        ? "border-b border-white/10 py-2"
                        : " py-4"
                    }
        `}
            >
                <div className="max-w-355  mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between">

                        {/* ── Logo ── */}
                        <NavLink
                            to="/"
                            className="shrink-0 z-10"
                            aria-label="ssi home"
                        >
                            {/*
                Replace this with your actual SVG logo or <img>.
                Using text placeholder — swap with:
                <img src="/logo.svg" alt="Kenzo" className="h-7 w-auto" />
              */}
                            <span className="text-text-dark font-bold text-2xl tracking-wide">
                                SSI<span className="text-gray-400">Bannu</span>
                            </span>
                        </NavLink>

                        {/* ── Desktop Nav ── */}
                        <nav className="hidden w-[40%] max-w-[65%] p-6 lg:flex items-center lg:justify-between gap-8">


                            <SwapEffect>
                                <NavLinkItem href="/" label="Home" />
                            </SwapEffect>


                            {/* About Us — direct link */}
                            <SwapEffect>
                                <NavLinkItem href="/about" label="About Us" />
                            </SwapEffect>

                            {/* Services — direct link */}
                            <SwapEffect>
                                <NavLinkItem href="/services" label="Services" />
                            </SwapEffect>



                            {/* Pages — dropdown */}
                            {/* <div ref={dropdownRef} className="relative">
                                <button
                                    onClick={() => setDropdownOpen((prev) => !prev)}
                                    className={`
                    flex items-center gap-1 text-lg font-medium
                    transition-colors duration-200 cursor-pointer
                    ${dropdownOpen ? "text-text-dark" : "hover:text-text-dark"}
                  `}
                                >
                                    <span className="text-[16px]">Pages</span>
                                    <ChevronDown
                                        size={14}
                                        className={`text-xl transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                                    />
                                </button>

                                <PagesDropdown isOpen={dropdownOpen} />
                            </div> */}


                            {/* Blogs */}
                            <SwapEffect>
                                <NavLinkItem href="/courses" label="Courses" />
                            </SwapEffect>

                            {/* Projects */}
                            <SwapEffect>
                                <NavLinkItem href="/projects" label="Projects" />
                            </SwapEffect>

                        </nav>


                        {/* ── Right Side: ContactBtn (desktop) + Hamburger (mobile) ── */}
                        <div className="flex items-center gap-4">

                            {/* ContactUsBtn — your component, hidden on mobile */}
                            <div className="hidden lg:block">
                                <ArrowBtn
                                    onClick={() => Navigate('/contacts')}
                                    label="Contact Us"
                                    btnBg="bg-black"
                                    iconBg="bg-white"
                                    border="border border-text-muted"
                                    iconColor="text-black"
                                    textColor="text-white font-sembold"
                                    padding="px-4 py-4"
                                    hoverBtnBg="hover:bg-white"
                                    hoverIconBg="group-hover:bg-black"
                                    hoverTextColor="group-hover:text-black"
                                />
                                {/* <IkArrowButton label={"Contact Us"} arrowSide="left" color="black" /> */}
                            </div>

                            {/* Hamburger — mobile only */}
                            <div className="lg:hidden">
                                <MenuToggleBtn isOpen={mobileOpen}
                                    onClick={() => setMobileOpen((prev) => !prev)} />
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mobile Menu ── */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                ContactBtn={ArrowBtn}
            />
        </>
    );
};

export default Navbar;