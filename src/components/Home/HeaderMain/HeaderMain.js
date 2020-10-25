import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div className="container">
            <div style={{ height: '600px' }} className="row  d-flex align-items-center">
                <div className="col-12 col-md-4 ">
                    <h1>Your New Smile <br /> Starts Here</h1>
                    <p className="lead text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique delectus aperiam, sunt nostrum hic consectetur.</p>
                    <Link to="/appointment"><button className="btn btn-primary">Get Appointment</button></Link>
                </div>
                <div className="col-12 col-md-7 ml-auto">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;