import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar.jsx';

const MainLayout = () => {
    return (
        <>
            <SideBar />
            <div className="content-section p-md-0"> 
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout