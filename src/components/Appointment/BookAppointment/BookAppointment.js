import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]
const BookAppointment = ({ selectedDate }) => {
    return (
        <div className="container">
            <h2 className="text-center text-primary pt-5 pb-5 mb-3">Available Appointments on {selectedDate.toDateString()}</h2>
            <div className="row g-4">
                {
                    bookingData.map(booking => <BookingCard
                        booking={booking}
                        selectedDate={selectedDate}
                        key={booking.id}
                    />)
                }
            </div>
        </div>
    );
};

export default BookAppointment;