import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png';
import {FaHeart } from "react-icons/fa";
import image from '../../img/payment-item.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="main-footer col-lg-12 col-md-12 col-sm-12 ">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="address text-center">
                            <img src={logo} alt="" />
                            <p>Address: 60-49 Road 11378 New York</p>
                            <p>Phone: +65 11.188.888</p>
                            <p>Email: hello@colorlib.com</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="useful-link text-center" >
                            <h3>Useful Link</h3>
                            <div className="d-flex" style={{ justifyContent: 'space-between', textAlign: 'left' }}>
                                <div><p>About Us</p>
                                    <p>About Our SHOP</p>
                                    <p>Secure SHOP</p>
                                </div>
                                <div><p>Delivery Information</p>
                                    <p>Privacy Policy</p>
                                    <p>Our sitemap</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="join-newsletter text-center">
                            <h3>Join Our Newsletter Now</h3>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div style={{ border: '1px solid black', display: 'flex', justifyContent: 'space-between' }}><input type="text" placeholder="Enter Email" /><input type="button" className="btn btn-sm btn-secondary" value="Submit" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div>
                    <p>Copyright ©2021 All rights reserved | This template is made with <FaHeart></FaHeart> Developer NASIM</p>
                </div>
                <div>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;