import React from "react";
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
import './blog.scss';




const Blog = () => {

    return (
        <>
            <div className="blog-page">
                <div className="main">
                    {/* Hero Section */}
                    <div className="hero-section">
                        <section className="section">
                            <h1>
                                Blog
                            </h1>
                        </section>
                    </div>


                    {/* Blogs Section */}
                    <div className="blog-section">
                        <section className="section">
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img1} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>


                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img3} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img2} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img4} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img5} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img6} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img7} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img8} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                            </div>
                        </section>

                        <div className="row services-section">
                            <h1 className="display-1">Better health starts here</h1>
                            <h3>Learn about our services</h3>
                        </div>
                        <section className="section">
                            <div className="row">
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img9} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img10} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={Blog_img11} alt="" />
                                    <span>
                                        <h3>Preventicare Care</h3>
                                        <p>Sep 12, 2024</p>
                                    </span>
                                    <h2>Flu FAQs</h2>

                                </div>



                            </div>


                        </section>



                    </div>
                </div>
            </div>
        </>
    );

}

export default Blog;