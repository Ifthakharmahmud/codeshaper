import React, {useState} from 'react';
import './HeaderTop.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const HeaderTop = () => {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <>
            {/* Header Top  */}
            <div className="header-top">
                {/* Logo  */}
                <div className="logo">
                    <a href="#"> <img src="./logo.png" alt="Logo" /> </a>
                </div>

                {/* Main Menu  */}
                <div className="main-menu">
                    <nav>
                        <ul  id={showLinks  ? "hidden": ""  }  >
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">SERVICES  <FaAngleDown /> </a>
                                <ul>
                                    <li><a href="#"> Demo 1 </a></li>
                                    <li><a href="#"> Demo 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">PAGES</a></li>
                            <li><a href="#">CASE SHOP</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTENT</a></li>
                            
                        </ul>
                    </nav>
                    <button onClick={ () => setShowLinks(!showLinks)  }  className="res-nav">MENU <AiOutlineMenu /> </button>
                </div>

                {/* Social Icons & Search Button */}
                <div className="social-icons">
                    <div className='icon-search-container'>
                        <div className="icons">
                            <ul>
                                <li><a href="#"> <FaInstagram /> </a></li>
                                <li><a href="#"><FaLinkedin /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaFacebook /></a></li>
                            </ul>
                        </div>

                        <div className="search-btn">
                            <a href="#"> <HiOutlineSearch /> </a>
                        </div>
                    </div>

                </div>

                {/* Header Contact Info  */}

                <div className="header-contact-info">
                    <p>Need help?</p>
                    <p>+92 666 888 0000</p>
                </div>


            </div>
        </>
    );
};

export default HeaderTop;
