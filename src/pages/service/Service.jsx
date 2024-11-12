// React
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Assets 
import Service_img1 from '../../assets/images/services-img1.webp';
import Service_img2 from '../../assets/images/services-img2.webp';
import Service_img3 from '../../assets/images/services-img3.webp';
import Service_img4 from '../../assets/images/services-img4.webp';
import Service_img5 from '../../assets/images/services-img5.webp';
import Service_img6 from '../../assets/images/services-img6.webp';
import Service_img7 from '../../assets/images/services-img7.webp';

// CSS and Styles
import './service.scss';

// Reusable ServiceItem component to reduce code repetition
const ServiceItem = memo(({ title, description, imgSrc, imgFirst }) => (
    <div className="row row-general">
        {imgFirst && (
            <div className="col col-general">
                <img className="img-fluid" src={imgSrc} alt={`Image for ${title}`} loading="lazy" />
            </div>
        )}
        <div className="col col-general">
            <h1 className="display-1">{title}</h1>
            <p>{description}</p>
            <h3>Contact us</h3>
        </div>
        {!imgFirst && (
            <div className="col col-general">
                <img className="img-fluid" src={imgSrc} alt={`Image for ${title}`} loading="lazy" />
            </div>
        )}
    </div>
));

const Service = memo(() => {
    return (
        <div className="service-page">
            <Helmet>
                <title>Our Healthcare Services | VitalPath</title>
                <meta name="description" content="Explore the healthcare services offered by VitalPath, including wellness, chronic condition support, mental health services, and more." />
                <meta name="keywords" content="healthcare services, wellness, chronic conditions, mental health, urgent care, LGBTQIA+ healthcare, sexual health, preventive care, everyday care" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Our Healthcare Services | VitalPath" />
                <meta property="og:description" content="Explore the healthcare services offered by VitalPath, including wellness, chronic condition support, mental health services, and more." />
                <meta property="og:image" content={Service_img1} />
                <meta property="og:url" content="https://www.vitalpath.com/services" />
                <meta name="twitter:title" content="Our Healthcare Services | VitalPath" />
                <meta name="twitter:description" content="Explore the healthcare services offered by VitalPath, including wellness, chronic condition support, mental health services, and more." />
                <meta name="twitter:image" content={Service_img1} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://www.vitalpath.com/services" />
            </Helmet>
            <div className="main">
                {/** Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <h3>services</h3>
                        <h1 className="display-1">Your partner in healthcare</h1>
                        <Link to="/contact">
                            <button className="quaternary-btn">
                                Contact us
                            </button>
                        </Link>
                    </section>
                </div>
                {/** Service Section */}
                <div className="service-section">
                    <section className="section">
                        <div className="service-preview">
                            <div className="title">
                                <h1 className="display-1">Comprehensive Care for Your Well-Being</h1>
                                <p>
                                    At VitalPath, our care goes beyond treating illnesses. From common ailments to chronic conditions,
                                    preventive care, and mental health support, we’re here to help you achieve and maintain your best
                                    health. Our approach is personal and holistic, ensuring you feel heard, respected, and supported on
                                    your health journey.
                                </p>
                            </div>
                        </div>

                        <div className="service-list">
                            <ServiceItem
                                title="Wellness and Prevention"
                                description="Stay proactive with our advanced screening and prevention services, complemented by personalized lifestyle guidance for lasting wellness."
                                imgSrc={Service_img2}
                                imgFirst
                            />
                            <ServiceItem
                                title="Everyday Care"
                                description="From minor illnesses to sudden symptoms, we provide convenient, expert care, so you can avoid ER visits and specialist appointments whenever possible."
                                imgSrc={Service_img4}
                                imgFirst={false}
                            />
                            <ServiceItem
                                title="Chronic Condition Support"
                                description="Managing conditions like diabetes or hypertension can be challenging, but VitalPath offers resources, support, and guidance to make it easier and more effective."
                                imgSrc={Service_img6}
                                imgFirst
                            />
                            <ServiceItem
                                title="Mental Health Services"
                                description="Your mental well-being is key to a healthy life. Our mental health services are here to help with everything from mild stress to complex mental health challenges."
                                imgSrc={Service_img1}
                                imgFirst={false}
                            />
                            <ServiceItem
                                title="Inclusive Care for LGBTQIA+ Individuals"
                                description="We offer comprehensive, judgment-free care for the LGBTQIA+ community, ensuring that everyone has access to the health services they deserve."
                                imgSrc={Service_img7}
                                imgFirst
                            />
                            <ServiceItem
                                title="Urgent Care Services"
                                description="For unexpected illnesses or injuries, our extended hours and accessible care mean you can get help when you need it most."
                                imgSrc={Service_img5}
                                imgFirst={false}
                            />
                            <ServiceItem
                                title="Sexual Health"
                                description="Our providers offer sensitive, respectful care for all aspects of sexual health, including family planning, STI testing, and more."
                                imgSrc={Service_img3}
                                imgFirst
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
});

export default Service;
