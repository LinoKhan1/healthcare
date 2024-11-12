import React, { useState } from 'react';
import './business.scss'; // Import the CSS file
import John_smith_img from '../../assets/images/John_smith_profile.webp';
import Alicia_johnson_img from '../../assets/images/Alicia_johnson_profile.webp';
import Jane_doe_img from '../../assets/images/Jane_doe_profile.webp';

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        title: "Software Engineer",
        testimonial: "I was thoroughly impressed with the level of professionalism and expertise that this company brought to the table. ",
        image: Jane_doe_img
    },
    {
        id: 2,
        name: "John Smith",
        title: "Project Manager",
        testimonial: "As a small business owner, finding a reliable partner that understands your vision can be challenging. This team exceeded my expectations in every way.",
        image: John_smith_img
    },
    {
        id: 3,
        name: "Alicia Johnson",
        title: "Designer",
        testimonial: "I’ve worked with many service providers, but none have matched the level of care and dedication this team has shown. ",
        image: Alicia_johnson_img
    }
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={index === current ? "slide active" : "slide"}
                    >
                        {index === current && (
                            <div className="testimonial-content">
                                <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                                <h2>{testimonial.testimonial}</h2>
                                <p className="name">{testimonial.name}</p>
                                <p className="title">{testimonial.title}</p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
            <button className="prev" onClick={prevSlide}>&#8249;</button>
            <button className="next" onClick={nextSlide}>&#8250;</button>
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? "dot active" : "dot"}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
