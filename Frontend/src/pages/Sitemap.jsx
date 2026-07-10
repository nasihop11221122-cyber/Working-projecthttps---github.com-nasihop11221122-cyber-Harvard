import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Sitemap = () => {
    const [sitemap, setSitemap] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generateSitemap = async () => {
            try {
                // 🔹 Fetch all dynamic data from backend
                const [coursesRes, servicesRes] = await Promise.all([
                    api.get('/getCourses'),
                    api.get('/services')
                ]);

                const courses = coursesRes.data.data || [];
                const services = servicesRes.data.AllServices || [];

                const today = new Date().toISOString().split('T')[0];
                const BASE_URL = 'https://www.ssibannu.com';

                let urls = [];

                // 1️⃣ STATIC PAGES
                const staticPages = [
                    { path: '/', priority: '1.0', changefreq: 'weekly' },
                    { path: '/about', priority: '0.8', changefreq: 'monthly' },
                    { path: '/courses', priority: '0.9', changefreq: 'weekly' },
                    { path: '/services', priority: '0.9', changefreq: 'weekly' },
                    { path: '/projects', priority: '0.7', changefreq: 'monthly' },
                ];

                staticPages.forEach(page => {
                    urls.push(`
                        <url>
                            <loc>${BASE_URL}${page.path}</loc>
                            <lastmod>${today}</lastmod>
                            <changefreq>${page.changefreq}</changefreq>
                            <priority>${page.priority}</priority>
                        </url>
                    `);
                });

                // 2️⃣ DYNAMIC COURSE PAGES
                courses.forEach(course => {
                    const slug = course.slug || course._id;
                    urls.push(`
                        <url>
                            <loc>${BASE_URL}/courses/${slug}</loc>
                            <lastmod>${today}</lastmod>
                            <changefreq>monthly</changefreq>
                            <priority>0.7</priority>
                        </url>
                    `);
                });

                // 3️⃣ DYNAMIC SERVICE PAGES
                services.forEach(service => {
                    const slug = service.slug || service._id;
                    urls.push(`
                        <url>
                            <loc>${BASE_URL}/services/${slug}</loc>
                            <lastmod>${today}</lastmod>
                            <changefreq>monthly</changefreq>
                            <priority>0.6</priority>
                        </url>
                    `);
                });

                // ===== GENERATE XML =====
                const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${urls.join('')}
</urlset>`;

                setSitemap(xml);
                setLoading(false);

                console.log(`✅ Sitemap generated with ${urls.length} URLs`);

            } catch (error) {
                console.error('❌ Error generating sitemap:', error);
                setLoading(false);
            }
        };

        generateSitemap();
    }, []);

    if (loading) {
        return <div>⏳ Generating sitemap...</div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: sitemap }} />;
};

export default Sitemap;