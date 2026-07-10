import React from 'react';

const RobotsTxt = () => {
    const content = `# robots.txt for SSI Bannu
# Generated dynamically

User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

Disallow: /admin/
Disallow: /private/
Disallow: /api/

Sitemap: https://www.ssibannu.com/sitemap.xml

Crawl-delay: 1
`;

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default RobotsTxt;