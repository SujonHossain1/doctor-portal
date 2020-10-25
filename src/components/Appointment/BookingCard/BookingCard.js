import React from 'react';


const BookingCard = ({ booking }) => {
    const { subject, visitingHour, totalSpace } = booking;
    return (
        <>
            <div className="col-11 col-md-4 mx-auto">
                <div className="shadow-sm text-center py-5 px-3 rounded">
                    <h5 className="text-primary"> {subject} </h5>
                    <h6> {visitingHour} </h6>
                    <small className="text-secondary text-uppercase d-block"> {totalSpace} Available space</small>
                    <button

                        type="button"
                        className="btn btn-primary mt-3"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        Book Appointment
                </button>
                </div>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button className="btn btn-primary close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h1>Modal Data</h1>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingCard;