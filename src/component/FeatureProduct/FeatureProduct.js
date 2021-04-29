import React from 'react';
import './FeatureProduct.css';
import product1 from '../../img/featured/feature-1.jpg';
import product2 from '../../img/featured/feature-2.jpg';
import product3 from '../../img/featured/feature-3.jpg';
import product4 from '../../img/featured/feature-4.jpg';
import { FaHeart, FaCartPlus, FaRetweet } from "react-icons/fa";

const FeatureProduct = () => {
    return (
        <div className="container">
            <div style={{ margin: 'auto', marginBottom: '30px' }}>
                <div className="title">
                    <h1>Feature Product</h1>
                </div>

                <div className="feature-menu d-flex">
                    <p>All</p>
                    <p>Oranges</p>
                    <p>Fresh Meat</p>
                    <p>Vegetables</p>
                    <p>FastFood</p>
                </div>

                <hr />


                <div className="latest-prdouct__slider__item col-lg-12 col-md-12 col-sm-12">
                    <div>
                        <div className="row d-flex" style={{justifyContent:'center'}}>
                            
                    <div class="col-lg-3 col-md-6 col-sm-12 product-card" >
                        <div class="latest-product__item__pic" style={{ height: '250px', backgroundImage: `url(${product1})` }}>
                            <p><FaHeart></FaHeart></p>
                            <p><FaRetweet></FaRetweet></p>
                            <p><FaCartPlus></FaCartPlus></p>
                        </div>
                        <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 product-card">
                        <div class="latest-product__item__pic" style={{ height: '250px', backgroundImage: `url(${product2})` }}>
                            <p><FaHeart></FaHeart></p>
                            <p><FaRetweet></FaRetweet></p>
                            <p><FaCartPlus></FaCartPlus></p>
                        </div>
                        <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 product-card">
                        <div class="latest-product__item__pic" style={{ height: '250px', backgroundImage: `url(${product2})` }}>
                            <p><FaHeart></FaHeart></p>
                            <p><FaRetweet></FaRetweet></p>
                            <p><FaCartPlus></FaCartPlus></p>
                        </div>
                        <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6 col-sm-12 product-card">
                        <div class="latest-product__item__pic" style={{ height: '250px', backgroundImage: `url(${product3})` }}>
                            <p><FaHeart></FaHeart></p>
                            <p><FaRetweet></FaRetweet></p>
                            <p><FaCartPlus></FaCartPlus></p>
                        </div>
                        <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                        </div>
                    </div>
                   
                        </div>
                    </div>
                </div>
                

                  
                   
            </div>
        </div>
    );
};

export default FeatureProduct;