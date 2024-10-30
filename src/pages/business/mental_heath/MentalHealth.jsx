import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Care_one from '../../../assets/images/value_one.webp';
import Care_two from '../../../assets/images/value_two.webp';
import Care_three from '../../../assets/images/value_three.webp';
import Medical from '../../../assets/video/medical.mp4';

import './mental.scss';

const Mental = ({ title, children }) => {
    const scrollToHelpSection = () => {
        document.querySelector(".help-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="mental-page">
                <div className="main">
                    <div className="hero-section">
                        <section className="section">
                            <h1>Support for Your Mental Well-Being</h1>
                            <button className="primary-btn">Join VitalPath Today</button>
                            <div className="arrow-down" onClick={scrollToHelpSection}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </section>
                    </div>
                    <div className="help-section">
                        <section className="section">
                            <div className="help-preview">
                                <p>Whether you’re managing stress, feeling anxious, or struggling to sleep, VitalPath is here for you. Our comprehensive mental health support addresses your well-being in every aspect. No stigma—just compassionate care tailored to your needs.</p>
                                <div className="title">
                                    <h1 className="display-1">How VitalPath Can Help</h1>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_one} alt="Mental Health Support" />
                                    </div>
                                </div>
                                <div className="col col-general help-text">
                                    <h2>Personalized Mental Health Consultation</h2>
                                    <p>Schedule a consultation with our experienced providers to discuss your mental and emotional health. At VitalPath, our team listens without judgment and helps create a personalized plan that may include lifestyle recommendations, therapeutic guidance, or referrals for additional support.</p>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_two} alt="Care Options" />
                                    </div>
                                </div>
                                <div className="col col-general help-text">
                                    <h2>Guided Support and Follow-Up</h2>
                                    <p>Our follow-up care ensures you stay on track. We’re here to support your journey, offering regular check-ins to make sure your plan evolves with you. VitalPath values every step of your mental health journey.</p>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_three} alt="Comprehensive Approach" />
                                    </div>
                                </div>
                                <div className="col col-general help-text">
                                    <h2>Integrated Health Care</h2>
                                    <p>Your mental and physical health are connected. VitalPath provides a holistic approach, addressing how emotional well-being impacts overall health. Our team collaborates across specialties for comprehensive care.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="book-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h1 className="display-1">Book a Mental Health Consultation with VitalPath</h1>
                                </div>
                                <div className="col-lg-3">
                                    <button className="secondary-btn">Book Now</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="areas-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="img-fluid" src={Care_one} alt="Areas of Support" />
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="display-1">Areas We Support</h1>
                                    <ul>
                                        <li>Anxiety and mood management</li>
                                        <li>Alcohol misuse support</li>
                                        <li>Stress and resilience building</li>
                                        <li>Attention and focus challenges</li>
                                        <li>Depression and grief counseling</li>
                                        <li>Insomnia treatment and sleep support</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="testimonial-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">See How We Helped Alex Find Balance and Manage Anxiety</h1>
                            </div>
                            <div className="testimonial-video">
                                <video width={1200} className="img-fluid" controls>
                                    <source src={Medical} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </section>
                    </div>
                    <div className="faq-section">
                        <section className="section">
                            <h1 className="display-1">FAQ</h1>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What mental health services does VitalPath offer?</Accordion.Header>
                                    <Accordion.Body>
                                        VitalPath provides consultations for managing mental health concerns such as anxiety, depression, and insomnia. Our providers offer personalized recommendations, therapeutic support, and refer to specialists if needed.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How can I get started with a mental health visit?</Accordion.Header>
                                    <Accordion.Body>
                                        Getting started is easy. Simply book an appointment, and our team will guide you through your initial consultation and discuss personalized care options tailored to your needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mental;
