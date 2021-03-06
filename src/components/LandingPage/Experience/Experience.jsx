import React from 'react';
import './Experience.css';
import { FaBitbucket } from "react-icons/fa";
import LogoCarousel from './LogoCarousel/LogoCarousel';

const Experience = () => {
    return (
        <> 
        {/* 2.1 - Real World Experience    */}
            <div className="experience">
                <div className="section-title">
                    <h1>REAL-WORLD EXPERIENCE</h1>
                    <p>The best business consulting firm you can count on!</p>
                </div>

                <div className="section-container">
                    {/* 2.2 - Experience Boxes  */}
                    <div className="experience-boxs">
                        <div className="single-exp-box">
                            <h4>WEALTH MANAGEMENT</h4>
                            <div className="box-bottom-content">
                                <a href="#"> <span>RE</span>AD MORE  </a>
                                <FaBitbucket />
                            </div>                        
                        
                        </div>
                        <div className="single-exp-box">
                            <h4>WEALTH MANAGEMENT</h4>
                            <div className="box-bottom-content">
                                <a href="#"> <span>RE</span>AD MORE  </a>
                                <FaBitbucket />
                            </div>                        
                        
                        </div>
                        <div className="single-exp-box">
                            <h4>WEALTH MANAGEMENT</h4>
                            <div className="box-bottom-content">
                                <a href="#"> <span>RE</span>AD MORE  </a>
                                <FaBitbucket />
                            </div>                        
                        
                        </div>
                    </div>


                    {/* 2.3 - Partners Carousel  */}

                    <LogoCarousel></LogoCarousel>

                </div>
            </div>
        </>
    );
};

export default Experience;