import React from "react";
import './contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const scrollToHelpSection = () => {
        document.querySelector(".help-section").scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div>
            <div className="contact-page">
                {/** Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <h3>
                            Contact
                        </h3>
                        <h1>Get in touch</h1>
                        <div className="arrow-down" onClick={scrollToHelpSection}>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>
                    </section>
                </div>
                {/** Help Section */}
                <div className="help-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-1">We’re here to help</h1>
                        </div>
                        <div className="info">
                            <h2>Already a member?</h2>
                            <p> You can use the app (iPhone or Android) or website to book, cancel, and reschedule In-Office or Remote Visits as well as send messages to your provider. You can also get 24/7 on-demand care with Video Chat in the app. We are also available via chat or call us anytime day or night at 1-888-ONEMED1.</p>
                            <p>Not a member yet, sign up today! Have questions or want to learn more? Please call us at 888-663-6331 opt 2.</p>
                            <h2>Insurance Help</h2>
                            <p>Use our insurance finder to see the plans we accept.</p>
                            <h2>Billing Help</h2>
                            <p>Have a billing question? Send us a chat or please call us at 888-663-6331 opt 1</p>
                            <h2>Office and Lab hours</h2>
                            <p>Please use the app (iPhone or Android) or website for the most up to date information</p>
                            <h2>                                Medical Records
                            </h2>
                            <p>                                Need your Medical Records? Please use the app (iPhone or Android) or website to download your records or need us to send your records for you please fill out a request form (English or Spanish) and email it to us at medicalrecords@onemedical.com. Our fax number is (415) 252-7176.
                            </p>
                            <h2>                                Technical issues
                            </h2>
                            <p>                                Having trouble with the One Medical app or your online account? Please email our team at techsupport@onemedical.com.
                            </p>
                            <h2>                                For questions about Amazon One Medical Pay Per Visit
                            </h2>
                            <p>                                Amazon One Medical Pay-per-visit is available to Prime and non-Prime members. For questions or more information please call 888-663-6331 opt 3. Hours of Operation: 8 AM to 10 PM ET weekdays; 10 AM to 8 PM ET weekends and bank holidays.
                            </p>
                            <h2>                                Feedback
                            </h2>
                            <p> We aim to provide you with the highest quality care and service. Please email us at feedback@onemedical.com if you have any feedback you would like to share.
                            </p>
                        </div>
                    </section>


                </div>
                {/** Contact Info Section */}
                <div className="contact-info-section">
                    <section className="section">
                        <div className="title">
                            <h1 className="display-1">Contact Information</h1>
                        </div>
                        <h2>Office Headquarters</h2>
                        <h3>San Francisco, West Coast Headquarters</h3>
                        <p>One Embarcadero Center</p>
                        <p>Suite 1900</p>
                        <p>San Francisco, CA 94111
                        </p>
                        <h2>Fax Number</h2>
                        <p> Please fax document related inquires to (415) 252-7176.</p>

                        <h2>For Employers</h2>
                        <p>To learn more about how you can partner with One Medical for your business, please fill out the form and our team will be in touch with you as soon as possible.</p>

                        <h2>Careers</h2>
                        <p>To learn more about how you can become part of the One Medical team, please visit our careers page to see all open positions.
                        </p>
                        <h2>Media Inquiries</h2>
                        <p>For general media inquires, please contact our team at press@onemedical.com.</p>

                        <h2>Purchasing Inquiries</h2>
                        <p>To begin a supplier partnership with One Medical, please send an email to StrategicSourcing@onemedical.com including your company name and contact information. A One Medical team member will follow up with you as soon as possible.</p>
                    </section>

                </div>
                {/** Membership Section */}
                <div className="member-section">
                    <section className="section">
                        <h1 className="display-1">Get started with One Medical today</h1>
                        <span>
                            <button className="secondary-btn">Membership sign-up</button>
                            <button className="secondary-btn">For employers</button>
                        </span>
                    </section>

                </div>
            </div>
        </div>
    );

}

export default Contact;