import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {


    return (
        <>
            <nav className='p-2'>
                <Navbar2 />
            </nav>


            <main className='min-h-auto w-full'>
                <Outlet />
            </main>


            <footer className='w-full'>
                <Footer />
            </footer>
        </>
    )
}

export default layout