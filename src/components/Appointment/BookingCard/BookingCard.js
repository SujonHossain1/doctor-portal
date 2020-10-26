import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const BookingCard = ({ booking, selectedDate }) => {
    const { subject, visitingHour, totalSpace } = booking;

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="col-11 col-md-4 mx-auto">
                <div className="shadow-sm text-center py-5 px-3 rounded">
                    <h5 className="text-primary"> {subject} </h5>
                    <h6> {visitingHour} </h6>
                    <small className="text-secondary text-uppercase d-block"> {totalSpace} Available space</small>
                    <button onClick={openModal} className="btn btn-primary mt-3">Book Appointment </button>
                    <AppointmentForm
                        closeModal={closeModal}
                        modalIsOpen={modalIsOpen}
                        date={selectedDate.toDateString()}
                        subject={subject}
                    />
                </div>
            </div>


        </>
    );
};

export default BookingCard;