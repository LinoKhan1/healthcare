import React, { useState } from "react";
import RowOfCircles from "./RowOfCircles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Classpass_image from '../../../assets/images/classpass.png';
import Zendesk_image from '../../../assets/images/zendesk.png';
import Soulcycle_image from '../../../assets/images/soulcycle.png';
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
                                    <h1 className="display-1">A primary care benefit with proven benefits</h1>
                                    <span>
                                        <button className="tertiary-btn">Get in touch</button>
                                        <button className="quaternary-btn">See what we do</button>
                                    </span>

                                </div>
                                <div className="col-lg-5">

                                </div>
                            </div>
                        </section>

                    </div>
                    {/** Result Section */}
                    <div className="result-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">We deliver better health and better care
                                </h1>

                            </div>
                            <RowOfCircles />
                        </section>
                    </div>
                    {/** Illustration */}
                    <div className="illustration-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Keep your team and your CFO happy</h1>
                            </div>
                            <div className="container my-4">
                                <div className="row">
                                    {/* Left Column */}
                                    <div className="col-lg-6 text-left">
                                        <h1>8% +</h1>
                                        <h2>Savings in total cost of care 7</h2>
                                        <h3>Client: Professional Service Company</h3>
                                        <p>Customer since 2015; currently covering 23k lives across all One Medical markets</p>

                                        {/* Arrows */}
                                        <div className="arrows d-flex justify-content-between">
                                            <button className="arrow-btn">&larr;</button>
                                            <button className="arrow-btn">&rarr;</button>
                                        </div>
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
                                                    <span>{section * 25}%</span>
                                                    <span>Section {section} Header</span>
                                                </div>

                                                {/* Section Body */}
                                                {activeSection === section && (
                                                    <div className="section-body">
                                                        <div className="circle-info">
                                                            <p>This is the content of section {section}. It provides additional information.</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="metric-section">
                                <div className="title">
                                    <h1 className="display-1">Better access, better experience</h1>
                                </div>
                                <RowOfCircles />

                            </div>

                        </section>
                    </div>

                    {/** Testimonial Section */}
                    <div className="testimonial-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Hear from our clients</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <video src=""></video>
                                    <h2>zendesk</h2>
                                    <p>Zendesk gives employees a cutting-edge healthacre experience</p>
                                </div>
                                <div className="col">
                                    <video src="">

                                    </video>
                                    <h2>classpass</h2>
                                    <p>ClassPass helps employees get modern care that fits into their busy lives</p>
                                </div>
                                <div className="col">
                                    <video src=""></video>
                                    <h2>SOULCYCLE</h2>
                                    <p>Soulcycle keeps their team, including instructiors, healthy with 24/7 care.</p>
                                </div>
                            </div>

                        </section>
                    </div>

                    {/** Books Section */}
                    <div className="books-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Get insights on creating a healthy workforce</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span className="icon-text">
                                        <FontAwesomeIcon icon={faBookOpen} />
                                        <p>Ebook</p>
                                    </span>
                                    <h1>Navigating the Deferred Care Crisis</h1>
                                    <div className="arrow-right">
                                        <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                    </div>

                                </div>
                                <div className="col">
                                    <span>
                                        <FontAwesomeIcon icon={faBookOpen} />
                                        <p>Ebook</p>
                                    </span>
                                    <h1>A guide to building healthcare your employees will love</h1>

                                    <div className="arrow-right">
                                        <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                    </div>
                                </div>
                                <div className="col">
                                    <span>
                                        <FontAwesomeIcon icon={faBookOpen} />
                                        <p>Ebook</p>
                                    </span>
                                    <h1>How patient experience fits into your health benefits strategy</h1>
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