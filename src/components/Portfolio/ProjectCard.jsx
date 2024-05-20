import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import projectcards from './project-cards.json'
import './Portfolio.css'

const ProjectCard = ({ isHome, activeFilter }) => {

    let projectData;

    if (isHome) {
        projectData = projectcards.slice(0, 4);
    }
    else {
        if (activeFilter !== '*') {
            projectData = projectcards.filter(project => project.filter === activeFilter);
        } else {
            projectData = projectcards;
        }
    };

    return (
        <div className={`row ${isHome ? '' : 'project-cards isotope'}`}>
            {projectData.map((project, i) => (
                <div className={`col-md-6 mb-5 ${isHome ? '' : 'isotope-item'}`} key={i}>
                    <div className="card project-card">
                        <div className="row no-gutters">
                            <div className="col-12 col-xl-5 card-img-holder">
                                <img src={project.icon} alt="card" className="rounded-start card-img" />
                            </div>
                            <div className="col-12 col-xl-7">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link className="theme-link">{project.title}</Link>
                                    </h5>
                                    <p className="card-text">{project.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{project.client}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="link-mask">
                            <Link className="link-mask-link"></Link>
                            <div className="link-mask-text">
                                <Link to={`/projects/${project.id}`} className="btn btn-secondary">
                                    <FaEye className='svg-inline me-2'/>
                                    View Case Study
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard