import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import env from 'dotenv'

env.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const allowedOrigins = [
  "https://ssibannu.com",
  "https://www.ssibannu.com",
  "http://localhost:5173",
  "http://localhost:5174",
  "https://ssib-website-admin.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps, postman, curl)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);



app.get('/testing', (req, res) => {
  res.status(200).send('ssi backend is working');
})



import AuthRoutes from './routes/auth.routes.js'
app.use('/api', AuthRoutes)

// initializing routes...
import applyRoutes from './routes/apply.routes.js'
app.use('/api', applyRoutes);

import eventRoutes from './routes/events.routes.js'
app.use('/api', eventRoutes)

import resultRoutes from './routes/results.routes.js'
app.use('/api', resultRoutes);

import ServiceRoutes from './routes/services.routes.js'
app.use('/api', ServiceRoutes);

import careerRoutes from './routes/careers.routes.js'
app.use('/api', careerRoutes);

import certificateRoutes from './routes/certificate.routes.js'
app.use('/api', certificateRoutes)

import CourseRoutes from './routes/courses.routes.new.js'
app.use('/api', CourseRoutes)

import ProjectRoutes from './routes/projects.routes.js'
app.use('/api/projects', ProjectRoutes)


import RoleRMP from './routes/RoleRoadmaps.routes.js'
app.use('/api', RoleRMP)















// routes
import courseRoutes from "./routes/courses.routes.new.js";
app.use("/api", courseRoutes);

import projectRoutes from "./routes/projects.routes.js";
app.use("/projects", projectRoutes);







app.get("/sitemap.xml", async (req, res) => {
  res.header("Content-Type", "application/xml");

  const urls = [
    "/",
    "/about",
    "/services",
    "/courses",
    "/contact"
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach(url => {
    xml += `
      <url>
        <loc>https://yourdomain.com${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  xml += `</urlset>`;

  res.send(xml);
});







export default app;
