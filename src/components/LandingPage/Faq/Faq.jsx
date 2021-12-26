import React from 'react';
import "./Faq.css";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Faq = () => {
    return (
        <>
            {/* 6.1 - Faq Section  */}
            <div className="faq">
                 <div className="section-title">
                    <h1>QUESTION ANSWERS</h1>
                    <p>We help our clients renew their business</p>
                </div>
                <div className="faq-content">
                    {/* 6.2 - Accordion  */}
                    <div className="faq-accordion">
                     <div>
                        
                        <Accordion atomic={true}>

                            <AccordionItem title="1. THINK AHEAD AND BOOST YOUR BUSINESS?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />

                            </AccordionItem>

                            <AccordionItem title="2. HOW CONSULTANCY EXPERTS WORK?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />


                            </AccordionItem>

                            <AccordionItem title="3. WHAT IS THE BEST ADVICE FOR GROWTH?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />


                            </AccordionItem> 

                            <AccordionItem title="4. HOW TO IMPROVE YOUR BUSINESS?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />


                            </AccordionItem>

                            <AccordionItem title="6. HOW CONSULTANCY EXPERTS WORK?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />


                            </AccordionItem>
                            <AccordionItem title="2. HOW CONSULTANCY EXPERTS WORK?">
                                <br />
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                There are many variations of passages the majority have suffered alteration in some fo <br /> injected humour, or randomised words believable.
                                <br />


                            </AccordionItem>

                            

                        </Accordion>
                    </div>
                    
                    </div>
                    {/* 6.3 - FAQ Right Side Content */}
                    <div className="faq-right-content">
                        <img src="img/faq_team.png" alt="" />
                        <div className="faq-inner">
                            <div className="faq-inner-checklist">
                                <ul>
                                    <li>Nsectetur cing elit.</li>
                                    <li>Suspe ndisse suscipit sagittis leo.</li>
                                    <li>Entum estibulum dignissim posuere.</li>
                                    <li>If you are going to use a passage</li>
                                    <li>If you are going to use a passage</li>
                                    
                                </ul>
                            </div>
                            <div className="faq-experience">
                                <div>
                                    <h2>30</h2>
                                    <p>Years of  <br /> Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;