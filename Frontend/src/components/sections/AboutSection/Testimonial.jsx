import React, { useEffect, useState, useRef } from "react"
import { testimonials } from "../../../constants/aboutdata.js"
import gsap from "gsap"

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  const current = testimonials[index]

  // Auto-rotate every 10 seconds (changed from 60s for better UX)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  // GSAP Animation for content
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(contentRef.current, {
      opacity: 0,
      x: 80,
      duration: 0.3,
      ease: "power2.in"
    })
      .set(contentRef.current, {
        x: -80
      })
      .to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out"
      })

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.2 }
    )
  }, [index])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#171717] w-full flex justify-center items-center text-white pt-12 md:pt-16 lg:py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-15 items-center justify-center max-w-7xl mx-auto">

        {/* Image Section */}
        <div ref={imageRef} className="w-full lg:w-auto flex justify-center">
          <div className="h-80 sm:h-96 md:h-104 lg:h-120 w-full sm:w-auto">
            <img
              src={current.img}
              className="rounded-[40px] w-full sm:w-80 md:w-90 lg:w-100 h-full object-cover shadow-2xl grayscale"
              alt="testimonial"
            />
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="w-full lg:w-[60%] flex justify-center flex-col gap-6 md:gap-8 lg:gap-10 text-center lg:text-left">

          {/* Quote Icon */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://cdn.prod.website-files.com/686650baf173ca1d17762a9e/687dcb419b6c1bdf7f75347f_Testimonial-quote.svg"
              className="w-10 md:w-12 lg:w-14 h-auto"
              alt="quote"
            />
          </div>

          {/* Text Content */}
          <div className="tracking-tighter leading-tight flex flex-col gap-3 md:gap-4 lg:gap-5">
            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-gray-300">
              Testimonials
            </h3>

            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-medium tracking-tighter leading-[1.2] md:leading-[1.2]">
              {current.h1}
            </h1>

            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] font-medium text-gray-400">
              {current.name}
            </p>
          </div>

          {/* Navigation Dots (Optional) */}
          <div className="flex justify-center lg:justify-start gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial