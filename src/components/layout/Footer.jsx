import React from "react";
import './layout.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../../styles/global.scss';



const Footer = () => {
    return (

        <>
            <div className="footer-component">
                <section className="section">
                    <div className="membership-footer-section">
                        <h1 className="display-1">
                            Sign up for membership
                        </h1>
                        <button className="secondary-btn">
                            Join now
                        </button>
                    </div>
                    <div className="footer-section">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li>Blog</li>
                                    <li>Media</li>
                                    <li>Contact</li>
                                    <li>Overview</li>
                                    <li>Mental Health</li>
                                </ul>
                            </div>
                            <div className="col d-flex justify-content-end">
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