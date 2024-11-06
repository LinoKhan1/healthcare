// React
import React, { useCallback, useMemo } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// Assets
import Care_one from '../../../assets/images/value_one.webp';
import Care_two from '../../../assets/images/value_two.webp';
import Care_three from '../../../assets/images/value_three.webp';
import Medical from '../../../assets/video/medical.mp4';

// Styles & CSS
import './mental.scss';

const Mental = ({ title, children }) => {
    // Memoize assets to avoid re-imports on re-render
    const assets = useMemo(() => ({
        Care_one,
        Care_two,
        Care_three,
        Medical
    }), []);

    // Optimize scroll function with useCallback
    const scrollToHelpSection = useCallback(() => {
        document.querySelector(".help-section").scrollIntoView({ behavior: "smooth" });
    }, []);

    // Reusable Help Section Row component
    const HelpSectionRow = ({ imgSrc, imgAlt, heading, text }) => (
        <div className="row row-general">
            <div className="col col-general">
                <div className="image">
                    <img className="img-fluid" src={imgSrc} alt={imgAlt} loading="lazy" />
                </div>
            </div>
            <div className="col col-general help-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );

    return (
        <div className="mental-page">
           {/* <Helmet>
                <title>Support for Mental Well-Being | VitalPath</title>
                <meta name="description" content="VitalPath offers compassionate mental health support, including consultations and personalized care plans for stress, anxiety, sleep, and emotional well-being." />

                <meta property="og:title" content="Support for Mental Well-Being | VitalPath" />
                <meta property="og:description" content="Join VitalPath for holistic mental health support tailored to your needs. Book a consultation to discuss your emotional and mental well-being." />
                <meta property="og:image" content={Care_one} />
                <meta property="og:url" content="https://yourdomain.com/mental" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Support for Mental Well-Being | VitalPath" />
                <meta name="twitter:description" content="Discover comprehensive mental health support with VitalPath. Personalized consultations and care for anxiety, stress, and well-being." />
                <meta name="twitter:image" content={Care_one} />
            </Helmet>*/}
            <div className="main">
                <div className="hero-section">
                    <section className="section">
                        <h1>Support for Your Mental Well-Being</h1>
                        <Link to="/contact">
                            <button className="primary-btn">Join VitalPath Today</button>
                        </Link>
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

                        {/* Use HelpSectionRow component for each repeated section */}
                        <HelpSectionRow
                            imgSrc={assets.Care_one}
                            imgAlt="Mental Health Support"
                            heading="Personalized Mental Health Consultation"
                            text="Schedule a consultation with our experienced providers to discuss your mental and emotional health. At VitalPath, our team listens without judgment and helps create a personalized plan that may include lifestyle recommendations, therapeutic guidance, or referrals for additional support."
                        />

                        <HelpSectionRow
                            imgSrc={assets.Care_two}
                            imgAlt="Care Options"
                            heading="Guided Support and Follow-Up"
                            text="Our follow-up care ensures you stay on track. We’re here to support your journey, offering regular check-ins to make sure your plan evolves with you. VitalPath values every step of your mental health journey."
                        />

                        <HelpSectionRow
                            imgSrc={assets.Care_three}
                            imgAlt="Comprehensive Approach"
                            heading="Integrated Health Care"
                            text="Your mental and physical health are connected. VitalPath provides a holistic approach, addressing how emotional well-being impacts overall health. Our team collaborates across specialties for comprehensive care."
                        />
                    </section>
                </div>

                <div className="book-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-9">
                                <h1 className="display-1">Book a Mental Health Consultation with VitalPath</h1>
                            </div>
                            <div className="col-lg-3">
                                <Link to="/contact">
                                    <button className="secondary-btn">Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="areas-section">
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid" src={assets.Care_one} alt="Areas of Support" loading="lazy" />
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
                            <video width={1200} className="img-fluid" controls preload="metadata">
                                <source src={assets.Medical} type="video/mp4" />
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
    );
};

export default Mental;
