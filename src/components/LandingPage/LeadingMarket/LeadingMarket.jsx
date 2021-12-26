import React from 'react';
import "./LeadingMarket.css";
import { FaPlay } from "react-icons/fa";
import ProgressBar from 'react-animated-progress-bar';
import { FiPhoneCall } from "react-icons/fi";



const LeadingMarket = () => {
    return (
        <>
            {/* 3.1 - Leading Merket Section */}
            <section className="leading-market">
                <div className="section-wrapper">
                    <div className="section-content">
                    
                        <div className="video-section">
                            <div className="video-icon">
                            <FaPlay />
                            </div>
                        </div>
                        
                        <div className="content-section">
                            <h2>WE’RE LEADING IN THE MARKET</h2>

                            <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn. <span> We have 35+ years of experience. We offer marketing and consulting services </span></p>

                            {/* 3.2 - Progress Bar  */}
                            <div className="progress-bar-info">
                            <ProgressBar
                                width="100%"
                                height="15px"
                                rect
                                fontColor="gray"
                                percentage="88"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="#F2F4F8"
                                bgColor="#3C72FC"
                                trackBorderColor="transparent"
                            />
                            <p>CONSULTING</p>
                            <ProgressBar
                                width="100%"
                                height="15px"
                                rect
                                fontColor="gray"
                                percentage="68"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="#F2F4F8"
                                bgColor="#3C72FC"
                                trackBorderColor="transparent"
                            />
                            <p>ADVICES</p>
                            </div>
                            
                            {/* 3.3 - Contact Box  */}
                            <div className="contact-info-box">
                                <div className="phone-icon">
                                    <FiPhoneCall />
                                </div>
                                <div className="contact-info">
                                    <p>Have any question? Give us a call</p>
                                    <p>+92 666 888 0000</p>
                                </div>
                            </div>           
                                                
                            </div>

                           
                    </div>
                </div>
            </section>
        </>
    );
};

export default LeadingMarket;