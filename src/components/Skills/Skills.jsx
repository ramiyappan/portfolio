import React from 'react'
import { 
    FaReact, FaAngular, FaDocker,
    FaPython, FaHtml5, FaSnowflake, FaAws, FaBootstrap
} from "react-icons/fa";
import { FaCss3Alt } from 'react-icons/fa6'
import { IoLogoJavascript, IoLogoTableau } from "react-icons/io5";
import { SiMysql, SiKubernetes, SiMicrosoftexcel, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import data from './Skills.json'
import './Skills.css'

const Skills = () => {
    return (
        // What I do
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
                                    {item.icon === 'JS' && (
                                        <>
                                            <FaHtml5 className='svg-inline me-2' color="#DE6E3C" />
                                            <FaCss3Alt className='svg-inline me-2' color="#53A7DC" />
                                            <IoLogoJavascript className='svg-inline' color='#c2ae15' />
                                        </>
                                    )}
                                    {item.icon === 'React' && (
                                        <>
                                            <FaAngular className='svg-inline me-2' color="#CA3327" />
                                            <FaReact className='svg-inline' color="#62D4FA" />
                                        </>
                                    )}
                                    {item.icon === 'AWS' && (
                                        <FaAws className='svg-inline' color="#ff9900" />
                                    )}
                                    {item.icon === 'BOOT' && (
                                        <>
                                            <FaBootstrap className='svg-inline me-2' color='#7d0cf7' />
                                            <SiTailwindcss className='svg-inline' color='#35b0b4' />
                                        </>
                                    )}
                                    {item.icon === 'Python' && (
                                        <FaPython className='svg-inline' color="#456E9C" />
                                    )}
                                    {item.icon === 'SQL' && (
                                        <>
                                            <SiMysql className='svg-inline me-2' color="#4479A1" />
                                            <BiLogoPostgresql className='svg-inline me-2' color="#316192" />
                                            <FaSnowflake className='svg-inline' color="#29b5e8" />
                                        </>
                                    )}
                                    {item.icon === 'KUBE' && (
                                        <>
                                            <SiKubernetes className='svg-inline me-2' color="#326CE5" />
                                            <FaDocker className='svg-inline' color='#1393da' />
                                        </>
                                    )}
                                    {item.icon === 'Excel' && (
                                        <>
                                            <IoLogoTableau className='svg-inline me-2' color="#295f9a" />
                                            <SiMicrosoftexcel className='svg-inline' color="#187946" />
                                        </>
                                    )}
                                </div>
                                <h3 className="item-title">{item.title}</h3>
                                <div className="item-desc">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills