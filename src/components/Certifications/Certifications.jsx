import React from 'react'
import { Link } from 'react-router-dom';
import './Certifications.css'
import certifications from './certs.json'

const Certifications = () => (
    <section className="certs p-3 p-lg-5">
        <div className="container">
            <h2 className="section-title fw-bold mb-5">Certifications</h2>
            <div className="row">
                {certifications.map((cert, index) => (
                    <div className="col-md-4 mb-5" key={index}>
                        <div className="card cert-card">
                            <img 
                                src={cert.img} 
                                alt="cert"
                                className="card-img-top mx-auto" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={cert.link} className='theme-link'>{cert.title}</Link>
                                </h5>
                                <p className="card-text">{cert.desc}</p>
                                <p className="mb-0"></p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Expires on {cert.expiry}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;