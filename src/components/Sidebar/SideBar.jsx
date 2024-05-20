import React, { useState, useEffect } from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn, FaLaptopCode, FaFileLines} from 'react-icons/fa6'
import {FiMenu} from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";
import { FaYoutube, FaEnvelopeOpenText } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom'
import './SideBar.css'
import '../../App.css'

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768 ? true : false);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        if(window.innerWidth>768){
            window.location.href='/';
        }
        else{
            setIsSidebarOpen(prevState => !prevState)
        }
    };

    return (
        <>
        <div className={`sidebar col-sm-2 bg-theme-color d-flex flex-column ${isSidebarOpen ? 'open' : 'closed'}`}>
            {/* Nav button */}
            <nav className="navbar p-2 d-md-none position-absolute start-0">
                <button 
                    onClick={() => toggleSidebar()}
                    data-bs-toggle="collapse" 
                    data-bs-target="#sidebarCollapse"
                    aria-controls="sidebarCollapse" 
                    aria-expanded={isSidebarOpen ? "true" : "false"} 
                    aria-label="Toggle Sidebar"
                    className="btn btn-sm nav-toggler border-1 border-white"
                >
                    <FiMenu color="white" size={25} />
                </button>
            </nav>

            {/* Special Name Font */}
            <div className="p-md-1 mb-md-1 p-2 pb-0">
                <h2 className='text-center '>
                    <button 
                        onClick={() => toggleSidebar()}
                        data-bs-toggle="collapse" 
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse" 
                        aria-expanded={isSidebarOpen ? "true" : "false"} 
                        aria-label="Toggle Sidebar"
                        className="no-text-decoration bg-transparent border-0 pt-2 pb-2 pb-md-0 text-white"
                    >
                        <div className='sp-font fs-3'>Ramaswamy Iyappan</div>
                    </button>
                </h2>
            </div>

            {/* Profile Section */}
            <div 
                id="sidebarCollapse" 
                className={`p-2 pt-md-0 pb-md-0 collapse collapse-vertical ${window.innerWidth>768 ? 'show' : ''}`}
            >
                <div>
                    <img className='profile-image w-75 rounded mx-auto d-block'
                        src='./dp3.png'
                        alt="Avatar" />
                </div>
                <div className="tagline py-md-1 px-md-0 pt-3 p-3 mt-md-2 text-center text-white">
                    <p>Hi, my name is Ram and Welcome to my Digital Space. Dive in to Explore, Learn, and Connect!</p>
                </div>
                {/* Social Icons */}
                <div className="d-flex flex-row justify-content-center">
                    <div className="px-2">
                        <Link to="https://www.linkedin.com/in/ramaswamy-iyappan">
                            <div className="icon-box">
                                <FaLinkedinIn size={18} className='icon'/>
                            </div>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link to="https://www.github.com/ramiyappan">
                            <div className="icon-box">
                                <BsGithub size={18} className='icon'/>
                            </div>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link to="https://leetcode.com/u/ramiyappan/">
                            <div className="icon-box">
                                <SiLeetcode size={18} className='icon'/>
                            </div>
                        </Link>
                    </div>
                    <div className="px-2">
                        <Link to="https://www.youtube.com/pianistram">
                            <div className="icon-box">
                                <FaYoutube size={18} className='icon'/>
                            </div>
                        </Link>
                    </div>
                </div>
                <hr className='mt-4 mb-3'/>
            </div>
            
            {/* Tabs Section */}
            <ul 
                id="sidebarCollapse" 
                className={`navbar-nav flex-column my-md-0 ms-md-4 mx-1 mb-4 mt-0 collapse collapse-vertical ${
                    window.innerWidth>768 ? 'show' : ''}
                `}
            >
                <li className="nav-item fw-bold text-white">
                    <NavLink to="/" className="nav-link px-2" activeclassname="active">
                        <IoPerson size={18} className='me-2'/> About Me
                    </NavLink>
                </li>
                <li className="nav-item fw-bold text-white">
                    <NavLink to="/portfolio" className="nav-link px-2" activeclassname="active">
                        <FaLaptopCode size={18} className='me-2'/> Portfolio
                    </NavLink>
                </li>
                <li className="nav-item fw-bold text-white">
                    <NavLink to="/resume" className="nav-link px-2" activeclassname="active">
                        <FaFileLines size={18} className='me-2'/> Resume
                    </NavLink>
                </li>
                <li className="nav-item fw-bold text-white">
                    <NavLink to="/contact" className="nav-link px-2" activeclassname="active">
                        <FaEnvelopeOpenText size={18} className='me-2'/> Contact
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className={`d-md-none ${isSidebarOpen ? '' : 'add-div'}`}></div>
        </>
    )
}


export default SideBar