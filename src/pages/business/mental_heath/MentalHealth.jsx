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
                            <h1>Care for your mental health</h1>
                            <button className="primary-btn">Join now & let's talk</button>
                            <div className="arrow-down" onClick={scrollToHelpSection}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </section>

                    </div>
                    <div className="help-section">
                        <section className="section">
                            <div className="help-preview">
                                <p>From stress and anxiety to trouble sleeping and depression, mental health impacts how we think, feel, and act — it can even affect our physical health. We’re here to help you feel your best. No shame. No judgment. Just care.</p>
                                <div className="title">
                                    <h1 className="display-1">How we can help</h1>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_one} alt="" />


                                    </div>

                                </div>
                                <div className="col col-general help-text">
                                    <h2>Mental Health Visit</h2>
                                    <p>Book a Mental Health Visit and talk to a primary care provider about how you’re feeling, physically and mentally. They’ll listen without judgment and help you make a plan to feel better — whether that’s recommending lifestyle changes, managing medications, or referring you to a therapist or psychiatrist.</p>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_two} alt="" />


                                    </div>

                                </div>
                                <div className="col col-general help-text">
                                    <h2>Mental Health Visit</h2>
                                    <p>Book a Mental Health Visit and talk to a primary care provider about how you’re feeling, physically and mentally. They’ll listen without judgment and help you make a plan to feel better — whether that’s recommending lifestyle changes, managing medications, or referring you to a therapist or psychiatrist.</p>
                                </div>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <div className="image">
                                        <img className="img-fluid" src={Care_three} alt="" />

                                    </div>

                                </div>
                                <div className="col col-general help-text">
                                    <h2>Mental Health Visit</h2>
                                    <p>Book a Mental Health Visit and talk to a primary care provider about how you’re feeling, physically and mentally. They’ll listen without judgment and help you make a plan to feel better — whether that’s recommending lifestyle changes, managing medications, or referring you to a therapist or psychiatrist.</p>
                                </div>
                            </div>



                        </section>

                    </div>
                    <div className="book-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h1 className="display-1">Book a Mental Health Visit to talk to a primary care provider</h1>
                                </div>
                                <div className="col-lg-3">
                                    <button className="secondary-btn">Book now</button>
                                </div>

                            </div>
                        </section>

                    </div>
                    <div className="areas-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="img-fluid" src={Care_one} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="display-1">Some things we can help with</h1>
                                    <ul>
                                        <li>Agitation, irritability, or frustrated mood</li>
                                        <li>Alcohol abuse or misuse</li>
                                        <li>Anxiety</li>
                                        <li>Attention deficit disorder</li>
                                        <li>Depression or feeling sad</li>
                                        <li>Grief and suvivorship</li>
                                        <li>Insomnia</li>


                                    </ul>
                                </div>
                            </div>

                        </section>

                    </div>
                    <div className="testimonial-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">See how we helped Whitney take control of her anxiety</h1>

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
                                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </section>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Mental;