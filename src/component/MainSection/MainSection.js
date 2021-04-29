import React from 'react';
import Categories from './Categories/Categories';
import SliderSection from './SliderSection/SliderSection';
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="container">
            <Categories></Categories> 
            <SliderSection></SliderSection>
        </div>
    );
};

export default MainSection;