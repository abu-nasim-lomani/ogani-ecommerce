import React from 'react';
import banner from '../../../../img/hero/banner.jpg';
import './Slide.css';

const Slide = () => {
    return (
        <div className="col-md-12" style={{ marginLeft: '20px', backgroundColor: 'black', height: '429px', backgroundImage: `url(${banner})` }}>
            <div className="hero__item">
                <div class="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2> Vegetable <br />100% Organic </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" class="primary-btn">SHOP NOW</a>
                </div>
            </div>
        </div>
    );
};

export default Slide;


