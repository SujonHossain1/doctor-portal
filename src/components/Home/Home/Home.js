import React from 'react';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Services/>
            <FeatureServices/>
        </div>
    );
};

export default Home;