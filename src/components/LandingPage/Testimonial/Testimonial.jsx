import React from 'react';
import "./Testimonial.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CgQuote } from "react-icons/cg";

const Testimonial = () => {
    return (
        <div>
            {/* Testimonial Area   */}
            <section className="testimonial">
                <div className="testimonial-wrapper">
                    <div className="testimonial-text">
                        <h2>WHAT THEY ARE TALKING ABOUT?</h2>
                        <p>Trusted by more than 4,200 customers</p>
                        <div className="left-right-arrow">
                            <div><FaArrowLeft /></div>
                            <div><FaArrowRight /></div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor</p>
                        <div className="card-bottom">
                            <div className="user">
                                <h5>TODD HIGGINS</h5>
                                <p>CUSTOMER</p>
                            </div>

                            <div className="testimonial-icon">
                                <CgQuote />
                            </div>
                            
                        </div>
                        <img src="img/testimonial-male.png" className="user-img" alt="" />
                    </div>
                    <div className="testimonial-card">
                        <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor</p>
                        <div className="card-bottom">
                            <div className="user">
                                <h5>TODD HIGGINS</h5>
                                <p>CUSTOMER</p>
                            </div>

                            <div className="testimonial-icon">
                                <CgQuote />
                            </div>
                            
                        </div>
                        <img src="img/testimonials-female.png" className="user-img" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;