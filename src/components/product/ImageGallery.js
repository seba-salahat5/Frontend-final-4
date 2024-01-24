import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = styled(Carousel)`
  .carousel {
    width: ${({ width }) => width}px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .carousel-slider {
    border-radius: 16px;
  }

  .selected {
    border-radius: 16px;
  } 

  .thumb {
    width: 75px;
    height: 75px;
    border-radius: 8px;
  }

  .carousel .thumb.selected {
    border: 0px;
  }

  ul {
    padding-inline-start: 0px;
  }
`;

const ImageGallery = ({ imageList, width }) => {
    console.log(width);
    return (
        <ImageCarousel width={width} thumbWidth={width * 0.12} showStatus={false}>
            {imageList.map((item) => (
                <div key={item.image_id}>
                    <img src={process.env.PUBLIC_URL + item.url} alt='Gallery Item' />
                </div>
            ))}
        </ImageCarousel>
    );
};

export default ImageGallery;