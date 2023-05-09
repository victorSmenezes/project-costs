import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"



function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultLayout