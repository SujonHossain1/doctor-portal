import React from 'react';
import './Testimonial.css';
import winson from '../../../images/Ellipse-1.png';
import henry from '../../../images/Ellipse-2.png';
import aliza from '../../../images/Ellipse-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const testimonialData = [
    {
        id: 1,
        img: winson,
        name: 'Winson Harry',
        address: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!"
    },
    {
        id: 2,
        img: henry,
        name: 'Henry Gomez',
        address: "Chicago",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!"
    },
    {
        id: 1,
        img: aliza,
        name: 'Aliza Farari',
        address: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!"
    }
]

const Testimonial = () => {
    return (
        <section className="testimonial py-5 mt-5">
            <div className="container">
                <div>
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients Says</h1>
                </div>
                <div className="row g-3 mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialCard
                            testimonial={testimonial}
                            key={testimonial.id}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;