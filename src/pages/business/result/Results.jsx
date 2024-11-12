import React, { useState, useCallback } from "react";
import RowOfCircles from "./RowOfCircles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Classpass_image from '../../../assets/images/classpass.webp';
import Zendesk_image from '../../../assets/images/zendesk.webp';
import Soulcycle_image from '../../../assets/images/soulcycle.webp';
import './result.scss';

const Results = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionClick = useCallback((index) => {
        setActiveSection(index);
    }, []);

    return (
        <div className="result-page">
            <div className="main">

                {/* Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="display-1">Your Pathway to Enhanced Healthcare</h1>
                                <span>
                                    <button className="tertiary-btn">Contact Us</button>
                                    <button className="quaternary-btn">Learn More</button>
                                </span>
                            </div>
                            <div className="col-lg-5"></div>


                        </div>
                    </section>

                </div>


                {/* Result Section */}
                <section className="result-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-1">Delivering Healthier Outcomes and Superior Care</h1>
                        </div>
                        <RowOfCircles />
                    </section>

                </section>

                {/* Illustration Section */}
                <div className="illustration-section">
                    <section className="section">

                        <div className="title">
                            <h1 className="display-1">Maximize Satisfaction for Employees and Stakeholders</h1>
                        </div>
                        <div className="container my-4 row">
                            {/* Left Column */}
                            <div className="col-lg-6 text-left">
                                <h1 className="percentage">8% +</h1>
                                <h2>Reduction in Overall Care Costs</h2>
                                <h3>Client: VitalPath Corporate Solutions</h3>
                                <p>Partnered since 2015; serving over 23,000 individuals across all VitalPath markets.</p>
                            </div>

                            {/* Right Column with Three Sections */}
                            <div className="col-lg-6">
                                {[1, 2, 3].map((section) => (
                                    <div key={section} className="sections">
                                        <div
                                            className={`section-header d-flex justify-content-between align-items-center ${activeSection === section ? 'active' : ''}`}
                                            onClick={() => handleSectionClick(section)}
                                        >
                                            <h2>{section * 25}%</h2>
                                            <p>Section {section} Overview</p>
                                        </div>
                                        {activeSection === section && (
                                            <div className="section-body">
                                                <p>This is the content of section {section}. It provides insights and valuable information.</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>


                {/* Metric Section */}
                <section className="metric-section section">
                    <div className="title">
                        <h1 className="display-1">Improved Access, Enhanced Experience</h1>
                    </div>
                    <RowOfCircles />
                </section>

                {/* Testimonial Section */}
                <section className="testimonial-section section">
                    <div className="title">
                        <h1 className="display-1">What Our Partners Say</h1>
                    </div>
                    <div className="row row-general">
                        {[
                            { img: Zendesk_image, name: 'Zendesk', description: 'VitalPath provides employees with a cutting-edge healthcare experience.' },
                            { img: Classpass_image, name: 'ClassPass', description: 'ClassPass empowers employees to access modern care that fits into their busy schedules.' },
                            { img: Soulcycle_image, name: 'SoulCycle', description: 'SoulCycle keeps their team healthy with accessible 24/7 care.' },
                        ].map(({ img, name, description }) => (
                            <div className="col col-general" key={name}>
                                <img className="img-fluid" src={img} alt={name} loading="lazy" />
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Insights Section */}
                <section className="books-section section">
                    <div className="title">
                        <h1 className="display-1">Explore Insights for a Healthier Workforce</h1>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Navigating the Deferred Care Crisis' },
                            { title: 'A Guide to Employee-Centric Healthcare Solutions' },
                            { title: 'Integrating Patient Experience into Your Health Benefits Strategy' },
                        ].map(({ title }, index) => (
                            <div className="col" key={index}>
                                <span className="icon-text"><p>Ebook</p></span>
                                <h1>{title}</h1>
                                <div className="arrow-right">
                                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default React.memo(Results);
