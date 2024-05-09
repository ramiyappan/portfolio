import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <SideBar />
            <div className="content-section p-md-0"> 
                <Outlet />
                <ToastContainer />
            </div>
        </>
    )
}

export default MainLayout