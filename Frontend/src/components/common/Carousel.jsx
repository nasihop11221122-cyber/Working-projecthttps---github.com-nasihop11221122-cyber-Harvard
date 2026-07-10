import React, { useState, useEffect, useRef, useCallback } from "react";

/*
  HeroCarousel
  ─────────────────────────────────────────────
  Props:
    data: Array of objects:
      {
        image: string,       // required — if missing, slide is skipped
        title: string,       // optional
        subtitle: string,    // optional
        href: string,        // optional — arrow button only shows if provided
      }

  Rules:
    - If data is not provided or empty → renders nothing
    - Each slide: image required, title/subtitle/href each optional
    - Dots: clickable to jump to slide
    - Drag/swipe: left/right to change slide
    - Content overlay sits at bottom of image, never covering center
───────────────────────────────────────────── */

export default function HeroCarousel({ data = [] }) {
  console.log(data, "The data of caroasal")
  // Filter out slides with no image
  const slides = (data ?? []).filter(
    (item) => typeof item?.image === "string" && item.image.trim() !== ""
  );

  // If nothing to show, render nothing
  if (slides.length === 0) return null;

  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  const goTo = useCallback(
    (i) => setActive((i + slides.length) % slides.length),
    [slides.length]
  );

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current);
    if (slides.length > 1) {
      timerRef.current = setInterval(
        () => setActive((p) => (p + 1) % slides.length),
        5000
      );
    }
  }, [slides.length]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  const manual = (i) => {
    clearInterval(timerRef.current);
    goTo(i);
    startAuto();
  };

  // ── Drag handlers ──
  const onPointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
    isDragging.current = true;
  };

  const onPointerUp = (e) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 40) manual(active + (delta > 0 ? 1 : -1));
    isDragging.current = false;
    dragStartX.current = null;
  };

  const onPointerLeave = () => {
    isDragging.current = false;
    dragStartX.current = null;
  };

  const current = slides[active];
  const hasTitle = typeof current.title === "string" && current.title.trim() !== "";
  const hasSubtitle = typeof current.subtitle === "string" && current.subtitle.trim() !== "";
  const hasHref = typeof current.href === "string" && current.href.trim() !== "";
  const hasContent = hasTitle || hasSubtitle || hasHref;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;500&display=swap');
        .hero-carousel-root { user-select: none; -webkit-user-select: none; }
        .hero-carousel-root img { -webkit-user-drag: none; user-drag: none; pointer-events: none; }
        .dot-btn { transition: width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s; }
      `}</style>

      <div
        className="hero-carousel-root relative w-full overflow-hidden"
        style={{
          borderRadius: "20px",
          height: "clamp(320px, 56vw, 660px)",
          cursor: isDragging.current ? "grabbing" : "grab",
          background: "#000",
        }}
        onMouseDown={onPointerDown}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerLeave}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
      >
        {/* ── Slides ── */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: i === active ? 1 : 0,
              transition: "opacity 0.75s cubic-bezier(0.4,0,0.2,1)",
              zIndex: i === active ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title ?? `Slide ${i + 1}`}
              className="w-full h-full object-cover"
              style={{
                transform: i === active ? "scale(1.03)" : "scale(1)",
                transition: "transform 8s linear",
              }}
            />
          </div>
        ))}

        {/* ── Bottom gradient for content readability ── */}
        {hasContent && (
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 38%, transparent 65%)",
            }}
          />
        )}

        {/* ── Content overlay — bottom center ── */}
        {hasContent && (
          <div
            className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-10 px-6"
            style={{ textAlign: "center" }}
          >
            {/* Category pill */}
            {hasTitle && (
              <span
                className="mb-4 inline-block text-sm font-medium text-white px-4 py-1.5 rounded-full"
                // style={{
                //   background: "rgba(99,102,241,0.85)",
                //   backdropFilter: "blur(6px)",
                //   letterSpacing: "0.02em",
                //   fontFamily: "'Inter', sans-serif",
                // }}
                                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
                  fontWeight: 800,
                  color: "#c9cfd1",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  maxWidth: "820px",
                  marginBottom: hasHref ? "20px" : "0",
                  textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                }}
              >
                {current.title}
              </span>
            )}

            {/* Subtitle — big display text */}
            {hasSubtitle && (
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  maxWidth: "820px",
                  marginBottom: hasHref ? "20px" : "0",
                  textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                }}
              >
                {current.subtitle}
              </h2>
            )}

            {/* Arrow link button */}
            {hasHref && (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#6366f1",
                  color: "#fff",
                  fontSize: "20px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  marginTop: !hasSubtitle ? "0" : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 28px rgba(99,102,241,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.5)";
                }}
                aria-label="Open project"
              >
                ↗
              </a>
            )}
          </div>
        )}

        {/* ── Dots ── */}
        {slides.length > 1 && (
          <div
            className="absolute z-30 flex items-center gap-2"
            style={{ bottom: "20px", left: "50%", transform: "translateX(-50%)" }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                className="dot-btn h-[7px] rounded-full focus:outline-none"
                style={{
                  width: i === active ? "28px" : "7px",
                  background:
                    i === active ? "#6366f1" : "rgba(255,255,255,0.45)",
                  boxShadow:
                    i === active ? "0 0 10px rgba(99,102,241,0.7)" : "none",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  manual(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}