import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = styled(Carousel)`
.carousel {
    width: 605px;
    position: relative;
    display: flex;
    justify-content: center;
}
.carousel-slider {
    border-radius: 16px;
}
.selected {
    border-radius: 16px;
} 
.thumb {
    border-radius: 8px;
}
.carousel .thumb.selected {
    border: 0px;
}
`;

const ImageGallery = ({ imageList }) => {
    return (
        <ImageCarousel width={'605px'} thumbWidth={'75px'} dynamicHeight={'75px'} showStatus={false}>
            {imageList.map((item) => (
                <div key={item.id}>
                    <img src={process.env.PUBLIC_URL + item.path} alt='Gallery Item' />
                </div>
            ))}
        </ImageCarousel>
    );
};

export default ImageGallery;