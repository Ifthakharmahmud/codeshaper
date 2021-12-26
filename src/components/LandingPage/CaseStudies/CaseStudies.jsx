import React from 'react';
import './CaseStudies.css'
import image from './../../../img/cases-1-img-1.png'
import automobile from './../../../img/Icon metro-automobile.svg'


const CaseStudies = () => {
    return ( 
        <>
            <div className='studies'>
            {/* 4.1 - Overflow Section */}
                <div className="professional-row">
                    <div className="professional-content">
                        <div className="number">
                            <span>01</span>
                        </div>
                        <div className="text">
                            <h5>GET PROFESSIONAL ADVICE</h5>
                            <span>There are many variations of available but the majority have suffered alteration.</span>
                        </div>
                    </div>
                    <div className="professional-content">
                        <div className="number">
                            <span>02</span>
                        </div>
                        <div className="text">
                            <h5>TRUSTED & PROFESSIONAL</h5>
                            <span>There are many variations of available but the majority have suffered alteration.</span>
                        </div>
                    </div>
                </div>

                {/* 4.2 - Section Title */}

                <div className="section-title">
                    <h1>NEW CASE STUDIES</h1>
                    <p>We help our clients renew their business</p>
                </div>

                {/* 4.3 - Case Studies Images  */}

                <div className="studies-images">

                    <div className="studies-img">
                        <img src={image} alt="" />
                        <div className="shadow"></div>
                        <div className="content">
                            <div className="details">
                                <img src={automobile} alt="" />
                                <p>THOUGHT LEADERSHIP</p>
                                <h3>BUSINESSES GROWTH</h3>
                            </div>
                        </div>
                    </div>
                    <div className="studies-img">
                        <img src={image} alt="" />
                        <div className="shadow"></div>
                        <div className="content">
                            <div className="details">
                                <img src={automobile} alt="" />
                                <p>THOUGHT LEADERSHIP</p>
                                <h3>BUSINESSES GROWTH</h3>
                            </div>
                        </div>
                    </div>
                    <div className="studies-img">
                        <img src={image} alt="" />
                        <div className="shadow"></div>
                        <div className="content">
                            <div className="details">
                                <img src={automobile} alt="" />
                                <p>THOUGHT LEADERSHIP</p>
                                <h3>BUSINESSES GROWTH</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default CaseStudies;