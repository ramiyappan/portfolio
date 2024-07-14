import React from 'react'
import './Blog.css'
import './Blogs.json'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
    return (
        <>
            {/* Header section */}
            <section className="cta-section bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">A Blog about Software Development and Life</h2>
                    <div className="intro">Welcome to my blog. Subsribe and get my latest blog post in your inbox</div>
                    <div className="single-form-max-width pt-3 mx-auto">
                        <form action="" className="signup-form row g-2 g-lg-2 align-items-center">
                            <div className="col-12 col-md-9">
                                <label for="semail" className="sr-only">Your email</label>
                                <input 
                                    type="email" 
                                    id="semail" 
                                    name="semail1" 
                                    className="form-control me-md-1 semail" 
                                    placeholder='Enter email' 
                                />
                            </div>
                            <div className="col-12 col-md-2">
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blog cards */}
            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="row">

                        {/* Card */}
                        <div className="col-md-4 mb-3">
                            <div className="card blog-post-card">
                                <img src="" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="" className="theme-link">data.title</a>
                                    </h5>
                                    <p className="card-text"></p>
                                    <p className="mb-0">
                                        <a href="" className="text-link">Read more</a>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Published n days ago</small>
                                </div>
                            </div>
                        </div>

                    </div>

                    <nav className="blog-nav nav nav-justified my-5">
                        <Link className="nav-link-prev nav-item nav-link d-none rounded-left">
                            Previous
                            <FaLongArrowAltLeft className='svg-inline arrow-prev' />
                        </Link>
                        <Link className="nav-link-next nav-item nav-link rounded">
                            Next
                            <FaLongArrowAltRight className='svg-inline arrow-next' />
                        </Link>
                    </nav>

                </div>
            </section>
        </>
    )
}

export default Blog