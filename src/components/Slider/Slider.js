import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, onSwipeStart } from 'react-responsive-carousel';

import slider1 from '../../assets/slider-img/slider_1.jpg'
import slider2 from '../../assets/slider-img/slider_2.jpg'
import slider3 from '../../assets/slider-img/slider_3.jpg'
import slider4 from '../../assets/slider-img/slider_4.jpg'
import slider5 from '../../assets/slider-img/slider_5.jpg'

const Slider = () => {
    return (
        <Carousel showArrows={true} showThumbs={false} showStatus={false} onSwipeStart={onSwipeStart}>
            <div>
                <img src={slider1} alt="Slider 1"/>
            </div>
            <div>
                <img src={slider2} alt="Slider 2"/>
            </div>
            <div>
                <img src={slider3} alt="Slider 3"/>
            </div>
            <div>
                <img src={slider4} alt="Slider 4"/>
            </div>
            <div>
                <img src={slider5} alt="Slider 5"/>
            </div>
        </Carousel>
    )
}

export default Slider
