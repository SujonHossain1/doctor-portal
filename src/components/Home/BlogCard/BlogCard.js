import React from 'react';

const BlogCard = ({ blog }) => {
    const { name, img, title, date, description } = blog;
    return (
        <div className="col-md-4">
            <div className="blog-card shadow-sm p-3">
                <div className="d-flex justify-content-evenly mt-4 w-75">
                    <img className="img-fluid " style={{ width: '55px', height: '55px' }} src={img} alt="" />
                    <div className="">
                        <h6 className="text-primary text-uppercase"> {name} </h6>
                        <p> {date} </p>
                    </div>
                </div>
                <h5 className="my-3"> {title} </h5>
                <p className="text-secondary lead"> {description} </p>
            </div>
        </div>
    );
};

export default BlogCard;