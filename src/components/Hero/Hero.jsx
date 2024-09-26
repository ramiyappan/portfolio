import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaFileLines } from 'react-icons/fa6'

const AboutMe = () => {
    
    return (
        // {/* Profile Section */}
        <section className="p-3 p-lg-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col me-4">
                        {/* Intro Summary */}
                        <div className="mb-2">
                            <h1 className='fw-bold'>Ramaswamy Iyappan</h1>
                        </div>
                        <p className="lead greytext mb-3">Data Scientist</p>
                        <hr />
                        <div className="row mb-2">
                            <div className="col-12">
                                <p className='greytext'>
                                    Welcome to my digital hub! As an experienced Data Scientist and a recent Computer Science graduate, 
                                    I specialize in Data Science, Data Analysis, and ETL pipelines. 
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
    )
}

export default AboutMe