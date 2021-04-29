import React from 'react';
import './Categories.css'

const Categories = () => {
    return (
        <div>
            <div classNameName="hero__categories " style={{border: '1px solid gray'}}>
                <div className="hero__categories__all">
                    <span>All departments</span>
                </div>
                <ul style={{margin:'10px 20px'}}>
                    <p>Fresh Meat</p>
                    <p>Vegetables</p>
                    <p>Fruit & Nut Gifts</p>
                    <p>Fresh Berries</p>
                    <p>Ocean Foods</p>
                    <p>Butter & Eggs</p>
                    <p>Fastfood</p>
                    <p>Fresh Onion</p> 
                    <p>Papayaya & Crisps</p>
                    <p>Oatmeal</p>
                    <p>Fresh Bananas</p>
                </ul>
            </div>
        </div>
    );
};

export default Categories;