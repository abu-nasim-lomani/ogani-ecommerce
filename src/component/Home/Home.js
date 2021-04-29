import React from 'react';
import TrendingProduct from "../../component/TrendingProduct/TrendingProduct";
import Blog from '../Blog/Blog';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import Footer from '../Footer/Footer';
import HeaderInfo from '../Header/HeaderInfo';
import MainSection from '../MainSection/MainSection';

const Home = () => {
    return (
        <div>
            <HeaderInfo/>
            <MainSection/>
            <TrendingProduct/>
            <FeatureProduct/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;