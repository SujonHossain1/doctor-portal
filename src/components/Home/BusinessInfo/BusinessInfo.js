import React from 'react';
import './BusinessInfo.css';
import clock from '../../../images/clock.png';
import mapMaker from '../../../images/pin.png';
import call from '../../../images/call.png';

const BusinessInfoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: clock,
        background_color: '#1cc7c1'
    },
    {
        title: 'Visit our location',
        description: 'chicago, NY 10012, USA',
        icon: mapMaker,
        background_color: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15752982353',
        icon: call,
        background_color: '#1cc7c1'
    }

]

const Info = () => {

    return (
        <section className="container mb-5 pb-5">
            <div className="row g-3">
                {
                    BusinessInfoData.map(info =>
                        <div className="col-11 col-md-4 mx-auto">
                            <div className="info" style={{ backgroundColor: info.background_color }}>
                                <img src={info.icon} alt="" />
                                <div className="mt-1">
                                    <h6>{info.title}</h6>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Info;