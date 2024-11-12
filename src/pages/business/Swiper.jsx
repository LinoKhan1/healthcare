import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Swiper_img1 from '../../assets/images/swiper-img1.webp';
import Swiper_img2 from '../../assets/images/swiper-img2.webp';
import Swiper_img3 from '../../assets/images/swiper-img3.webp';
import Swiper_img4 from '../../assets/images/swiper-img4.webp';

const IndustrySection = () => {
    const slidesData = [
        { title: "Education", image: Swiper_img1, content: "Description for Education slide" },
        { title: "Technology", image: Swiper_img2, content: "Description for Technology slide" },
        { title: "Professional Services", image: Swiper_img3, content: "Description for Professional Services slide" },
        { title: "Healthcare", image: Swiper_img4, content: "Description for Healthcare slide" }
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
                    pagination={{ clickable: true }}
                    breakpoints={{
                       
                        1024:{
                            slidesPerView:1.5,
                        },
                        480:{
                            slidesPerView: 480,
                        },
                        0:{
                            slidesPerView:1,
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
                                    <li><FontAwesomeIcon className="check" icon={faCheckCircle} /> Get 24/7 on-demand care nationwide via Video Chat or Treat Me Now at no extra cost</li>
                                    <li><FontAwesomeIcon className="check" icon={faCheckCircle} /> Remote mental health support for anxiety and depression</li>
                                    <li><FontAwesomeIcon className="check" icon={faCheckCircle} /> In-app prescription renewal requests</li>
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
