import React, { useState, useEffect, useRef } from 'react';
import CertificateTemplate from '../components/UI/CertificateTemplate ';
import api from '../services/api.js'


const Certificate = () => {
    const exportRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [imgSrc, setImgSrc] = useState('/Certificate.png');
    const [html2canvasLoaded, setHtml2canvasLoaded] = useState(false);

    // --- NEW: Search & Verification States ---
    const [searchQuery, setSearchQuery] = useState('');
    const [searchStatus, setSearchStatus] = useState('');

    // State to manage dynamic certificate content
    const [certData, setCertData] = useState(null);

    // Load html2canvas from CDN since the environment couldn't resolve the npm package
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.async = true;
        script.onload = () => setHtml2canvasLoaded(true);
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    /**
   * Handles the high-resolution PNG download using the global html2canvas instance.
   */
    const handleDownload = async () => {
        if (!exportRef.current || !window.html2canvas) return;

        setIsDownloading(true);

        try {
            const canvas = await window.html2canvas(exportRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',

                onclone: (clonedDoc) => {
                    const allElements = clonedDoc.querySelectorAll('*');

                    allElements.forEach(el => {
                        const style = window.getComputedStyle(el);

                        // Fix text color
                        if (style.color.includes('oklch')) {
                            el.style.color = '#000000';
                        }

                        // Fix background color
                        if (style.backgroundColor.includes('oklch')) {
                            el.style.backgroundColor = '#ffffff';
                        }

                        // Fix border color
                        if (style.borderColor.includes('oklch')) {
                            el.style.borderColor = '#000000';
                        }
                    });
                }
            });

            const image = canvas.toDataURL('image/png', 1.0);

            const link = document.createElement('a');
            link.download = `${certData.stdName.replace(/\s+/g, '_')}_Certificate.png`;
            link.href = image;
            link.click();

        } catch (error) {
            console.error('Error generating certificate:', error);
        } finally {
            setIsDownloading(false);
        }
    };


    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            if (!searchQuery) return;

            setSearchStatus('searching')

            const response = await api.get(`/certificate/search?code=${searchQuery}`);

            if (response.data.verificationData) {
                setCertData(response.data.verificationData);
                setSearchStatus('success')
            }

            else {
                setSearchStatus('error')
            }
        }
        catch (error) {
            setSearchStatus('error')
            console.log(error.message);
        }
    }





    return (
        <div className="min-h-screen bg-bg-section font-instrument text-text-dark flex flex-col items-center justify-center">

            {/* ACADEMY HEADER / SEARCH SECTION */}
            <div className="w-full max-w-3xl px-4 py-12 flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Verify Credential</h1>
                <p className="text-text-label text-center mb-8 max-w-lg">
                    Enter the verification code found on the certificate to authenticate its validity from our official records.
                </p>

                <form onSubmit={handleSearch} className="w-full flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        placeholder="Enter Code (e.g., SSI-2026-672918)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-(--color-bg-main) border border-border-light text-(--color-text-dark) px-5 py-4 rounded-xl focus:outline-none focus:border-(--color-primary) transition-colors"
                    />
                    <button
                        type="submit"
                        disabled={searchStatus === 'searching'}
                        className="bg-(--color-btn-dark-bg) 
                        text-(--color-btn-dark-text) px-8 py-4 rounded-xl font-semibold hover:bg-accent-dark transition-colors whitespace-nowrap"
                    >
                        {searchStatus === 'searching' ? 'Searching...' : 'Verify Now'}
                    </button>
                </form>


                {/* Status Messages */}
                {searchStatus === 'error' && (
                    <div className="mt-6 text-red-500 font-medium">
                        No certificate found with this verification code.
                    </div>
                )}

                {/* Success Animation */}
                {searchStatus === 'success' && (
                    <div className="mt-8 flex flex-col items-center">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <p className="text-green-600 font-bold mt-2">Verified Successfully</p>
                    </div>
                )}
            </div>

            {/* YOUR ORIGINAL RENDER (Wrapped conditionally based on search success) */}
            {searchStatus === 'success' && (
                <div className="w-full lg:w-3/4 p-4 lg:p-10 flex flex-col items-center justify-center overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">

                    {/* Right Canvas: Visible Certificate Preview */}
                    <div className="w-full p-4 lg:p-12 flex flex-col items-center justify-center overflow-hidden z-10">

                        <div
                            className="w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden bg-white relative group" // Added group here for hover state
                            style={{ containerType: 'inline-size' }}
                        >
                            <CertificateTemplate imgSrc={imgSrc} data={certData} setImgSrc={setImgSrc} />

                            {/* download button */}
                            {/* <button
                                onClick={handleDownload}
                                disabled={isDownloading || !html2canvasLoaded}
                                className={`
                                    absolute top-4 right-4 z-50 p-2.5 rounded-xl text-white shadow-xl
                                    transition-all duration-300 ease-out 
                                    ${isDownloading || !html2canvasLoaded
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-(--color-primary) hover:bg(--color-accent-dark) hover:-translate-y-0.5 active:scale-95 shadow-lg'}
                                    opacity-100 lg:opacity-0 group-hover:opacity-100
                                `}
                            >
                                {isDownloading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <div className="flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-semibold">Download</span>
                                    </div>
                                )}
                            </button> */}

                        </div>
                        <p className="mt-6 text-text-label text-xs italic tracking-widest uppercase">Live Interactive Preview</p>
                    </div>

                    {/* HIDDEN HIGH-RESOLUTION NODE FOR EXPORT */}
                    {/* Fixed at 2480px width (Approx 300 DPI for A4 landscape). 
                        Container Query 'cqw' units ensure the text scales perfectly 
                        from the 800px preview up to this 2480px export. 
                    */}
                    <div
                        ref={exportRef}
                        className="absolute top-[-99999px] left-[-99999px] bg-white pointer-events-none"
                        style={{ width: '2480px', containerType: 'inline-size' }}
                    >
                        <CertificateTemplate imgSrc={imgSrc} data={certData} setImgSrc={setImgSrc} />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Certificate