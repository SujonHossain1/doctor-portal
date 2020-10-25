import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, img, address, description } = testimonial
    return (
        <div className="col-md-4">
            <div className="shadow-sm p-3">
                <p className="text-center lead font"> {description} </p>
                <div className="d-flex justify-content-evenly mt-4">
                    <img className="img-fluid " style={{width: '55px', height: '55px'}} src={img} alt="" />
                    <div className="">
                        <h6 className="text-primary text-uppercase"> {name} </h6>
                        <p> {address} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;