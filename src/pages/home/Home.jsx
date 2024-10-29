import React from "react";
import { Link } from "react-router-dom";
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Care_one from '../../assets/images/care_one.png';
import Care_two from '../../assets/images/care_two.png';
import Care_three from '../../assets/images/care_three.png';
import Membership from '../../assets/images/membership.png';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faMedrt, faAirbnb, faGoogle, faMedium } from '@fortawesome/free-brands-svg-icons';
import Medical from '../../assets/video/medical.mp4';

const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="main">
                    {/** Hero Section */}
                    <div className="hero-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="hero-text">
                                        <h1 className="display-1">
                                            Experience Care with VitalPath
                                        </h1>
                                        <p>
                                            VitalPath brings quality healthcare to your fingertips for an affordable monthly or annual membership.
                                        </p>

                                        <button className="primary-btn">
                                            <Link className="link" to="/contact">
                                                Join VitalPath Today
                                            </Link>
                                        </button>
                                        <h3>
                                            *Membership terms and conditions apply.
                                        </h3>
                                        <h3>
                                            Already a member? Sign in to access exclusive benefits.
                                        </h3>
                                        <h3>
                                            Have a company-sponsored membership? Click here.
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 hero-image">
                                    {/* Add an image or animation here */}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Services Section */}
                    <div className="services-section">
                        <section className="section">
                            <div className="row service-preview">
                                <div className="col">
                                    <img className="img-fluid" src={Care_three} alt="" />
                                    <h1>
                                        VACCINATIONS
                                    </h1>
                                    <h2>
                                        Book a stress-free vaccination appointment today
                                    </h2>
                                    <h3>
                                        Learn more
                                    </h3>
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Care_one} alt="" />
                                    <h1>CHILDREN'S HEALTH</h1>
                                    <h2>Supporting your child’s healthy start</h2>
                                    <h3>Learn more</h3>
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Care_two} alt="" />
                                    <h1>PHARMACY SERVICES</h1>
                                    <h2>Convenient, reliable pharmacy delivery options</h2>
                                    <h3>Learn more</h3>
                                </div>
                            </div>
                            <div className="row view-services">
                                <h1 className="display-1">
                                    Get personalized care for
                                </h1>
                                <h1 className="display-1">
                                    all your healthcare needs
                                </h1>
                                <h3>
                                    <Link to="/services">
                                        See all our services
                                    </Link>
                                </h3>
                            </div>
                        </section>
                    </div>

                    {/** About Section */}
                    <div className="about-section">
                        <section className="section">
                            <div className="preview">
                                <h1 className="display-1">
                                    Discover the VitalPath Difference
                                </h1>
                                <p>
                                    VitalPath accepts most major health insurance plans for in-office and virtual appointments. We provide fast, friendly, and personalized healthcare.
                                </p>
                                <h3>Check if your insurance is accepted</h3>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Convenient, same-day or next-day appointments</p>
                                    <h3>Learn more</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Extended appointment times so you never feel rushed</p>
                                    <h3>Discover the difference</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Comprehensive lab services at our locations</p>
                                    <h3>Explore lab services</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Access to virtual consultations and telemedicine</p>
                                    <h3>Start a virtual visit</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Personalized healthcare plans tailored to you</p>
                                    <h3>Get a custom plan</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Wellness programs for long-term health</p>
                                    <h3>Explore wellness programs</h3>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Membership Section */}
                    <div className="membership-section">
                        <section className="section">
                            <div className="row list-options">
                                <div className="col">
                                    <h1>
                                        VitalPath Membership includes:
                                    </h1>
                                    <ul>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost.
                                            </span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Schedule same/next-day appointments easily.
                                            </span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Access lab services at our offices to save you extra trips.
                                            </span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get expert care from compassionate providers.
                                            </span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Access primary care offices in many US cities.
                                            </span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Receive personalized treatment for your health needs.
                                            </span>
                                        </li>
                                    </ul>
                                    <h3>Learn more about VitalPath membership</h3>
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Membership} alt="" />
                                </div>
                            </div>
                            <div className="row join">
                                <div className="col">
                                    <h1 className="display-1">Join for just $199/year.</h1>
                                    <h2>Learn more about membership</h2>
                                    <button className="secondary-btn">Join now</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Testimonial Section */}
                    <div className="testimonial-section">
                        <section className="section">
                            <h1 className="display-1">Why Patients Choose VitalPath</h1>
                            <div className="testimonial-video">
                                <video width={1200} className="img-fluid" controls>
                                    <source src={Medical} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </section>
                    </div>

                    {/** Partners Section */}
                    <div className="partners-section">
                        <section className="section">
                            <h1 className="display-1">Trusted by Top Employers Nationwide</h1>
                            <div className="row brand-icons" >
                                <div className="col">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faAirbnb} size="4x" />
                                    </span>
                                </div>
                                <div className="col">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGoogle} size="4x" />
                                    </span>
                                </div>
                                <div className="col">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMedrt} size="4x" />
                                    </span>
                                </div>
                                <div className="col">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMedium} size="4x" />
                                    </span>
                                </div>
                            </div>
                            <h3>Learn more about VitalPath membership</h3>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
