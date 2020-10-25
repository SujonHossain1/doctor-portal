import React from 'react';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';

const ServicesData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam eveniet rem commodi, dicta architecto.'
    },
    {
        title: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam eveniet rem commodi, dicta architecto.'
    },
    {
        title: 'Teth Whiting',
        img: tooth,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam eveniet rem commodi, dicta architecto.'
    }
]

const Services = () => {
    return (
        <section className="home-services-container">
            <div className="container">
                <div className="text-center pt-3 pb-5">
                    <h6 className=" text-uppercase text-primary">Our Services</h6>
                    <h2 className="font-weight-bolder">Services We Provide</h2>
                </div>
                <div className="row">
                    {
                        ServicesData.map(service =>
                            <div className="col-11 col-md-4 mx-auto text-center pt-3">
                                <div className="home-services-item text-center">
                                    <figure className="text-center">
                                        <img style={{ width: '50px', height: '50px' }} src={service.img} alt="" />
                                    </figure>
                                    <h5>{service.title} </h5>
                                    <p className="lead text-secondary pt-2"> {service.description} </p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;