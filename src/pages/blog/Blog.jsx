// React
import React from "react";
import { Link } from "react-router-dom";

// Assets
import Blog_img1 from '../../assets/images/Blog_img1.webp';
import Blog_img2 from '../../assets/images/Blog_img2.webp';
import Blog_img3 from '../../assets/images/Blog_img3.webp';
import Blog_img4 from '../../assets/images/Blog_img4.webp';
import Blog_img5 from '../../assets/images/Blog_img5.webp';
import Blog_img6 from '../../assets/images/Blog_img6.webp';
import Blog_img7 from '../../assets/images/Blog_img7.webp';
import Blog_img8 from '../../assets/images/Blog_img8.webp';
import Blog_img9 from '../../assets/images/Blog_img9.webp';
import Blog_img10 from '../../assets/images/Blog_img10.webp';
import Blog_img11 from '../../assets/images/Blog_img11.webp';

// CSS & Styles
import './blog.scss';

const blogEntries = [
    { img: Blog_img1, title: "Flu Prevention Tips", subtitle: "Health Insights", date: "Sep 12, 2024", alt: "Health tips for flu season" },
    { img: Blog_img3, title: "Recognizing Flu Symptoms", subtitle: "Health Insights", date: "Sep 12, 2024", alt: "Understanding flu symptoms" },
    { img: Blog_img2, title: "Boosting Your Immunity", subtitle: "Nutrition Tips", date: "Sep 12, 2024", alt: "Nutrition for a strong immune system" },
    { img: Blog_img4, title: "Stay Hydrated: Why It Matters", subtitle: "Wellness Advice", date: "Sep 12, 2024", alt: "Importance of hydration" },
    { img: Blog_img5, title: "The Role of Exercise in Health", subtitle: "Fitness Tips", date: "Sep 12, 2024", alt: "Exercise and health" },
    { img: Blog_img6, title: "Coping with Stress", subtitle: "Mental Health", date: "Sep 12, 2024", alt: "Mental health awareness" },
    { img: Blog_img7, title: "Making Healthier Choices", subtitle: "Lifestyle Choices", date: "Sep 12, 2024", alt: "Healthy lifestyle tips" },
    { img: Blog_img8, title: "The Importance of Regular Check-ups", subtitle: "Preventative Care", date: "Sep 12, 2024", alt: "Routine check-ups" },
    { img: Blog_img9, title: "Latest in Healthcare Technology", subtitle: "Health Innovations", date: "Sep 12, 2024", alt: "Advancements in healthcare" },
    { img: Blog_img10, title: "Engaging in Community Health", subtitle: "Community Care", date: "Sep 12, 2024", alt: "Community health initiatives" },
    { img: Blog_img11, title: "Join Our Wellness Initiatives", subtitle: "Wellness Programs", date: "Sep 12, 2024", alt: "Healthy lifestyle programs" },
];

// Reusable Blog Entry Component
const BlogEntry = ({ img, title, subtitle, date, alt }) => (
    <div className="col col-general">
        <img className="img-fluid" src={img} alt={alt} loading="lazy" />
        <span>
            <h3>{subtitle}</h3>
            <p>{date}</p>
        </span>
        <h2>{title}</h2>
    </div>
);

const Blog = () => {
    return (
        <div className="blog-page">
            <div className="main">
                {/* Hero Section */}
                <div className="hero-section">
                    <section className="section">
                        <h1>Our Blog</h1>
                    </section>
                </div>

                {/* Blogs Section */}
                <div className="blog-section">
                    <section className="section">
                        <div className="row row-general">
                            {blogEntries.slice(0, 2).map((entry, index) => (
                                <BlogEntry key={index} {...entry} />
                            ))}
                        </div>
                        <div className="row row-general">
                            {blogEntries.slice(2, 5).map((entry, index) => (
                                <BlogEntry key={index + 2} {...entry} />
                            ))}
                        </div>
                        <div className="row row-general">
                            {blogEntries.slice(5, 8).map((entry, index) => (
                                <BlogEntry key={index + 5} {...entry} />
                            ))}
                        </div>
                    </section>

                    <div className="row services-section">
                        <h1 className="display-1">Better Health Starts Here</h1>
                        <Link className="links" to="/services">
                            <h3>Discover Our Services</h3>
                        </Link>
                    </div>
                    <section className="section">
                        <div className="row row-general">
                            {blogEntries.slice(8).map((entry, index) => (
                                <BlogEntry key={index + 8} {...entry} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Blog;
