import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { UseInViewWrapper } from "../UI/UseInViewWrapper";

// importing footer data
import { NAV_COLUMNS } from "../../constants/footerData.js";
import { FooterLists } from "../../constants/footerData.js";
import { socialLinks } from "../../constants/socialLinks.js";


// ─── SocialIcon ───────────────────────────────────────────────────────────────
const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      flex items-center
      gap-4 mx-3
      text-text-muted
      transition-all duration-300
      hover:text-white
    "
  >
    <Icon size={24} />
  </a>
);


// ─── NewsletterForm ───────────────────────────────────────────────────────────
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl flex gap-0 rounded-md p-2">
      {status === "success" && (
        <p className="text-text-primary text-sm mb-3">
          Thank you! Your submission has been received!
        </p>
      )}

      {status === "error" && (
        <p className="text-accent text-sm mb-3">
          Oops! Something went wrong while submitting the form.
        </p>
      )}

      <form onSubmit={handleSubmit} className="overflow-hidden" noValidate>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Subscribe Our NewsLetter"
          className="
            flex-1 bg-transparent px-2 py-4 border-b-gray-600
            text-text-primary placeholder:text-text-label
            border-b border-text-muted outline-none
          "
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="
            bg-secondary text-text-dark
            p-4 text-sm font-medium mr-20
            transition-colors duration-300
            hover:bg-text-dark
            hover:border
            hover:text-white
            disabled:opacity-60 disabled:cursor-not-allowed
            rounded-full
          "
        >
          {loading ? "..." : <ArrowRight size={18} />}
        </button>
      </form>
    </div>
  );
};


// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <section className="bg-bg-card lg:pt-20 px-0">

    <div className="max-w-330 mx-auto px-6 lg:px-10">

      <UseInViewWrapper distance={30} duration={600} delay={100} className="w-full">
        <div className="
          grid grid-cols-1 gap-8
          md:grid-cols-2 md:justify-between
          px-0 py-14 border-b border-border-dark
        ">

          {/* LEFT BLOCK */}
          <div className="space-y-3 space-x-0 order-1 mx-auto md:mx-0">
            <Link to="/" aria-label="ssib home" className="shrink-0 mt-10">
              <span className="text-text-primary font-bold text-8xl tracking-wide leading-10 ">
                {FooterLists.brand.name}
              </span>
            </Link>

            {/* Social icons under logo */}
            <div className="max-w-sm flex items-center my-6 mx-auto md:mx-0">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="
            order-2
            grid grid-cols-2 gap-8 lg:place-self-end
            md:grid-cols-3 md:text-lg
          ">
            {NAV_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="
                  text-text-primary font-semibold
                  mb-5
                ">
                  {col.heading}
                </p>

                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="
                          text-text-muted
                          transition-colors duration-200 font-thin
                          hover:text-text-primary
                        "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </UseInViewWrapper>


      {/* ── BOTTOM BAR ───────────────────────────────────────────────────────*/}
      <UseInViewWrapper distance={30} duration={700} delay={250} className="w-full">
        <div className="
          flex justify-center items-center text-center
          py-10
        ">
          <p className="text-text-muted text-sm">
            {FooterLists.copyright.text}
          </p>
        </div>
      </UseInViewWrapper>

    </div>
  </section>
);

export default Footer;