import React from 'react'
import './Blog.css'

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

            <section className="blog-list px-3 py-5 p-md-5">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-4 mb-3">
                            <div className="card blog-post-card">
                                <img src="" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">data.title</h5>
                                    <p className="card-text"></p>
                                    <p className="mb-0">
                                        <a href="" className="text-link">Read more</a>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Published 2 days ago</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog