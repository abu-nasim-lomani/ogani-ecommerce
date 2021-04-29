import React from 'react';
import './Search.css';
import { FaHeadphones } from "react-icons/fa";


 
const Search = () => {
    return (
        <div className="Search-component">
            <div className="search-box">
                <div className="search-title">
                    <p>All Categories |</p>
                </div>
                <div className="search-input">
                    <input type="text" className="form-control" placeholder="what do you need ?" />
                </div>
                <input type="submit" className="btn " value="SEARCH" />
            </div>

            <div className="support d-flex ">
                <div className="support-icon">
                    <p><FaHeadphones fontSize="30px" /></p>
                </div>
                <div className="support-address">
                    <div>
                        <div>
                            <span><b>+65 11.1888.888</b></span>
                        </div>
                        <div>
                            <span>support 24/7 time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;