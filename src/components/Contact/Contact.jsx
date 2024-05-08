import React from 'react'
import {FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Contact.css'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container text-center single-col-max-width">
                    <h2 className="fw-bold fs-2">Contact</h2>
                    <div className="intro greytext">
                        <p>
                            Interested in hiring me for your project or just want to say hi? 
                            You can fill in the contact form below or send me an email to{' '}
                            <a className="text-link" href="mailto:riyappan@gmu.edu">
                            riyappan@gmu.edu</a>
                        </p>
                        <p>
                            Want to get connected? Follow me on the social channels below.
                        </p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mb-3">
                                <Link to="/contact">
                                    <FaTwitter className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.linkedin.com/in/ramaswamy-iyappan">
                                    <FaLinkedinIn className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.instagram.com/ram_iyappan">
                                    <FaInstagram className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.github.com/ramiyappan">
                                    <BsGithub className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://leetcode.com/u/ramiyappan/">
                                    <SiLeetcode className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                            <li className="list-inline-item mb-3">
                                <Link to="https://www.youtube.com/pianistram">
                                    <FaYoutube className='icon svg-inline fa-fw fa-lg'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact