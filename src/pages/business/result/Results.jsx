import React, { useState } from "react";
import RowOfCircles from "./RowOfCircles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Classpass_image from '../../../assets/images/classpass.webp';
import Zendesk_image from '../../../assets/images/zendesk.webp';
import Soulcycle_image from '../../../assets/images/soulcycle.webp';
import './result.scss';

const Results = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionClick = (index) => {
        setActiveSection(index);
    };

    return (
        <div>
            <div className="result-page">
                <div className="main">
                    {/** Hero Section */}
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

                    {/** Result Section */}
                    <div className="result-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Delivering Healthier Outcomes and Superior Care</h1>
                            </div>
                            <RowOfCircles />
                        </section>
                    </div>

                    {/** Illustration Section */}
                    <div className="illustration-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Maximize Satisfaction for Employees and Stakeholders</h1>
                            </div>
                            <div className="container my-4">
                                <div className="row">
                                    {/* Left Column */}
                                    <div className="col-lg-6 text-left">
                                        <h1>8% +</h1>
                                        <h2>Reduction in Overall Care Costs</h2>
                                        <h3>Client: VitalPath Corporate Solutions</h3>
                                        <p>Partnered since 2015; serving over 23,000 individuals across all VitalPath markets.</p>
                                    </div>

                                    {/* Right Column with Three Sections */}
                                    <div className="col-lg-6">
                                        {[1, 2, 3].map((section) => (
                                            <div key={section} className="sections">
                                                {/* Section Header */}
                                                <div
                                                    className="section-header d-flex justify-content-between align-items-center"
                                                    onClick={() => handleSectionClick(section)}
                                                >
                                                    <span><h2>{section * 25}%</h2></span>
                                                    <span><p>Section {section} Overview</p></span>
                                                </div>
                                                {/* Section Body */}
                                                {activeSection === section && (
                                                    <div className="section-body">
                                                        <div className="circle-info">
                                                            <p>This is the content of section {section}. It provides insights and valuable information.</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Metric Section */}
                    <div className="metric-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Improved Access, Enhanced Experience</h1>
                            </div>
                            <RowOfCircles />
                        </section>
                    </div>

                    {/** Testimonial Section */}
                    <div className="testimonial-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">What Our Partners Say</h1>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <img className="img-fluid" src={Zendesk_image} alt="Zendesk" />
                                    <h2>Zendesk</h2>
                                    <p>VitalPath provides employees with a cutting-edge healthcare experience.</p>
                                </div>
                                <div className="col col-general">
                                    <img className="img-fluid" src={Classpass_image} alt="ClassPass" />
                                    <h2>ClassPass</h2>
                                    <p>ClassPass empowers employees to access modern care that fits into their busy schedules.</p>
                                </div>
                                <div className="col col-general">
                                    <img className="img-fluid" src={Soulcycle_image} alt="SoulCycle" />
                                    <h2>SoulCycle</h2>
                                    <p>SoulCycle keeps their team healthy with accessible 24/7 care.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Insights Section */}
                    <div className="books-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Explore Insights for a Healthier Workforce</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span className="icon-text">
                                        <p>Ebook</p>
                                    </span>
                                    <h1>Navigating the Deferred Care Crisis</h1>
                                    <div className="arrow-right">
                                        <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                    </div>
                                </div>
                                <div className="col">
                                    <span>
                                        <p>Ebook</p>
                                    </span>
                                    <h1>A Guide to Employee-Centric Healthcare Solutions</h1>
                                    <div className="arrow-right">
                                        <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                    </div>
                                </div>
                                <div className="col">
                                    <span>
                                        <p>Ebook</p>
                                    </span>
                                    <h1>Integrating Patient Experience into Your Health Benefits Strategy</h1>
                                    <div className="arrow-right">
                                        <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;
