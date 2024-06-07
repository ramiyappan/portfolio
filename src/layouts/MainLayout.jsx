import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer/Footer'
import GameConfig from '../components/Game/GameConfig.jsx';

const MainLayout = ({location}) => {
    // hide footer for a few pages
    const hideFooter = location.pathname === '/contact' || location.pathname === '/portfolio';

    return (
        <>
            <SideBar />

            <div className="content-section p-0">
                <GameConfig /> {/* Side panel to direct to game page */}
                <Outlet /> {/* Everything else inside MainLayout route */}
                {!hideFooter && <Footer />}
                <ToastContainer /> {/* to display toast notifications */}
            </div>
        </>
    )
}

export default MainLayout