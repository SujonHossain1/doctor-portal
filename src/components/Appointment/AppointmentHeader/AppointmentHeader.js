import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
  
    return (
        <div className="container">
            <div style={{ height: '600px' }} className="row  d-flex align-items-center">
                <div className="col-12 col-md-4 ">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-12 col-md-7 ml-auto">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;