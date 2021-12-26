import React from 'react';
import "./CountingData.css"

const CountingData = () => {
    return (
        <>

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
            {/* CountingData Section  */}
            <section className="counting-data">
                <div className="counting-data-wrapper">
                    <div className="single-data-box">
                        <div className="data-icon">
                            <img src="img/brainstorming.png" alt="" />
                        </div>
                        <h2>420</h2>
                        <p>CONSULTING SOLUTIONS</p>
                    </div>
                    <div className="single-data-box">
                        <div className="data-icon">
                            <img src="img/brainstorming.png" alt="" />
                        </div>
                        <h2>420</h2>
                        <p>CONSULTING SOLUTIONS</p>
                    </div>
                    <div className="single-data-box">
                        <div className="data-icon">
                            <img src="img/brainstorming.png" alt="" />
                        </div>
                        <h2>420</h2>
                        <p>CONSULTING SOLUTIONS</p>
                    </div>
                    <div className="single-data-box">
                        <div className="data-icon">
                            <img src="img/brainstorming.png" alt="" />
                        </div>
                        <h2>420</h2>
                        <p>CONSULTING SOLUTIONS</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountingData;