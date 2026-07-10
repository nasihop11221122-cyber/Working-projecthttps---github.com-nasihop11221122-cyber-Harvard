import React, { useState } from 'react';

/**
 * Global styles for the fonts requested.
 * We import 'Poppins' for the heading.
 * We import 'Cinzel' as a high-quality web fallback for 'Trajan Pro', 
 * but prioritize 'Trajan Pro Bold' in the font-family stack.
 */

const FontStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Cinzel:wght@600;700;800&display=swap');
    
    .font-poppins { font-family: 'Poppins', sans-serif; }
    .font-trajan { font-family: 'Trajan Pro Bold', 'Trajan Pro', 'Cinzel', serif; }
    
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    // Color utility classes for easy theme adjustments
    .cert-text-dark { color: #111827 !important; }
    .cert-text-medium { color: #374151 !important; }
    .cert-bg-line { background-color: #6b7280 !important; }
    .cert-bg-black { background-color: #000000 !important; }
  `}</style>
);

/**
 * Reusable Certificate Component
 */
const CertificateTemplate = ({ imgSrc, data, setImgSrc }) => (
    <div className="relative w-full h-full bg-white">
        {/* Background Image */}
        <img
            src={imgSrc}
            alt="Certificate Background"
            className="w-full h-auto block object-cover"
            crossOrigin="anonymous"
            onError={() => setImgSrc('https://placehold.co/1123x794/e2e8f0/94a3b8?text=Please+load+Certificate.jpg+here')}
        />

        {/* Dynamic Content Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* DATE */}
            <div
                className="absolute font-trajan font-bold text-gray-800 tracking-wide"
                style={{ top: '36%', right: '7.5%', fontSize: '1.2cqw' }}
            >
                DATE : {data?.date}
            </div>

            {/* STUDENT NAME */}
            <div
                className="absolute flex flex-col items-center justify-center"
                style={{ top: '56%', left: '62.5%', transform: 'translate(-50%, -50%)', width: '40cqw' }}
            >
                <h1
                    className="font-poppins font-bold text-[#125B8D] whitespace-nowrap mb-[0.8cqw]"
                    style={{ fontSize: '3.2cqw' }}
                >
                    {data?.stdName}
                </h1>
                <div className="w-[80%] h-[0.20cqw] bg-accent-dark rounded-full" />
            </div>

            {/* PARAGRAPH / DESCRIPTION */}
            <div
                className="absolute font-trajan text-center text-gray-900 flex items-start justify-center"
                style={{ top: '63.5%', left: '31%', width: '63%', fontSize: '1.18cqw', lineHeight: '1.8' }}
            >
                <p>{data?.desc}</p>
            </div>

            {/* BOTTOM SECTION: CEO */}
            <div
                className="absolute flex flex-col items-center"
                style={{ top: '89%', left: '42%', transform: 'translate(-50%, -50%)', width: '18cqw' }}
            >
                <p className="font-trajan font-bold text-gray-900 uppercase" style={{ fontSize: '1.2cqw', marginBottom: '0.5cqw' }}>
                    {data?.ceoName}
                </p>
                <div className="w-full h-[0.15cqw] bg-black" />

                <p className="font-trajan font-bold text-gray-900 mt-[0.5cqw]" style={{ fontSize: '1.1cqw' }}>
                    CEO
                </p>
            </div>

            {/* BOTTOM SECTION: SIGNATURE */}
            <div
                className="absolute flex flex-col items-center"
                style={{ top: '89%', left: '64.5%', transform: 'translate(-50%, -50%)', width: '18cqw' }}
            >
                <div className="w-full h-[0.15cqw] bg-black mt-[1.7cqw]"></div>
                <p className="font-trajan font-bold text-gray-900 mt-[0.5cqw]" style={{ fontSize: '1.1cqw' }}>
                    SIGNATURE
                </p>
            </div>

            {/* BOTTOM SECTION: VERIFICATION CODE */}
            <div
                className="absolute flex flex-col items-center"
                style={{ top: '89%', left: '86%', transform: 'translate(-50%, -50%)', width: '18cqw' }}
            >
                <p className="font-poppins font-bold text-gray-900 uppercase" style={{ fontSize: '1.1cqw' }}>
                    VERIFICATION CODE:
                </p>
                <p className="font-trajan text-gray-600 mt-[0.2cqw]" style={{ fontSize: '1.1cqw' }}>
                    {data?.code}
                </p>
            </div>
        </div>
    </div>
);

export default CertificateTemplate;