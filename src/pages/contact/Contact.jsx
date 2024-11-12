// React
import React from "react";
import { Helmet } from "react-helmet";

// CSS & Styles
import './contact.scss';

// Icons & Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const scrollToHelpSection = () => {
        document.querySelector(".help-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Helmet>
                <title>Contact Us | VitalPath Healthcare</title>
                <meta name="description" content="Contact VitalPath Healthcare for support, inquiries, billing questions, and more. Reach out to us through our contact information or app support." />
                <meta name="keywords" content="VitalPath, healthcare, contact, support, billing, insurance, medical records, customer service" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.vitalpath.com/contact" />
            </Helmet>

            <div className="contact-page">
                <div className="main">
                    {/** Hero Section */}
                    <div className="hero-section">
                        <section className="section">
                            <h3>Contact</h3>
                            <h1>Reach Out to Us</h1>
                            <div className="arrow-down" onClick={scrollToHelpSection}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </section>
                    </div>

                    {/** Help Section */}
                    <div className="help-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">We're Here to Support You</h1>
                            </div>
                            <div className="info">
                                <h2>Current VitalPath Members</h2>
                                <p>Members can use our VitalPath app (iPhone or Android) or website to book, cancel, or reschedule appointments and communicate with your care team. Access 24/7 on-demand support and virtual consultations directly in the app. For any immediate inquiries, feel free to call us at 1-800-VITAL-CARE.</p>
                                <p>Not a VitalPath member yet? Sign up today! For questions or more information, call us at 1-800-VITAL-INFO.</p>
                                <h2>Insurance Assistance</h2>
                                <p>Use our insurance checker tool to see which plans VitalPath accepts.</p>
                                <h2>Billing Questions</h2>
                                <p>Have questions about your bill? Chat with us or call 1-800-VITAL-BILL for assistance.</p>
                                <h2>Office Hours and Lab Information</h2>
                                <p>For up-to-date hours and lab information, please refer to the VitalPath app or website.</p>
                                <h2>Medical Records</h2>
                                <p>To access or transfer your medical records, download them from the app or request a transfer by completing our record release form and emailing it to records@vitalpath.com. Fax inquiries can be sent to (415) 555-1234.</p>
                                <h2>Technical Support</h2>
                                <p>If you're experiencing issues with the VitalPath app or online account, please reach out to techsupport@vitalpath.com.</p>
                                <h2>Feedback</h2>
                                <p>We're dedicated to providing high-quality care. If you have any feedback, please email us at feedback@vitalpath.com.</p>
                            </div>
                        </section>
                    </div>

                    {/** Contact Info Section */}
                    <div className="contact-info-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Contact Information</h1>
                            </div>
                            <h2>VitalPath Headquarters</h2>
                            <h3>Main Office - San Francisco</h3>
                            <p>VitalPath Health</p>
                            <p>500 Mission Street, Suite 1500</p>
                            <p>San Francisco, CA 94105</p>
                            <h2>Fax Number</h2>
                            <p> For document inquiries, fax us at (415) 555-1234.</p>
                            <h2>Business Partnerships</h2>
                            <p>Interested in partnering with VitalPath? Fill out our form, and a representative will reach out to discuss opportunities.</p>
                            <h2>Careers at VitalPath</h2>
                            <p>To join our team, visit our careers page for open positions and application details.</p>
                            <h2>Media Inquiries</h2>
                            <p>For media-related inquiries, please email press@vitalpath.com.</p>
                            <h2>Supplier Partnerships</h2>
                            <p>If you're interested in becoming a VitalPath supplier, send your information to sourcing@vitalpath.com. A team member will contact you shortly.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
