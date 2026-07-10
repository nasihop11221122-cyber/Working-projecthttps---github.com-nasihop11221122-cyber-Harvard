import React, { Suspense } from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import ProjectLayout from '../pages/ProjectLayout'
import Layout from '../components/layout/layout.jsx'
import Certificate from '../pages/Certificate.jsx'
import ProjectDetials from '../pages/ProjectDetials.jsx'
import ContactPage from '../pages/Contact.jsx'
import Loader from '../components/UI/Loader.jsx'
// import Sitemap from '../pages/Sitemap.jsx'
// import RobotsTxt from '../pages/RobotsTxt.jsx'

const ServicesPage = React.lazy(() => import('../pages/ServicesPage'))
const Projects = React.lazy(() => import('../pages/Projects'))
const ServiceDetails = React.lazy(() => import('../pages/ServiceDetails'))
const CoursesPage = React.lazy(() => import('../pages/CoursesPage'))
const CourseDetails = React.lazy(() => import('../pages/CourseDetails'))
const Careers = React.lazy(() => import('../pages/Careers'))



const AppRoutes = () => {


    return (
        <>

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<Layout />}>

                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/projectlayout' element={<ProjectLayout />} />
                        <Route path='/projectDetails/:id' element={<ProjectDetials />} />
                        <Route path='/services' element={<ServicesPage />} />
                        <Route path='/services/:subServiceId/:serviceId' element={<ServiceDetails />} />
                        <Route path='/courses' element={<CoursesPage />} />


                        {/* ===== 🔴 NEW ROUTES ===== */}
                        {/* <Route path="/sitemap.xml" element={<Sitemap />} /> */}
                        {/* <Route path="/robots.txt" element={<RobotsTxt />} /> */}

                        {/* <Route path='/courses/:id' element={<CourseDetails />} /> */}

                        <Route path='/courses/:slug' element={<CourseDetails />} />

                        <Route path='/certificate' element={<Certificate />} />
                        <Route path='/careers' element={<Careers />} />
                        <Route path='/contact' element={<ContactPage />} />

                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </Suspense>



        </>
    )
}

export default AppRoutes