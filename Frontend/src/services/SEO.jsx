// components/SEO.jsx
import React from 'react';
import { Helmet } from "react-helmet-async";

const SEO = ({
    // Required props
    title,
    description,
    keywords,
    
    // Optional props with defaults
    url = "https://www.ssibannu.com/",
    image = "https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png",
    imageWidth = "1200",
    imageHeight = "630",
    type = "website",
    siteName = "SSI Bannu",
    locale = "en_US",
    
    // Schema props
    isLocalBusiness = true,
    isCourseList = false,
    courses = [],
    isBreadcrumb = false,
    breadcrumbItems = [],
    
    // Additional meta
    author = "SSI Bannu",
    publishDate = new Date().toISOString().split('T')[0],
    robots = "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    
    // Location
    city = "Bannu",
    region = "PK-KP",
    country = "PK",
    
    // Social
    twitterCard = "summary_large_image",
    facebookAppId = "", // Optional
    
    // Children for custom schema
    children
}) => {
    
    // ===== HELPER FUNCTIONS =====
    const generateKeywords = () => {
        const baseKeywords = [
            "SSI Bannu",
            "software house in Bannu",
            "web development Bannu",
            "IT courses Bannu",
            "best IT institute in Bannu",
            "computer courses Bannu",
            "learn coding Bannu",
            "freelancing course Bannu"
        ];
        
        if (keywords) {
            const customKeywords = Array.isArray(keywords) ? keywords : keywords.split(',').map(k => k.trim());
            return [...baseKeywords, ...customKeywords].join(', ');
        }
        
        return baseKeywords.join(', ');
    };

    // ===== SCHEMA BUILDERS =====
    const getLocalBusinessSchema = () => ({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "SSI Bannu",
        "alternateName": "Software Solutions Institute Bannu",
        "url": url,
        "logo": image,
        "description": description || "Best IT and Software Academy in Bannu offering web development, software solutions, and IT courses.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": region,
            "addressCountry": country
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Admissions",
            "availableLanguage": ["English", "Urdu"]
        }
    });

    const getCourseListSchema = () => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": courses.map((course, index) => ({
            "@type": "Course",
            "position": index + 1,
            "name": course.name,
            "description": course.description,
            "url": course.url || `${url}courses/${course.slug}`
        }))
    });

    const getBreadcrumbSchema = () => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    });

    const getArticleSchema = () => ({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
            "@type": "Person",
            "name": author
        },
        "datePublished": publishDate,
        "dateModified": publishDate,
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": image
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    });

    // ===== BUILD SCHEMA LIST =====
    const schemas = [];
    
    if (isLocalBusiness) {
        schemas.push(getLocalBusinessSchema());
    }
    
    if (isCourseList && courses.length > 0) {
        schemas.push(getCourseListSchema());
    }
    
    if (isBreadcrumb && breadcrumbItems.length > 0) {
        schemas.push(getBreadcrumbSchema());
    }

    // ===== RENDER =====
    return (
        <Helmet>
            {/* === Primary Meta Tags === */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={generateKeywords()} />
            
            {/* === Canonical URL === */}
            <link rel="canonical" href={url} />
            
            {/* === Language and Region === */}
            <html lang="en" />
            <meta name="geo.region" content={region} />
            <meta name="geo.placename" content={city} />
            <meta name="geo.position" content="32.9851;70.6048" />
            <meta name="ICBM" content="32.9851, 70.6048" />
            
            {/* === Mobile Optimization === */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#2563eb" />
            
            {/* === Open Graph / Facebook === */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={imageWidth} />
            <meta property="og:image:height" content={imageHeight} />
            <meta property="og:image:alt" content={`${siteName} - ${title}`} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />
            {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
            
            {/* === Twitter Card === */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={`${siteName} - ${title}`} />
            
            {/* === Robots === */}
            <meta name="robots" content={robots} />
            <meta name="googlebot" content="index, follow" />
            
            {/* === Author & Publisher === */}
            <meta name="author" content={author} />
            <meta name="publisher" content={siteName} />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            
            {/* === Dublin Core === */}
            <meta name="DC.title" content={title} />
            <meta name="DC.description" content={description} />
            <meta name="DC.language" content={locale} />
            
            {/* === JSON-LD Structured Data === */}
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
            
            {/* === Custom Schema === */}
            {children}
        </Helmet>
    );
};

export default SEO;