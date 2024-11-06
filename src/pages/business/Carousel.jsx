import React, { useState } from 'react';
import './business.scss'; // Import CSS for styling
import carousel_img1 from '../../assets/images/carousel_one.webp'
import carousel_img2 from '../../assets/images/carousel_two.webp'
import carousel_img3 from '../../assets/images/carousel_three.webp'


const Carousel = () => {
    const images = [
        carousel_img1, // Replace with your image paths
        carousel_img2,
        carousel_img3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                    ))}
                </div>
                <div className="carousel-arrows">
                    <div className="arrow left" onClick={prevSlide}>&#10094;</div>
                    <div className="arrow right" onClick={nextSlide}>&#10095;</div>
                </div>
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
                ))}
            </div>
        </div>
    );
};


export default Carousel;
