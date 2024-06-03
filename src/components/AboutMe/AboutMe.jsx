import React from 'react'
import './AboutMe.css'
import data from './Skills.json'
import { Link } from 'react-router-dom'
import { 
    FaArrowAltCircleRight, FaReact, FaAngular, FaDocker,
    FaPython, FaHtml5, FaSnowflake, FaAws, FaBootstrap
} from "react-icons/fa";
import { FaFileLines, FaCss3Alt } from 'react-icons/fa6'
import { IoLogoJavascript, IoLogoTableau } from "react-icons/io5";
import { SiMysql, SiKubernetes, SiMicrosoftexcel, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import ProjectCard from '../ProjectCard/ProjectCard';
import Certifications from '../Certifications/Certifications';

const AboutMe = () => {

    const iconMapping = {
        JS: [
            <FaHtml5 className='svg-inline me-2' color="#DE6E3C" />,
            <FaCss3Alt className='svg-inline me-2' color="#53A7DC" />,
            <IoLogoJavascript className='svg-inline' color='#c2ae15' />
        ],
        React: [
            <FaAngular className='svg-inline me-2' color="#CA3327" />,
            <FaReact className='svg-inline' color="#62D4FA" />
        ],
        AWS: [
            <FaAws className='svg-inline' color="#ff9900" />
        ],
        BOOT: [
            <FaBootstrap className='svg-inline me-2' color='#7d0cf7' />,
            <SiTailwindcss className='svg-inline' color='#35b0b4' />
        ],
        Python: [<FaPython className='svg-inline' color="#456E9C" />],
        SQL: [
            <SiMysql className='svg-inline me-2' color="#4479A1" />,
            <BiLogoPostgresql className='svg-inline me-2' color="#316192" />,
            <FaSnowflake className='svg-inline' color="#29b5e8" />
        ],
        KUBE: [
            <SiKubernetes className='svg-inline me-2' color="#326CE5" />,
            <FaDocker className='svg-inline' color='#1393da' />
        ],
        Excel: [
            <IoLogoTableau className='svg-inline me-2' color="#295f9a" />,
            <SiMicrosoftexcel className='svg-inline' color="#187946" />
        ]
    };
    
    return (
        // removed col-sm-10
        <> 

            {/* Profile Section */}
            <section className="p-3 p-lg-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col me-4">
                            {/* Intro Summary */}
                            <div className="mb-2">
                                <h1 className='fw-bold'>Ramaswamy Iyappan</h1>
                            </div>
                            <p className="lead greytext mb-3">Data Analyst & Full-Stack Developer</p>
                            <hr />
                            <div className="row mb-2">
                                <div className="col-12">
                                    <p className='greytext'>
                                        Welcome to my digital hub! As a recent Computer Science graduate from George Mason University, 
                                        Virginia, I specialize in Data Analysis, Machine Learning, and Full-Stack development. 
                                        Curious how I can elevate your project? Explore my portfolio and resume!
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mb-2">
                                <Link to="/portfolio" className="btn btn-primary me-2 mb-3">
                                    <FaArrowAltCircleRight className='svg-inline me-2'/>
                                    <span className="d-none d-md-inline">
                                        View
                                    </span>{' '}
                                    Portfolio
                                </Link>
                                <Link to="/resume" className="btn btn-secondary mb-3">
                                    <FaFileLines className='svg-inline me-2'/>
                                    <span className="d-none d-md-inline">
                                        View
                                    </span>{' '}
                                    Resume
                                </Link>
                            </div>
                        </div>

                        {/* Picture */}
                        <div className="intro-picture col-md-5 p-2 text-center">
                            <img 
                            className="image-fluid w-75"
                            src="./guitar.jpg" alt="avatar" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What I do */}
            <section className="p-3 p-lg-5">
                <div className='container'>
                    <h2 className='section-title fw-bold mb-3'>
                        What I do
                    </h2>
                    <div className="mb-5">
                        I specialize in leveraging data to drive insights and solutions, 
                        whether it's through crafting machine learning models for predictive analytics 
                        or building intuitive full-stack applications. My passion lies in transforming 
                        complex data into actionable strategies that enhance decision-making and drive business growth.
                    </div>
                    <div className="row">
                    {data.map((item, i) => (
                        <div className="item col-6 col-lg-3" key={i}>
                        <div className="item-inner">
                            <div className="item-icon">
                            {iconMapping[item.icon].map((icon, idx) => (
                                <span key={idx}>{icon}</span>
                            ))}
                            </div>
                            <h3 className="item-title">{item.title}</h3>
                            <div className="item-desc">{item.description}</div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            <div className="container">
                <hr />
            </div>

            <Certifications />

            <div className="container">
                <hr />
            </div>
            
            {/* Featured Projects */}
            <section className="featured-section p-3 p-lg-5">
                <div className="container">
                    <h2 className="section-title fw-bold mb-5">
                        Featured Projects
                    </h2>
                    <ProjectCard activeFilter={'*'} isHome={true}/>
                    <div className="text-center py-3">
                        <Link to="/portfolio" className="btn btn-primary">
                            <FaArrowAltCircleRight className='svg-inline me-2'/>
                            More Projects
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutMe