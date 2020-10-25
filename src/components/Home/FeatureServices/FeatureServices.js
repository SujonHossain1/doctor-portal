import React from 'react';
import testMask from '../../../images/Test-mask.png';
import './FeatureServices.css';

const FeatureServices = () => {
    return (
        <section className="feature-services my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={testMask} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <div className="mt-5">
                            <h1 className="my-4"> Expectional Dental Care, on your Term</h1>
                            <p className="lead text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                            <button className="btn btn-primary mt-3">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureServices;