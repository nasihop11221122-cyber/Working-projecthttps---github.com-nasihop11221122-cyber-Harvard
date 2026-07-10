import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from "react-toastify";
import { BackToTop } from './components/common/BackToTop'

const App = () => {


  return (
    <>
      <AppRoutes />

      {/* Back to top */}
      <BackToTop />


      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App