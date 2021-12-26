import React from 'react';
import "./BusinessGrowth.css";
import { FiCheckCircle } from "react-icons/fi";

const BusinessGrowth = () => {
    return (
        <>
        <div>
             

            {/* OverFlow Section  */}

            <div className="overflow-section">
                <div className="overflow-section-wrapper">
                    <div className="single-overflow-section">
                        <h2>BUSINESS GROWTH</h2>
                    </div>
                    <div className="single-overflow-section">
                        <h2>PROPER PLAN</h2>
                    </div>
                    <div className="single-overflow-section">
                        <h2>EXECUTION</h2>
                    </div>
                </div>
            </div>
            
            {/* Business Growth Section  */}
             <section className="business-growth">

            {/* OverFlow Section  End*/}           
            <div className="business-growth-wrapper">
                <div className="business-growth-details">
                    <div className="single-business-growth">
                        <div className="business-growth-1">
                                <div className="business-growth-1-icon">
                                    <FiCheckCircle />
                                </div>
                                <div className="business-growth-1-content">
                                    <h4>HIGHEST SUCCESS RATES</h4>
                                    <p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</p>
                                </div>
                        </div>
                        <div className="business-growth-1">
                                <div className="business-growth-1-icon">
                                    <FiCheckCircle />
                                </div>
                                <div className="business-growth-1-content">
                                    <h4>HIGHEST SUCCESS RATES</h4>
                                    <p>Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</p>
                                </div>
                        </div>
                    </div>  


                    <div className="single-business-growth">
                        <p>
                        There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.
                        </p>

                        
                        <ul>
                            <li> If you are going to use a passage 
                                <ul>
                                <li>Lorem Ipsum you need to be sure</li>
                                </ul>
                            </li>
                            <li>There isn't anything embarrassing</li>
                            <li>Hidden in the middle of text</li>
                        </ul>
                    </div>  


                    <div className="single-business-growth single-business-growth-last-item">
                        
                    </div>  
                </div>
            </div>

            </section>
            </div>
        </>
    );
};

export default BusinessGrowth;