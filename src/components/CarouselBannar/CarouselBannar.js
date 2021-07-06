import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselBannar.css'

import slideOne from '../../images/1.jpg'
import slideTwo from '../../images/2.jpg'
import slideThree from '../../images/3.jpg'


const carouselImages =[ slideOne, slideTwo, slideThree ]

const CarouselBannar = () => {
    return (
        <Carousel
            className="homeCarousel"
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            interval={5000}
            transitionTime={200}
        >
            {
                carouselImages.map((image) => (
                    <div>
                        <img src={image} alt="carousel" />
                    </div>
                ))
            }

        </Carousel>
    );
};

export default CarouselBannar;