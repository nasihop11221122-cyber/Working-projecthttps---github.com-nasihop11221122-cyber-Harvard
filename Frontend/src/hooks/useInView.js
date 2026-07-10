// hooks/useInView.js
// Detects when an element enters the viewport.
// Usage: const [ref, isInView] = useInView({ threshold: 0.2 })

import { useEffect, useRef, useState } from "react";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (no re-trigger on scroll out)
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => { if (el) observer.unobserve(el); };
  }, []);

  return [ref, isInView];
};

export default useInView;