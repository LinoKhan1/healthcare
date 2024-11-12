// React
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


// Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faMedrt } from "@fortawesome/free-brands-svg-icons";

// Images
import Value_img1 from '../../assets/images/value_one.webp';
import Value_img2 from '../../assets/images/value_two.webp';
import Value_img3 from '../../assets/images/value_three.webp';
import Blog_img1 from '../../assets/images/blog_img1.webp';
import Blog_img2 from '../../assets/images/blog_img2.webp';
import Blog_img3 from '../../assets/images/blog_img3.webp';
import Blog_img4 from '../../assets/images/blog_img4.webp';
import Blog_img5 from '../../assets/images/blog_img5.webp';
import Blog_img6 from '../../assets/images/blog_img6.webp';
import Membership_img from '../../assets/images/membership.webp';

// Styles & CSS
import './business.scss';
import 'swiper/css';

// Components
import TestimonialCarousel from "./TestimonialCarousel";
import IndustrySection from "./Swiper.jsx";


const Overview = () => {

    return (
        <>
            <Helmet>
                <title>Vital Path Healthcare - Employee Healthcare Benefits</title>
                <meta name="description" content="Discover healthcare benefits that prioritize your employees' physical and mental well-being. Learn more about our services including in-network care, virtual care, and mental health support." />
                <meta name="keywords" content="healthcare benefits, employee wellness, virtual care, mental health support, Vital Path Healthcare" />
                <meta property="og:title" content="Vital Path Healthcare - Employee Healthcare Benefits" />
                <meta property="og:description" content="Comprehensive healthcare benefits for your team’s physical and mental well-being. Explore our services today." />
                <meta property="og:image" content="/path/to/your/social-share-image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/overview" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vital Path Healthcare - Employee Healthcare Benefits" />
                <meta name="twitter:description" content="Empower your employees with top-tier healthcare benefits tailored to physical and mental well-being." />
            </Helmet>
            <div className="overview-page">
                <div className="main">

                    {/** Hero Section */}
                    <div className="hero-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="display-1">
                                        The healthcare benefit your employees deserve
                                    </h1>
                                    <p>
                                        Empower your team with access to modern healthcare services that promote well-being and work-life balance.
                                    </p>
                                    <span>
                                        <Link to="/contact">
                                            <button className="primary-btn">Get in touch</button>
                                        </Link>
                                        <Link to="/results">
                                            <button className="primary-btn">See our results</button>
                                        </Link>
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Activating a sponsored membership?</p>
                                        <Link className="link" to="/contact" style={{ marginLeft: '10px' }}>Click here</Link>
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
                                    A comprehensive benefit for both physical and mental health
                                </h1>
                            </div>

                            {/** Row 1 */}
                            <div className="row row-general">
                                {[
                                    {
                                        icon: faMedrt,
                                        color: '#00ab6c',
                                        title: 'Explore our locations',
                                        description: 'Access to in-network primary care with offices across the U.S. and onsite labs',
                                    },
                                    {
                                        icon: faMedrt,
                                        color: '#00ab6c',
                                        title: 'Learn about virtual care',
                                        description: 'Virtual care available nationwide for on-demand consultations',
                                    },
                                    {
                                        icon: faMedrt,
                                        color: '#00ab6c',
                                        title: 'Vital Path Kids',
                                        description: 'Comprehensive Pediatric and Family Care services',
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="col col-general">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={item.icon}
                                            style={{ color: item.color, fontSize: '5rem' }}
                                            aria-label={item.title}
                                        />
                                        <p>{item.description}</p>
                                        <h3>{item.title}</h3>
                                    </div>
                                ))}
                            </div>

                            {/** Row 2 */}
                            <div className="row row-general">
                                {[
                                    {
                                        icon: faMedrt,
                                        color: '#00ab6c',
                                        title: 'Mindset by Vital Path',
                                        description: 'Integrated mental health support including therapy and coaching',
                                    },
                                    {
                                        icon: faMedrt,
                                        color: '#00ab6c',
                                        title: 'Impact by Vital Path Healthcare',
                                        description: 'Chronic condition management and prevention program',
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="col col-general">
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={item.icon}
                                            style={{ color: item.color, fontSize: '5rem' }}
                                            aria-label={item.title}
                                        />
                                        <p>{item.description}</p>
                                        <h3>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/** Offer Section */}
                    <div className="offer-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h1 className="display-1">Vital Path Healthcare now offers personalized primary care</h1>
                                </div>
                                <div className="col-lg-3">
                                    <button className="secondary-btn">Learn More</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Industry Section */}
                    <IndustrySection />

                    {/** Value Section */}
                    <div className="value-section">
                        <section className="section">
                            <div className="title">
                                <h1 className="display-1">Tailored solutions for the health of your teams and your business</h1>
                            </div>
                            <div className="row row-general">
                                <div className="col col-general">
                                    <img className="img-fluid" src={Value_img1} alt="" />
                                    <h2>Easy access to care</h2>
                                    <p>Same/next-day appointments and 24/7 virtual care at no extra cost</p>
                                </div>
                                <div className="col col-general">
                                    <img className="img-fluid" src={Value_img2} alt="" />
                                    <h2>Happy, engaged employees</h2>
                                    <p>90+ Net Promoter Score and a high client retention rate</p>
                                </div>
                                <div className="col col-general">
                                    <img className="img-fluid" src={Value_img3} alt="" />
                                    <h2>Proven cost savings</h2>
                                    <p>8%+ savings in total healthcare costs</p>
                                </div>
                            </div>
                            <div className="row view-results">
                                <div className="col-lg-9">
                                    <h1 className="display-1">Discover how Vital Path Healthcare enhances your team’s well-being</h1>
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
                            <TestimonialCarousel />
                        </section>
                    </div>
                    {/** Access Section */}
                    <div className="access-section">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="display-1">Innovative technology for today’s healthcare needs</h1>
                                    <ul>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Access 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost
                                        </span></li>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Seamless integration with your existing health benefits
                                        </span></li>
                                    </ul>
                                    <ul>
                                        <li> <span><FontAwesomeIcon className="check" icon={faCheckCircle} />
                                            Personalized healthcare experience with convenient, tech-enabled care
                                        </span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <img src={Membership_img} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/** Blog Section */}
                    <div className="blog-section">
                        <section className="section">
                            {/* Blog Preview Section */}
                            <div className="blog-preview">
                                <div className="title">
                                    <h1 className="display-1">The latest from Vital Path</h1>
                                </div>
                                <div className="row row-general">
                                    {/** Blog Post Component */}
                                    {[
                                        {
                                            img: Blog_img1,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'New research shows 65% of employees prioritize healthcare benefits over flexible work options',
                                        },
                                        {
                                            img: Blog_img2,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'Study reveals the impact of healthcare benefits on employee productivity',
                                        },
                                        {
                                            img: Blog_img3,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'Why preventative care can reduce long-term healthcare costs',
                                        },
                                    ].map((post, index) => (
                                        <div key={index} className="col col-general">
                                            <img className="img-fluid" src={post.img} alt={`Blog post ${index + 1}`} />
                                            <h3>{post.title}</h3>
                                            <h2>{post.subtitle}</h2>
                                        </div>
                                    ))}
                                </div>
                                <div className="view-more">
                                    <button className="quaternary-btn">See more</button>
                                </div>
                            </div>

                            {/* Blog Section */}
                            <div className="blogs">
                                <div className="title">
                                    <h1 className="display-1">Blog</h1>
                                </div>
                                <div className="row row-general">
                                    {/** Blog Post Component */}
                                    {[
                                        {
                                            img: Blog_img4,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'How healthcare benefits play a key role in employee retention',
                                        },
                                        {
                                            img: Blog_img5,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'Making healthcare benefits accessible and affordable for your team',
                                        },
                                        {
                                            img: Blog_img6,
                                            title: 'Vital Path Healthcare Insights',
                                            subtitle: 'The future of healthcare benefits: Virtual care',
                                        },
                                    ].map((post, index) => (
                                        <div key={index} className="col col-general">
                                            <img className="img-fluid" src={post.img} alt={`Blog post ${index + 4}`} />
                                            <h3>{post.title}</h3>
                                            <h2>{post.subtitle}</h2>
                                        </div>
                                    ))}
                                </div>
                                <div className="view-more">
                                    <button className="quaternary-btn">See more</button>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

            </div>

        </>
    );

}

export default Overview;