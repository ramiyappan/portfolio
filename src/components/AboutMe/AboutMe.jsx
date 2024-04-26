import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="col-sm-10 p-0">

            {/* Profile Section */}
            <section className="p-3 p-lg-5 bg-light profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mb-2">
                                <h1 className='fw-bold'>Ramaswamy Iyappan</h1>
                            </div>
                            <p className="lead greytext mb-3">Data Analyst & Full-Stack Developer</p>
                            <hr />
                            <div className="row">
                                <div className="col-12">
                                    <p className='greytext'>
                                        Welcome to my digital hub! As a recent Computer Science graduate from George Mason University, 
                                        Virginia, I specialize in Data Analysis, Machine Learning, and Full-Stack development. 
                                        Curious how I can elevate your project? Explore my portfolio and resume!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 p-5 text-center">
                            <img 
                            className="image-fluid mb-3 w-50"
                            src="./dp3.png" alt="avatar" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3 p-lg-5">
                <div className='container'>
                    <h2 className='section-title fw-bold mb-3'>
                        What I do
                    </h2>
                    <div className="mb-5">
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe