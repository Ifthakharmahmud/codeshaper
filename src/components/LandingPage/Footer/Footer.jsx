import React from 'react';
import "./Footer.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>

            {/* Footer Section */}
            <footer>

                {/* Footer Widgets  */}
                <div className="footer-widgets">
                    <div className="logo-contact">
                        <img src="./logo.png" alt="" />

                        <p className="logo-section-pera">Welcome to our consultancy agency. Lore ipsum simply text amet cing elit simply text amet cing elit.</p>

                        <div className="widget-contect">
                            <p>  <FaPhoneSquareAlt /> +92 666 888 0000 </p>
                            <p> <MdEmail />  needhelp@company.com</p>
                            <p> <FaMapMarkerAlt /> 66 Broklyn Street New York, USA </p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>EXPLORE</h3>
                        <div className="links-sections">
                            <div className="section-1">
                                <ul>
                                    <li>About </li>
                                    <li>Meet our Team</li>
                                    <li>Case studies</li>
                                    <li>Latest News</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="section-2">
                                <ul>
                                    <li>About </li>
                                    <li>Meet our Team</li>
                                    <li>Case studies</li>
                                    <li>Latest News</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="newsletter">
                        <h3>EXPLORE</h3>
                        <form action="#">
                            <p>Subscribe for latest articles and resources</p>
                            <input type="text"  placeholder="Email Address"/>
                            <button type="submit"> REGISTER </button>
                        </form>
                    </div>
                </div>

            </footer>
            
        </>
    );
};

export default Footer;