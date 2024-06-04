import React from 'react'
import Hero from '../components/Hero/Hero'
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import Certifications from '../components/Certifications/Certifications.jsx';
import Skills from '../components/Skills/Skills.jsx';
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from "react-icons/fa";

const AboutPage = () => {
    return (
        <>
            <Hero />
            <Skills />

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

export default AboutPage