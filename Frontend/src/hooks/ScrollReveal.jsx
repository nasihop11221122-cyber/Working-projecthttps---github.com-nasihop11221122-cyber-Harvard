import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const wrapperRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Pehle normal dikhao — koi hide nahi
    gsap.set(el, {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
    });

    const checkAndAnimate = () => {
      if (hasAnimated.current) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jab element screen ke 85% tak aa jaye
      if (rect.top < windowHeight * 0.85) {
        hasAnimated.current = true;

        gsap.fromTo(
          el,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            // scale: 1.06,
            transformOrigin: 'top center',
          },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.2,
            delay: { delay },
            ease: 'power3.in',
          }
        );

        window.removeEventListener('scroll', checkAndAnimate);
      }
    };

    // Page load par bhi check karo — agar already visible hai
    checkAndAnimate();

    window.addEventListener('scroll', checkAndAnimate, { passive: true });
    return () => window.removeEventListener('scroll', checkAndAnimate);
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;