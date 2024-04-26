import React, { useState, useEffect } from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn, FaLaptopCode, FaFileLines} from 'react-icons/fa6'
import {FiMenu} from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";
import { FaYoutube, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoPerson } from "react-icons/io5";
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
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`col-sm-2 bg-theme-color d-flex flex-column ${isSidebarOpen ? 'min-vh-100' : ''}`}>
            <nav className="navbar p-3 d-md-none position-absolute start-0">
                <button onClick={toggleSidebar} className="btn btn-sm border-1 border-white">
                    <FiMenu color="white" size={25} />
                </button>
            </nav>

            {/* Special Name Font */}
            <div className="p-1">
                <h2>
                    <button onClick={toggleSidebar} className="no-text-decoration bg-transparent border-0 pt-2 text-white">
                        <div className='sp-font fs-2'>Ramaswamy Iyappan</div>
                    </button>
                </h2>
            </div>

            {/* Profile Section */}
            <div className={`p-2 pt-0 pb-0 collapse collapse-vertical ${isSidebarOpen ? 'show' : ''}`}>
                <div>
                    <img className='profile-image w-75 rounded mx-auto d-block'
                        src='./dp3.png' 
                        alt="Avatar" />
                </div>
                <div className="tagline p-1 pt-3 text-center text-white">
                    <p>Welcome to my Digital Space. Explore, Learn, and Connect!</p>
                </div>
                {/* Social Icons */}
                <div className="d-flex flex-row justify-content-center">
                    <div className="px-2">
                        <div className="icon-with-border bg-white">
                            <Link to="https://www.linkedin.com/in/ramaswamy-iyappan">
                                <FaLinkedinIn size={18} className='icon'/>
                            </Link>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="icon-with-border bg-white">
                            <Link to="https://www.github.com/ramiyappan">
                                <BsGithub size={18} className='icon'/>
                            </Link>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="icon-with-border bg-white">
                            <Link to="">
                                <SiLeetcode size={18} className='icon'/>
                            </Link>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="icon-with-border bg-white">
                            <Link to="">
                                <FaYoutube size={18} className='icon'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            
            <ul className="navbar-nav flex-column mt-1 mb-1">
                <li className="nav-item fw-bold text-white">
                    <Link to="/" className="nav-link px-2">
                        <IoPerson size={18} className='me-2'/> About Me
                    </Link>
                </li>
                <li className="nav-item fw-bold text-white">
                    <Link to="/" className="nav-link px-2">
                        <FaLaptopCode size={18} className='me-2'/> Portfolio
                    </Link>
                </li>
                <li className="nav-item fw-bold text-white">
                    <Link to="/" className="nav-link px-2">
                        <FaFileLines size={18} className='me-2'/> Resume
                    </Link>
                </li>
                <li className="nav-item fw-bold text-white">
                    <Link to="/" className="nav-link px-2">
                        <FaEnvelopeOpenText size={18} className='me-2'/> Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default SideBar