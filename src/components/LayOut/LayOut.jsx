import React from 'react'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import WhoWeAre from '../WhoWeAre/WhoWeAre'

export default function LayOut() {
    return (
        <>


            <NavBar />

            <Outlet/>
            <WhoWeAre/>
            <Footer />


        </>
    )
}
