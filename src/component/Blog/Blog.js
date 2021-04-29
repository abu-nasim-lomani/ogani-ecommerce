import React from 'react';
import './Blog.css';
import blog1 from '../../img/blog/blog-1.jpg';
import blog2 from '../../img/blog/blog-2.jpg';
import blog3 from '../../img/blog/blog-3.jpg';
import { FaCalendarAlt, FaComment } from "react-icons/fa";
const Blog = () => {
    return (
        <div className="container">
            <div>
                <div className="blog-title">
                    <h1>From The Blog</h1>
                </div>

                <div className="blog d-flex col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-image">
                                    <img src={blog1} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="date-comment d-flex">
                                    <p><FaCalendarAlt /> May 24, 2021</p>
                                    <p><FaComment></FaComment></p>
                                </div>
                                <div className="heading">
                                    <p>Cooking tips make cooking simple</p>
                                </div>
                                <div className="description">
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-image">
                                    <img src={blog1} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="date-comment d-flex">
                                    <p><FaCalendarAlt /> May 24, 2021</p>
                                    <p><FaComment></FaComment></p>
                                </div>
                                <div className="heading">
                                    <p>Cooking tips make cooking simple</p>
                                </div>
                                <div className="description">
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-card">
                                <div className="blog-image">
                                    <img src={blog1} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="date-comment d-flex">
                                    <p><FaCalendarAlt /> May 24, 2021</p>
                                    <p><FaComment></FaComment></p>
                                </div>
                                <div className="heading">
                                    <p>Cooking tips make cooking simple</p>
                                </div>
                                <div className="description">
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Blog;