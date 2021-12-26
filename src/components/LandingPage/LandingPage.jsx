import React from 'react';
import CaseStudies from './CaseStudies/CaseStudies';
import Experience from './Experience/Experience';
import Faq from './Faq/Faq';
import Header from './Header/Header';
import LeadingMarket from './LeadingMarket/LeadingMarket';
import Mission from './Mission/Mission';

const LandingPage = () => {
    return (
        <>
            <Header></Header>
            <Experience></Experience>
            <LeadingMarket></LeadingMarket>
            <CaseStudies></CaseStudies>
            <Mission></Mission>
            <Faq></Faq>
        </>
    );
};

export default LandingPage;