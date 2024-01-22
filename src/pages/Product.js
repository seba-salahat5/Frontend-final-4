import React from 'react';
import ImageGallery from '../components/product/ImageGallery';

const Product = () => {
  const imageList = [
    {
      path: "/assets/newArrivals/BLACK-BAG 1.png",
      id: 1,
    },
    {
      path: "/assets/newArrivals/duffle 1.png",
      id: 2,
    },    
    {
      path: "/assets/newArrivals/irene-kredenets-tcVH_BwHtrc-unsplash 2.png",
      id: 3,
    },
    {
      path: "/assets/newArrivals/pink-bag-small.png",
      id: 4,
    },
  ]
  return (
    <ImageGallery imageList={imageList} />
  );
};

export default Product;
