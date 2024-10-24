import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faMedrt } from "@fortawesome/free-brands-svg-icons";
import Value_img1 from '../../assets/images/value_one.png';
import Value_img2 from '../../assets/images/value_two.png';
import Value_img3 from '../../assets/images/value_three.png';
import Blog_img1 from '../../assets/images/blog_img1.png';
import Blog_img2 from '../../assets/images/blog_img2.png';
import Blog_img3 from '../../assets/images/blog_img3.png';
import Blog_img4 from '../../assets/images/blog_img4.png';
import Blog_img5 from '../../assets/images/blog_img5.png';
import Blog_img6 from '../../assets/images/blog_img6.png';

import './business.scss';
import TestimonialCarousel from "./TestimonialCarousel";

const Overview = () => {

    return (
        <>
            <div className="overview-page">
                <div className="main">

                    {/** Hero Section */}
                    <div className="hero-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="display-1">
                                        The primary care benefit employees love
                                    </h1>
                                    <p>
                                        Attract and retain top talent with a modern healthcare benefit (and doctor’s office) that helps your team stay healthy and happy.
                                    </p>
                                    <span>
                                        <button className="primary-btn">Get in touch</button>
                                        <button className="primary-btn">See our results</button>

                                    </span>
                                    <span>
                                        <p>Activating a sponsored membership? </p><Link to="">Click here</Link>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/** About Section */}
                    <div className="about-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">
                                    A modern benefit for physical and mental health
                                </h1>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>In-network primary care at offices in many U.S. cities with onsite labs</p>
                                    <h3>Learn about our locations</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>In-network primary care at offices in many U.S. cities with onsite labs</p>
                                    <h3>Learn about virtual care </h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Pediatric and Family Care</p>
                                    <h3>One Medical Kids</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Integrated mental health with coaching and therapy</p>
                                    <h3>Mindset by One Medical</h3>
                                </div>
                                <div className="col">
                                    <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                    <p>Chronic condition management and prevention program</p>
                                    <h3>Impact by One Care Medical</h3>
                                </div>
                            </div>

                        </section>
                    </div>
                    {/** Offer Section */}
                    <div className="offer-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h1 className="display-1">One Medical now offers direct primary care</h1>

                                </div>
                                <div className="col-lg-3">
                                    <button className="secondary-btn">Learn More</button>

                                </div>
                            </div>


                        </section>
                    </div>
                    {/** Industry Section */}
                    <div className="industry-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">We work with 8,500+ organizations of all shapes and sizes</h1>

                            </div>



                        </section>
                    </div>
                    {/** Value Section */}
                    <div className="value-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Good for the health of your teams and your bottom line</h1>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={Value_img1} alt="" />
                                    <h2>Easy access to care</h2>
                                    <p>Same/next-day appointments and 24/7 virtual care</p>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Value_img2} alt="" />
                                    <h2>Happy, engaged employees</h2>
                                    <p>90+ Net Promoter Score and 9 of 10 clients renew 1</p>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Value_img3} alt="" />
                                    <h2>Demonstrated cost savings</h2>
                                    <p>8%+ savings in total cost of care 2</p>

                                </div>
                            </div>
                            <div className="row view-results">
                                <div className="col-lg-9">
                                    <h1 className="display-1">Learn more about the value we bring to your team</h1>

                                </div>
                                <div className="col-lg-3">
                                    <button className="primary-btn">See our results</button>
                                </div>

                            </div>

                        </section>
                    </div>
                    {/** Testimonial Section */}
                    <div className="testimonial-section">
                        <section className="section">
                           <TestimonialCarousel/>

                        </section>
                    </div>
                    {/** Access Section */}
                    <div className="access-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="display-1">Technology designed for modern life</h1>
                                    <ul>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                    </ul>
                                    <ul>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                    </ul>
                                    <ul>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                    </ul>


                                </div>
                                <div className="col-lg-6">
                                    <img src="" alt="" />

                                </div>
                            </div>

                        </section>
                    </div>
                    {/** Blog Section */}
                    <div className="blog-section">
                        <section className="section">
                            <div className="blog-preview">
                                <div className="title">
                                    <h1 className="display-1">The latest from One Medical</h1>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img className="img-fluid" src={Blog_img1} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src={Blog_img2} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                    <div className="col">
                                        <img className="img-fluid" src={Blog_img3} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                </div>
                                <button className="primary-btn">See more</button>
                            </div>
                            <div className="blogs">
                                <div className="title">
                                    <h1 className="display-1">Blog</h1>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={Blog_img4} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                    <div className="col">
                                        <img src={Blog_img5} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                    <div className="col">
                                        <img src={Blog_img6} alt="" />
                                        <h3>One Medical Report</h3>
                                        <h2>Study finds 65% of workers would give up bonuses, vacation, and flexible hours for better healthcare benefits</h2>

                                    </div>
                                </div>
                                <button className="primary-btn">See more</button>

                            </div>

                        </section>
                    </div>
                    {/** Contact Section */}
                    <div className="contact-section">
                        <section className="section">
                            <h1 className="display-1">Help your employees stay healthy and happy</h1>
                            <button className="secondary-btn">Get in touch</button>

                        </section>
                    </div>
                </div>

            </div>

        </>
    );

}

export default Overview;