import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Care_one from '../../assets/images/care_one.png';
import Care_two from '../../assets/images/care_two.png';
import Care_three from '../../assets/images/care_three.png';
import Membership from '../../assets/images/membership.png';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faMedrt, faAirbnb, faGoogle, faMedium } from '@fortawesome/free-brands-svg-icons';




const Home = () => {

    return (
        <>
            <div className="home-page">
                <div className="main">
                    {/** Hero Section */}
                    <div className="hero-section">
                        <section className="section">

                            <div className="row">
                                <div className="col">
                                    <h1 className="display-1">
                                        Healthcare just got less painful
                                    </h1>
                                    <p>
                                        Now Amazon Prime members can add a One Medical membership for only $9/month or $99/year.*
                                    </p>
                                    <button>Get started on Amazon</button>
                                    <p>
                                        *Purchase terms apply.
                                    </p>
                                    <p>
                                        Already a One Medical member? Follow these steps to apply the Amazon Prime savings.
                                    </p>
                                    <p>
                                        Have a company sponsored membership? Click here.
                                    </p>

                                </div>
                                <div className="col">
                                    <img src="" alt="" />

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
                                        FLU SEASON
                                    </h1>
                                    <h2>
                                        Book your stress-free flu shot today
                                    </h2>
                                    <h3>
                                        Learn more
                                    </h3>


                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Care_one} alt="" />
                                    <h1>ONE MEDICAL KIDS</h1>
                                    <h2>A healthy school year starts here</h2>
                                    <h3>Learn more </h3>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Care_two} alt="" />
                                    <h1>AMAZON PHARMACY</h1>
                                    <h2>Finally, a pharmacy that really delivers</h2>
                                    <h3>Learn more </h3>

                                </div>
                            </div>
                            <div className="row view-services">
                                <h1 className="display-1">

                                    Get care today for
                                </h1>
                                <h1 className="display-1">
                                    erectile dysfunction

                                </h1>
                                <h3>
                                    See all our services
                                </h3>

                            </div>
                        </section>
                    </div>



                    {/** About Section */}
                    <section className="section">
                        <div className="about-section">
                            <div className="preview">
                                <h1 className="display-1">
                                    Fall in love with your doctor’s office
                                </h1>
                                <p>
                                    We accept most major health insurance plans for scheduled in-office and remote visits just like a typical doctor’s office, but we make it faster, easier, and more enjoyable to get care.


                                </p>
                                <h3> See if we're in network with your insurance</h3>

                            </div>

                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Same/next-day appointments, in person or over video, that start on time</p>
                                    <h3>Learn more</h3>

                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Longer appointments so you don’t feel rushed</p>
                                    <h3>Discover the difference</h3>


                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Drop-in lab services at our offices to save you extra trips</p>
                                    <h3>Explore lab services</h3>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Covering everything from physicals and chronic care to mental health</p>
                                    <h3>Explore care</h3>

                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Primary care offices in many US cities</p>
                                    <h3>Visit us</h3>


                                </div>
                                <div className="col">
                                    <FontAwesomeIcon icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>

                                        Compassionate providers who are experts at medicine and caring
                                    </p>
                                    <h3>Find a provider</h3>

                                </div>
                            </div>

                        </div>

                    </section>

                    {/** Membership Section */}
                    <div className="membership-section">
                        <section className="section">

                            <div className="row list-options">
                                <div className="col">
                                    <h1>
                                        Membership gives you access to our app where you can:
                                    </h1>
                                    <ul>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                            </span>

                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                            </span>

                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                            </span>

                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                            </span>

                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                            </span>

                                        </li>
                                    </ul>
                                    <h3>Learn more about One Medical membership</h3>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Membership} alt="" />

                                </div>
                            </div>
                            <div className="row join">
                                <h1 className="display-1">Membership costs only $199/year.</h1>
                                <h2>Learn more about membership </h2>
                                <button>Join now</button>

                            </div>
                        </section>

                    </div>


                    {/** Testimonial Section */}

                    <div className="testimonial-section">
                        <section className="section">
                            <h1>See what makes One Medical different</h1>
                            <div className="testimonial-video">

                            </div>
                        </section>
                    </div>


                    {/** Partners Section */}
                    <section className="section">
                        <div className="partners-section">
                            <h1>We’re an employee benefit at 8,500+ companies
                            </h1>
                            <div className="row">

                                <div className="brand-icons">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faAirbnb} size="4x" />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGoogle} size="4x" />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMedrt} size="4x" />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faMedium} size="4x" />
                                    </span>
                                </div>
                                <h3>Learn more about One Medical membership</h3>

                            </div>

                        </div>


                    </section>




                </div>

            </div>
        </>

    );

}

export default Home;