// React
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Assets 
import Swiper_img1 from '../../assets/images/swiper-img1.webp';
import Swiper_img2 from '../../assets/images/swiper-img2.webp';
import Swiper_img3 from '../../assets/images/swiper-img3.webp';
import Swiper_img4 from '../../assets/images/swiper-img4.webp';

// CSS & Styles
import 'swiper/swiper-bundle.css';

const IndustrySection = () => {
    const slidesData = [
        {
            title: "Education",
            image: Swiper_img1,
            content: [
                "Access to in-network primary care for students and faculty across the U.S.",
                "On-demand virtual consultations for student health and wellness",
                "Mental health support services to help students cope with stress"
            ]
        },
        {
            title: "Technology",
            image: Swiper_img2,
            content: [
                "Remote healthcare services to keep your remote workforce healthy",
                "24/7 virtual care for tech employees anytime, anywhere",
                "Mental health services, including therapy and counseling"
            ]
        },
        {
            title: "Professional Services",
            image: Swiper_img3,
            content: [
                "Comprehensive healthcare benefits to improve employee retention",
                "On-site and virtual care options for busy professionals",
                "Preventative care programs for a healthier workforce"
            ]
        },
        {
            title: "Healthcare",
            image: Swiper_img4,
            content: [
                "Improved access to quality care with integrated healthcare networks",
                "Collaborations with hospitals and clinics for streamlined care",
                "Tailored healthcare benefits for your employees' needs"
            ]
        }
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.activeIndex);
    };

    return (
        <div className="industry-section">
            <section className="section">
                <div className="title">
                    <h1 className="display-1">We work with 8,500+ organizations of all shapes and sizes</h1>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    pagination={{
                        clickable: true, // Enable clickable pagination
                        dynamicBullets: true // Use dynamic bullets for smaller screens
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1.5,
                        },
                        480: {
                            slidesPerView: 1, // Show only one slide on small screens
                        },
                        0: {
                            slidesPerView: 1, // Ensure only 1 slide is visible on mobile
                        },
                    }}
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-image">
                                <img className="img-fluid" src={slide.image} alt={slide.title} />
                            </div>
                            <div className="swiper-text">
                                <h2 className="slide-title">{slide.title}</h2>
                                <ul>
                                    {slide.content.map((text, idx) => (
                                        <li key={idx}><FontAwesomeIcon className="check" icon={faCheckCircle} /> {text}</li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default IndustrySection;
