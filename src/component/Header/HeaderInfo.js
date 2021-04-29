import React from 'react';
import './HeaderInfo.css';
import logo from '../../img/logo.png'
import { FaMastodon, FaFacebookSquare, FaLinkedin, FaRedditSquare, FaGithubSquare,FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";

const HeaderInfo = () => {
    return (
        <div>
            <div className="header-top ">
            <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-12 header-info-left">
                    <p><FaMastodon fontSize="20"></FaMastodon></p>
                    <p><small>hello@colorlib.com</small></p>
                    <p style={{marginLeft:'20px'}}>  |</p>
                    <p style={{marginLeft:'20px'}}>  <small>Free Shipping for all Order of $99</small></p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 header-info-right">
                    <div className="header-info-right-icon">
                        <p><FaFacebookSquare></FaFacebookSquare></p>
                        <p><FaLinkedin></FaLinkedin></p>
                        <p><FaRedditSquare></FaRedditSquare></p>
                        <p><FaGithubSquare></FaGithubSquare></p>
                        <p>|</p>
                        <p><FaUser fontSize="15"></FaUser><small>Login</small></p>
                    </div>
                </div> 
            </div>
        </div>

        <div className="headerMain container">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="header-link" style={{display:'flex', justifyContent: 'space-evenly'}}>
                <p>HOME</p>
                <p>SHOP</p>
                <p>PAGES</p>
                <p>BLOG</p>
                <p>CONTACT</p>
            </div>
            <div className='header-icon' style={{display:'flex', alignItems: 'center', fontSize:'16px'}}>
                <p><FaHeart></FaHeart></p>
                <p><FaShoppingCart></FaShoppingCart></p>
                <p><small>|</small></p>
                <p>item:$120</p>
            </div>
        </div>
        </div>
    );
};

export default HeaderInfo;