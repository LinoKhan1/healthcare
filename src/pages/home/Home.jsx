// React
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


// Styles & CSS
import './home.scss';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Care_one from '../../assets/images/care_one.webp';
import Care_two from '../../assets/images/care_two.webp';
import Care_three from '../../assets/images/care_three.webp';
import Medical from '../../assets/video/medical.mp4';
import Membership from '../../assets/images/membership.webp';

// Icons
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faMedrt } from '@fortawesome/free-brands-svg-icons/faMedrt';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons/faAirbnb';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';

const Home = React.memo(() => {
    const services = useMemo(() => [
        {
            img: Care_three,
            title: "VACCINATIONS",
            description: "Book a stress-free vaccination appointment today",
        },
        {
            img: Care_one,
            title: "CHILDREN'S HEALTH",
            description: "Supporting your child’s healthy start",
        },
        {
            img: Care_two,
            title: "PHARMACY SERVICES",
            description: "Convenient, reliable pharmacy delivery options",
        },
    ], []);


    const membershipBenefits = useMemo(() => [
        "Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost.",
        "Schedule same/next-day appointments easily.",
        "Access lab services at our offices to save you extra trips.",
        "Get expert care from compassionate providers.",
        "Access primary care offices in many US cities.",
        "Receive personalized treatment for your health needs."
    ], []);

    return (
        <div className="home-page">
            <Helmet>
                <title>VitalPath - Quality Healthcare at Your Fingertips</title>
                <meta name="description" content="Experience convenient and personalized healthcare with VitalPath. Join today for affordable, 24/7 on-demand healthcare nationwide." />
                <meta name="keywords" content="healthcare, on-demand care, vaccinations, children's health, pharmacy services, telemedicine, VitalPath membership" />
                <link rel="canonical" href="https://vitalpath.com" />
                <meta property="og:title" content="VitalPath - Quality Healthcare at Your Fingertips" />
                <meta property="og:description" content="Join VitalPath today to access quality healthcare with convenient, personalized options." />
                <meta property="og:image" content={Care_one} />
                <meta property="og:url" content="https://yourwebsite.com/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="VitalPath - Quality Healthcare at Your Fingertips" />
                <meta name="twitter:description" content="Join VitalPath today to access quality healthcare with convenient, personalized options." />
                <meta name="twitter:image" content={Care_one} />
                {/* JSON-LD Schema Markup for Structured Data */}
                <script type="application/ld+json">
                   {/* {{
                        "@context": "https://schema.org",
                        "@type": "HealthService",
                        "name": "VitalPath",
                        "url": "https://vitalpath.com",
                        "logo": "https://vitalpath.com/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/vitalpath",
                            "https://twitter.com/vitalpath",
                            "https://www.linkedin.com/company/vitalpath"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-800-123-4567",
                            "contactType": "Customer Service",
                            "areaServed": "US",
                            "availableLanguage": "English"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "123 Health St",
                            "addressLocality": "CityName",
                            "addressRegion": "StateName",
                            "postalCode": "12345",
                            "addressCountry": "US"
                        },
                        "serviceType": "On-demand Healthcare, Telemedicine, Vaccinations, Pharmacy Services",
                        "offers": {
                            "@type": "Offer",
                            "url": "https://vitalpath.com/membership",
                            "priceCurrency": "USD",
                            "price": "199.00",
                            "eligibleRegion": "US",
                            "priceValidUntil": "2025-12-31",
                            "name": "VitalPath Membership"
                        }
                    }}*/}
                </script>
            </Helmet>

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
                                    <Link className="link" to="/contact">
                                        <button className="primary-btn">
                                            Join VitalPath Today
                                        </button>
                                    </Link>

                                    <h3>*Membership terms and conditions apply.</h3>
                                    <h3>Already a member? Sign in to access exclusive benefits.</h3>
                                    <h3>Have a company-sponsored membership? Click here.</h3>
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
                            {services.map((service, index) => (
                                <div className="col" key={index}>
                                    <img className="img-fluid" src={service.img} alt={service.title} />
                                    <h1>{service.title}</h1>
                                    <h2>{service.description}</h2>
                                    <h3>Learn more</h3>
                                </div>
                            ))}
                        </div>
                        <div className="row view-services">
                            <div className="title">
                                <h1 className="display-1">Get personalized care for all your healthcare needs</h1>
                            </div>
                            <Link className="link" to="/services">
                                <h3>
                                    See all our services
                                </h3>
                            </Link>

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
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                <p>Convenient, same-day or next-day appointments</p>
                                <h3>Learn more</h3>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                <p>Extended appointment times so you never feel rushed</p>
                                <h3>Discover the difference</h3>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                <p>Comprehensive lab services at our locations</p>
                                <h3>Explore lab services</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                <p>Access to virtual consultations and telemedicine</p>
                                <h3>Start a virtual visit</h3>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
                                <p>Personalized healthcare plans tailored to you</p>
                                <h3>Get a custom plan</h3>
                            </div>
                            <div className="col">
                                <FontAwesomeIcon className="icon" icon={faMedrt} style={{ color: '#00ab6c', fontSize: '5rem' }} />
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
                                <h1>VitalPath Membership includes:</h1>
                                <ul>
                                    {membershipBenefits.map((benefit, index) => (
                                        <li key={index}>
                                            <span>
                                                <FontAwesomeIcon className="check" icon={faCheckCircle} />
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <h3>Learn more about VitalPath membership</h3>
                            </div>
                            <div className="col">
                                <img className="img-fluid" src={Membership} alt="List of Membership options" />
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
                            <video alt="Testimonial video" width={1200} className="img-fluid" controls>
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
                        <div className="row brand-icons">
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
    );
});

export default Home;
