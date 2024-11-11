// React
import React from "react";
import { Link } from "react-router-dom";

// CSS & Styles
import './layout.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (

        <>
            {/** Footer Component */}
            <div className="footer-component">
                <section className="section">
                    {/** Contact Section */}
                    <div className="membership-footer-section">
                        <div className="title">
                            <h1 className="display-1">
                                Get Started with VitalPath Today
                            </h1>
                        </div>

                        <Link to="/contact">
                            <button className="quarternary-btn">
                                Join now
                            </button>
                        </Link>
                        <Link to="/business">
                            <button className="tertiary-btn" >
                                For Busniness
                            </button>
                        </Link>
                    </div>
                    {/** Footer Links */}
                    <div className="footer-section">
                        <div className="row row-general">
                            <div className="col col-general">
                                <ul>
                                    <Link className="link" to="/blog">
                                        <li>Blog</li>
                                    </Link>
                                    <Link className="link" to="/services">
                                        <li>Services</li>
                                    </Link>
                                    <Link className="link" to="/contact">
                                        <li>Contact</li>
                                    </Link>
                                    <Link className="link" to="/business">
                                        <li>Overview</li>
                                    </Link>
                                    <Link className="link" to="/mental">
                                        <li>Mental Health</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="col col-general d-flex icons ">
                                <div className="social-icons">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </span>
                                </div>

                            </div>

                        </div>
                        {/** Copyright Section */}

                        <div className="copyright-section">
                            <ul>
                                <li>
                                    Membership Terms of Service

                                </li>
                                <li>
                                    Medical Terms of Service
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    SMS Short Code Terms of Service
                                </li>
                                <li>HIPAA NPP</li>
                                <li>Notice of Non-Discrimination</li>


                            </ul>
                            <ul>
                                <li>Employee Privacy Notice</li>
                                <li>Code of Business Conduct</li>
                                <li>CMS Open Payments</li>
                            </ul>
                            <p>One Medical services are only available in the U.S. The information provided on this website is not intended for consumers outside of the U.S.</p>
                            <p>©2024 1Life Healthcare, Inc. All rights reserved.</p>
                        </div>

                    </div>

                </section>

            </div>
        </>

    );
}
export default Footer;