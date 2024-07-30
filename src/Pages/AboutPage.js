// import React from 'react';   
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import sql_badge from '../img/badges/sql-for-data-science-1.png';
import python_badge from '../img/badges/python-for-data-science.png';
import aws_badge from '../img/badges/aws-academy-cloud-architecting.png';
import applied_software from '../img/badges/applied_software_engineering_fundamentals.png';
import devop_essentials from '../img/badges/devops_essentials.png';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Tittle title={'Badges'} span={'Badges'} />
            <div className="badges">
                <a href="https://www.credly.com/badges/230b9f77-a7ac-4aaf-90e7-d7f94ebe9e47" target="_blank"  rel="noreferrer">
                    <img src={sql_badge} alt='sql_badge' />
                </a>
                <a className="badge-Circle" href="https://www.credly.com/badges/d2c0f336-fa46-478c-9dc3-4a23e92f003e/" target="_blank"  rel="noreferrer">
                    <img src={python_badge} alt='sql_badge' />
                </a>
                <a href="https://www.credly.com/badges/55f036d1-03de-4109-b595-bd029b812426/" target="_blank"  rel="noreferrer">
                    <img src={aws_badge} alt='aws_badge' />
                </a>
                <a href="https://www.credly.com/badges/79664891-6300-4a8e-a7d5-1693adc777e3/" target="_blank"  rel="noreferrer">
                    <img src={applied_software} alt='aws_badge' />
                </a>
                <a className="badge-Circle" href="https://www.credly.com/badges/5dfafcc0-175e-4bd2-9ee2-8439f3d00f97/" target="_blank"  rel="noreferrer">
                    <img src={devop_essentials} alt='aws_badge' />
                </a>
            </div>




            <Tittle title={'Knowledge'} span={'Knowledge'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Appications Development'} text={'Specializing in the development of web pages. Expertise in backend development with Laravel and Node.js to deliver high-quality, efficient, and user-friendly solutions.'} />
                <ServicesSection image={intelligence} title={'SQL Administration'} text={'Proficient in the use and administration of SQL for data science. Skilled in managing and optimizing relational databases.'} />
                <ServicesSection image={design} title={'Infrastructure Management'} text={'Experienced in managing server infrastructure and cloud computing with AWS and Digital Ocean.'} />
            </div>
        </div>
    );
}

export default AboutPage;
