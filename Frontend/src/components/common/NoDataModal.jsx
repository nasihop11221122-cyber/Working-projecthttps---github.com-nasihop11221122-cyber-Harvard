import React from 'react'
import useReveal from '../../hooks/useInView.js';





export default function NoDataModal({ src, alt, msg }) {

  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });

  return (
    <>
      <div className={`text-center py-10 fade-up`}>

        {src && alt && (
          <img
            src={src}
            alt={alt}
            className="w-68 mx-auto mb-4"
          />)}

        {msg && (
          <p className="text-gray-400 font-semibold">{msg}</p>
        )

        }
      </div>
    </>
  )
}

