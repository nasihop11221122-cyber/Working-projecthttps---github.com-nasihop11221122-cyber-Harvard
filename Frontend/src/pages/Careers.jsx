import { section } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import noDataImg from "../../public/no-data-message.png";
import useReveal from '../hooks/useInView.js';
import NoDataModal from '../components/common/NoDataModal.jsx';
import api from '../services/api.js'
import { Helmet } from "react-helmet-async";



const Careers = () => {

  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });

  const [careers, setCareers] = useState([]);


  // const fetchCareers = async () => {
  //   const response = await api.get('/careers');
  //   setCareers(response.data.AllCareers)
  // }

  // useEffect(() => {
  //   fetchCareers();
  // }, [])


  return (

    <>

      <Helmet>
        <title>Careers at SSI Bannu | Join Our Team</title>

        <meta
          name="description"
          content="Explore job opportunities at SSI Bannu. Join our team and grow your career in software development and IT services."
        />

        <meta
          name="keywords"
          content="careers Bannu, jobs SSI Bannu, software house jobs, IT jobs Pakistan"
        />

        <link
          rel="canonical"
          href="https://www.ssibannu.com/careers"
        />

        <meta property="og:title" content="Careers at SSI Bannu" />
        <meta
          property="og:description"
          content="Join SSI Bannu and build your career in IT and software development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ssibannu.com/careers"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzo12ba3f/image/upload/v1777612042/ssiLogo_xzv8qq.png"
        />
      </Helmet>

      <section className="relative min-h-screen py-24 bg-bg-section overflow-hidden">

        {careers ? (
          < NoDataModal
            src={noDataImg}
            alt='no-careers-image'
            msg='No Job Available Currently' />
        ) :
          (
            careers?.map((item) => (
              <div key={item.id} className="p-4 border-b">
                {item.name}
              </div>
            ))
          )}

      </section>
    </>
  )
}

export default Careers