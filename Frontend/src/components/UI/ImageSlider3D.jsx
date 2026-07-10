import React, { useRef, useEffect } from "react";

const defaultImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
];

const ImageSlider3D = ({ images = defaultImages }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    const totalCards = cards.length;

    if (totalCards <= 1) return;

    const render = () => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const scrollableDistance = rect.height - windowHeight;
      let progress = 0;

      if (scrollableDistance > 0) {
        progress = -rect.top / scrollableDistance;
        progress = Math.max(0, Math.min(1, progress));
      }

      const centerIndex = progress * (totalCards - 1);

      const cardWidth = 260;
      // Increased gap slightly to help spread images across the wider screen
      const gap = 60;
      // Increased maxVisible to allow more images to be seen at once across the full width
      const maxVisible = totalCards / 2;

      cards.forEach((card, i) => {
        if (!card) return;

        const distance = i - centerIndex;
        let normalized = distance / maxVisible;

        // Horizontal position relative to screen center
        const x = distance * (cardWidth + gap);

        // Internal cylinder rotation
        // We allow the rotation to go further for images at the edges of the screen
        const rotateY = -normalized * 60;
        const z = Math.abs(normalized) * 250;
        const scale = 1 - Math.abs(normalized) * 0.15;
        const zIndex = Math.round(100 - Math.abs(distance) * 10);

        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.zIndex = zIndex;

        // Fading images as they reach the very edge of the screen
        card.style.opacity = 1 - Math.abs(normalized) * 0.5;
      });
    };

    window.addEventListener("scroll", render, { passive: true });
    window.addEventListener("resize", render);

    render();

    return () => {
      window.removeEventListener("scroll", render);
      window.removeEventListener("resize", render);
    };
  }, [images]);

  const displayImages = images.length > 0 ? images : defaultImages;

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] bg-bg-card"
    >
      <div
        className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative flex items-center justify-center w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {displayImages.map((img, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute size-78 rounded-[1.2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-zinc-900 border border-white/5"
              style={{
                transformOrigin: "center center",
                willChange: "transform",
                transition: "transform 0.5s cubic-bezier(0.1, 0.5, 0.3, 1), opacity 0.5s linear",
                // Initial placement at screen center
                left: "calc(50% - 130px)"
              }}
            >
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider3D;