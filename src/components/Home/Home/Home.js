import React from 'react';
import Blog from '../Blog/Blogs';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Services />
            <FeatureServices />
            <HomeAppointment />
            <Testimonial />
            <Blog />
        </div>
    );
};

export default Home;