import React from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import { FaFilePdf, FaGlobe, FaLinkedin, FaLocationDot, FaSquarePhone } from "react-icons/fa6";
import { FaEnvelopeSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import data from './Projectinfo.json'

const Resume = () => {

    const handleDownloadPDF = () => {
        const pdfFilePath = './Data_Analyst_Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'Ramaswamy_Iyappan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Header Section */}
            <section className="cta-section bg-light py-5">
                <div className="container text-center single-col-max-width">
                    <h2 className="heading mb-3">
                        Online Resume
                    </h2>
                    <Link className="btn btn-primary" onClick={handleDownloadPDF}>
                        <FaFilePdf className='svg-inline me-2'/>
                        Download PDF Version
                    </Link>
                </div>
            </section>

            {/* Resume Section */}
            <div className="container resume-container px-3 px-lg-5">
                <article className="resume-wrapper mx-auto bg-light p-5 mb-5 my-5 shadow-lg">

                    {/* Resume Header */}
                    <div className="resume-header">
                        <div className="row align-items-center">
                            <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                                <h2 className="resume-name mb-0 text-uppercase">Ramaswamy Iyappan</h2>
                                <div className="resume-tagline mb-3 mb-md-0">Data Analyst & Full-Stack Developer</div>
                            </div>
                            <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2">
                                        <FaSquarePhone className='fa-fw fa-lg me-2'/>
                                        <a href="tel:5714783766" className="resume-link">+1 (571) 478-3766</a>
                                    </li>
                                    <li className="mb-2">
                                        <FaEnvelopeSquare className='fa-fw fa-lg me-2'/>
                                        <a href="mailto:ramiyappan98@gmail.com" className="resume-link">ramiyappan98@gmail.com</a>
                                    </li>
                                    <li className="mb-2">
                                        <FaGlobe className='fa-fw fa-lg me-2'/>
                                        <a href="https://ramiyappan.github.io/portfolio" className="resume-link">ramiyappan.github.io</a>
                                    </li>
                                    <li className="mb-0">
                                        <FaLocationDot className='fa-fw fa-lg me-2'/>
                                        Virginia
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* Resume Summary */}
                    <div className="resume-intro py-3">
                        <div className="row align-items center">
                            <div className="col-12 col-md-3 col-xl-2 text-center">
                                <img src="./dp2.png" alt="dp" 
                                    className="resume-profile-image mb-3 mb-md-0 me-md-5 ms-md-0 rounded mx-auto" 
                                />
                            </div>
                            <div className="col text-start">
                                <p className="mb-0">
                                    Dynamic and accomplished Computer Science professional with a Master's degree from George Mason University 
                                    and extensive experience in data science, machine learning, and software development. Proficient in 
                                    languages & frameworks including Python, SQL, PyTorch, TensorFlow, and Scikit-Learn. 
                                    Skilled in data analysis, deep neural networks, and cloud computing, with a proven track record of delivering 
                                    impactful projects in fraud detection, classification, and predictive analytics. Possess strong leadership 
                                    abilities demonstrated through successful teaching experiences and recognition in both academic and 
                                    professional settings.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    {/* Resume Body */}
                    <div className="resume-body">
                        <div className="row">

                            {/* Left side */}
                            <div className="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">

                                {/* Work Experience */}
                                <section className="work-section py-3">
                                    <h3 className="text-uppercase resume-section-heading mb-4">
                                        Work Experiences
                                    </h3>
                                    <div className="item mb-3">
                                        <div className="item-heading row align-items-center mb-2">
                                            <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                                Graduate Teaching Assistant
                                            </h4>
                                            <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                                                GMU | 2022 - 2023
                                            </div>
                                        </div>
                                        <div className="item-content">
                                            <p>
                                                Instructed & facilitated the Principles of Computing course, 
                                                conducted weekly office hours, assessed assignments, and provided 
                                                personalized support to over 60 students for enhanced performance.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Projects */}
                                <section className="project-section py-3">
                                    <h3 className="text-uppercase resume-section-heading mb-4">
                                        Projects
                                    </h3>
                                    {data.map((item, i) => (
                                        <div className="item mb-3" key={i}>
                                            <div className="item-heading row align-items center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                                                    {item.title}
                                                </h4>
                                                <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                                                    {item.date}
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <p>{item.description}</p>
                                                <ul className="resume-list">
                                                    {item.points?.map((point, j) => (
                                                        <li key={j}>{point}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        ))
                                    }
                                </section>
                            </div>

                            {/* Right side */}
                            <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                                {/* Skills */}
                                <section className="skills-section py-3">
                                    <h3 className="text-uppercase resume-section-heading mb-4">
                                        Skills
                                    </h3>
                                    <div className="item">
                                        <h4 className="item-title">Technical</h4>
                                        <ul className="list-unstyled resume-skills-list">
                                            <li className="mb-2">JavaScript/Angular/React</li>
                                            <li className="mb-2">Node.js/Docker/Postman</li>
                                            <li className="mb-2">Python/PyTorch/TensorFlow</li>
                                            <li className="mb-2">Snowflake/PostgreSQL/MySQL</li>
                                            <li className="mb-2">Tableau/Excel</li>
                                            <li className="mb-2">EDA/Data Preprocessing</li>
                                            <li>AWS/Kubernetes</li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <h4 className="item-title">Professional</h4>
                                        <ul className="list-unstyled resume-skills-list">
                                            <li className="mb-2">Effective Communication</li>
                                            <li className="mb-2">Lead by Example</li>
                                            <li className="mb-2">Team Player</li>
                                            <li>Time Management</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Education */}
                                <section className="education-section py-3">
                                    <h3 className="text-uppercase resume-section-heading mb-4">
                                        Education
                                    </h3>
                                    <ul className="list-unstyled resume-education-list">
                                        <li className="mb-3">
                                            <div className="resume-degree fw-bold">MS Computer Science</div>
                                            <div className="resume-degree-org text-muted">George Mason University</div>
                                            <div className="resume-degree-time text-muted">2022 - 2023</div>
                                        </li>
                                        <li>
                                            <div className="resume-degree fw-bold">BE Computer Science</div>
                                            <div className="resume-degree-org text-muted">Vels University</div>
                                            <div className="resume-degree-time text-muted">2016 - 2020</div>
                                        </li>
                                    </ul>
                                </section>

                                {/* Awards */}
                                <section className="education-section py-3">
                                    <h3 className="text-uppercase resume-section-heading mb-4">
                                        Awards
                                    </h3>
                                    <ul className="list-unstyled resume-awards-list">
                                        <li className="mb-3">
                                            <div className="fw-bold">Employee of the Year</div>
                                            <div className="text-muted">Mason Recreation (2023)</div>
                                        </li>
                                        <li>
                                            <div className="fw-bold">NCC Cadet</div>
                                            <div className="text-muted">India NCC (2013)</div>
                                        </li>
                                    </ul>
                                </section>
                            </aside>
                        </div>
                    </div>

                    <hr/>

                    {/* Footer */}
                    <div className="resume-footer text-center">
                        <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                            <li className="list-inline-item mb-lg-0 me-3">
                                <Link className="resume-link" to="https://www.github.com/ramiyappan">
                                    <FaGithubSquare className='svg-inline fa-2x me-2'/>
                                    <span className="d-none d-lg-inline-block text-muted">github.com/ramiyappan</span>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-lg-0 me-3">
                                <Link className="resume-link" to="https://www.linkedin.com/in/ramaswamy-iyappan">
                                    <FaLinkedin className='svg-inline fa-2x me-2'/>
                                    <span className="d-none d-lg-inline-block text-muted">linkedin.com/ramiyappan</span>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-lg-0 me-lg-3">
                                <Link className="resume-link" to="https://instagram.com/ram_iyappan">
                                    <FaInstagramSquare className='svg-inline fa-2x me-2'/>
                                    <span className="d-none d-lg-inline-block text-muted">@ram_iyappan</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </article>
            </div>
        </>
    )
}

export default Resume