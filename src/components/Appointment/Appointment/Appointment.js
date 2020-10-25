import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;