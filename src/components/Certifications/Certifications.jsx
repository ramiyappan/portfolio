import React from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';
import certifications from './certs.json';

const Certifications = () => {

    const isLargeScreen = window.innerWidth >= 992;
    const extendedCertifications = [...certifications];

    if (isLargeScreen && certifications.length > 2) {
        extendedCertifications.splice(3, 0, certifications[2]);
    }

    // Function to group certifications into sets of items per slide
    const groupCertifications = (certs, itemsPerSlide) => {
        const grouped = [];
        for (let i = 0; i < certs.length; i += itemsPerSlide) {
            grouped.push(certs.slice(i, i + itemsPerSlide));
        }
        return grouped;
    };

    // Check the screen size and adjust the number of items per slide
    const itemsPerSlide = isLargeScreen ? 3 : 1;
    const groupedCertifications = groupCertifications(extendedCertifications, itemsPerSlide);

    return (
        <section className="certs p-3 p-lg-5">
            <div className="container">
                <h2 className="section-title fw-bold mb-5">Certifications</h2>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                    {/* slide indicator */}
                    <div className="carousel-indicators">
                        {groupedCertifications.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Inner content */}
                    <div className="carousel-inner">
                        {groupedCertifications.map((group, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="row">
                                    {group.map((cert, idx) => (
                                        <div className={`col-md-${isLargeScreen ? '4' : '12'} mb-5`} key={idx}>
                                            <div className="card cert-card">
                                                <img
                                                    src={cert.img}
                                                    alt="cert"
                                                    className="card-img-top mx-auto"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <Link to={cert.link} className="theme-link">{cert.title}</Link>
                                                    </h5>
                                                    <p className="card-text">{cert.desc}</p>
                                                    <p className="mb-0"></p>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Valid until {cert.expiry}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;