import React from 'react';
import BusinessGrowth from './BusinessGrowth/BusinessGrowth';
import CaseStudies from './CaseStudies/CaseStudies';
import CountingData from './CountingData/CountingData';
import Experience from './Experience/Experience';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LeadingMarket from './LeadingMarket/LeadingMarket';
import Mission from './Mission/Mission';
import Testimonial from './Testimonial/Testimonial';

const LandingPage = () => {
    return (
        <>
            <Header></Header>
            <Experience></Experience>
            <LeadingMarket></LeadingMarket>
            <CaseStudies></CaseStudies>
            <Mission></Mission>
            <Faq></Faq>
            <Testimonial></Testimonial>
            <CountingData></CountingData>
            <BusinessGrowth></BusinessGrowth>
            <Footer></Footer>
        </>
    );
};

export default LandingPage;