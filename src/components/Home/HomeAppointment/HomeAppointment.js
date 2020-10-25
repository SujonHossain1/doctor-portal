import React from 'react';
import './HomeAppointment.css';
import doctor from "../../../images/doctor's.png";

const HomeAppointment = () => {
    return (
        <section className="home-appointment py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 d-none d-md-block">
                     <img className="img-fluid home-appointment-img" src={doctor} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <div className="text-white">
                            <h5 className="text-primary text-uppercase mb-3">Appointment</h5>
                            <h1>Make an Appointment Today</h1>
                            <p className="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;