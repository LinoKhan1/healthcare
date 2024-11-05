// React
import React from 'react';
import { Link } from 'react-router-dom';




const Service = () => {


    return (
        <div className="service-page">
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <h3>services</h3>
                        <h1 className="display-1">
                            No ordinary doctor's office
                        </h1>
                        <Link to="/contact">
                            <button className='quaternary-btn'>
                                Contact us
                            </button>
                        </Link>
                    </section>
                </div>
                {/** Service Section */}
                <div className="service-section">
                    <section className='section'>

                        <div className="service-preview">
                            <div className="title">
                                <h1 className='display-1'>
                                    A true partner in your health and wellness
                                </h1>
                                <p>
                                    At One Medical, we care for everything from common illnesses to chronic diseases and mental health
                                    concerns. Primary care isn’t just for when you’re sick — we’re also here to help you prevent
                                    illness and maintain your optimal health. We’ll always take the time to listen to you, respect
                                    your opinion, and care for you as a whole person.
                                </p>
                            </div>

                        </div>
                        <div className="service-list">
                            <div className="row">
                                <div className="col">
                                    <img src="" alt="" />

                                </div>
                                <div className="col">
                                    <h1>
                                        Wellness and prevention
                                    </h1>
                                    <p>
                                        We’ll help you get healthy and stay that way with state-of-the art screening, disease prevention, and lifestyle advice.
                                    </p>
                                    <h3>
                                        Contact us
                                    </h3>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        Everyday care
                                    </h1>
                                    <p>
                                        Wake up with the flu or a questionable rash? We diagnose and treat a wide spectrum of illnesses, so you get the care you need without having to visit the ER or see specialists.
                                    </p>
                                    <h3>
                                        Contact us
                                    </h3>

                                </div>
                                <div className="col">
                                    <img src="" alt="" />


                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="" alt="" />

                                </div>
                                <div className="col">
                                    <h1>Chronic conditions</h1>
                                    <p>Chronic conditions like diabetes, hypertension, and obesity can be difficult to manage and prevent on your own. Impact by One Medical, our chronic condition management program, is here to make it easier, with the support and resources you need to find your way to better health.</p>
                                    <h3>Contact us</h3>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <h1>Mental health</h1>
                                    <p>Your mental health is an important part of the full picture. Whether you're feeling off or experiencing depression, anxiety, insomnia, or something more complex, our suite of mental health services – Mindset by One Medical – is here to help.</p>
                                    <h3>Contact us</h3>

                                </div>
                                <div className="col">
                                    <img src="" alt="" />

                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="" alt="" />

                                </div>
                                <div className="col">
                                    <h1>LGBTQIA+ services</h1>
                                    <p>From illnesses and injuries to sexual and mental health to wellness goals, we’re here to provide the LGBTQIA+ community with the exceptional care they deserve — with no fear of being judged or dismissed.</p>
                                    <h3>Contact us</h3>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <h1>Urgent concerns</h1>
                                    <p>Injuries and illness pop up at the most inconvenient times, but the expanded hours of our Urgent In-Office Visits make care more convenient for you. Select offices are open late, seven days a week — so you can book an in-office visit for urgent concerns.</p>
                                    <h3>Contact us</h3>

                                </div>
                                <div className="col">
                                    <img src="" alt="" />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src="" alt="" />

                                </div>
                                <div className="col">
                                    <h1>Sexual health</h1>
                                    <p>Talking to your provider about your sex life doesn’t have to be uncomfortable. For anything from STI testing to birth control and family planning to erectile dysfunction, our friendly providers and comfortable, inclusive offices are there to put you at ease.</p>

                                </div>
                            </div>

                        </div>

                    </section>
                </div>

            </div>
        </div>


    );
}

export default Service;