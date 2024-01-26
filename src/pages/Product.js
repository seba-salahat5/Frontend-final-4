import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, Typography, Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import ImageGallery from '../components/product/ImageGallery';
import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import RatingStars from '../components/shared/RatingStars';
import StateButtonGroup from '../components/product/StateButtonGroup';
import RoundedButton from '../components/shared/RoundedButton';
import DescriptionSection from '../components/product/DescriptionSection';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Heading = styled(Typography)(() => ({
  fontWeight: '600',
  letterSpacing: '0em',
  textAlign: 'left',

}));

const Product = () => {

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="var(--primary)" fontWeight={'500'} href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="var(--primary)"
      fontWeight={'500'}
      href="/category"
      onClick={handleClick}
    >
      Handbag
    </Link>,
    <Typography key="3" color="var(--summary-text)">
      Product
    </Typography>,
  ];
  const currentProduct = {
    "product_id": 2,
    "name": "Coach",
    "sub_title": "Leather Coach Bag with adjustable starps.",
    "price": 80,
    "quantity": 20,
    "description": "Introducing our Harmony Collection, a fusion of style and comfort. Impeccably crafted with premium fabrics, each garment offers a luxurious feel and versatile design. From casual chic to sophisticated elegance, our cloth product caters to diverse tastes. Elevate your wardrobe with the Harmony Collection, where every stitch tells a story of precision and dedication, bringing timeless aesthetics to modern trends.",
    "category_id": 3,
    "brand_id": 3,
    "is_liked": "0",
    "number_of_ratings": 3,
    "ratings": "4.5",
    "discount_value": 20,
    "image": [
      {
        "image_id": 1,
        "name": "Image2",
        "url": "/assets/newArrivals/BLACK-BAG 1.png",
        "type": true
      },
      {
        "image_id": 7,
        "name": "Image8",
        "url": "/assets/newArrivals/duffle 1.png",
        "type": false
      },
      {
        "image_id": 14,
        "name": "Image15",
        "url": "/assets/newArrivals/irene-kredenets-tcVH_BwHtrc-unsplash 2.png",
        "type": false
      },
      {
        "image_id": 15,
        "name": "Image16",
        "url": "/assets/newArrivals/pink-bag-small.png",
        "type": false
      }
    ],
    "related_products": [
      {
        image: "/assets/newArrivals/pink-bag-small.png",
        productName: "Grande",
        productDescreption: "Blossom Pouch",
        discount: 0.5,
        showRating: false,
        price: 39.49,
        showOldPrice: false,
        ratersNumber: 43,
        productId: 1,
      },
      {
        image: "/assets/newArrivals/pink-bag-small.png",
        productName: "Grande",
        productDescreption: "Blossom Pouch",
        discount: 0.5,
        showRating: false,
        price: 39.49,
        showOldPrice: false,
        ratersNumber: 43,
        productId: 2,
      },
      {
        image: "/assets/newArrivals/pink-bag-small.png",
        productName: "Grande",
        productDescreption: "Blossom Pouch",
        discount: 0.5,
        showRating: false,
        price: 39.49,
        showOldPrice: false,
        ratersNumber: 43,
        productId: 3,
      },
    ]
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1279px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1500px)');
  const isXl = useMediaQuery('(min-width:1700px)');
  const imageWidth = isMobile ? '100%' : (isMd ? 440 : (isLg ? 605 : (isXl ? 950 : 740)));
  return (
    <CustomContainer>
      <Grid container mt={'24px'} spacing={1}>
        <Grid item xs={12} md={6} xl={7}>
          <Stack direction={'column'} spacing={2}>
            {!isMobile && <PathLine breadcrumbs={breadcrumbs} />}
            <ImageGallery imageList={currentProduct.image}
              width={imageWidth} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <Stack direction='column' mt={'36px'}>
            <Heading sx={{ fontSize: '34px', lineHeight: '44px', color: 'var(--dark)', }}>{currentProduct.name}</Heading>
            <Heading sx={{ fontSize: '20px', lineHeight: '26px', color: 'var(--summary-text)' }}>{currentProduct.sub_title}</Heading>

            <Stack mt={'32px'} direction={'row'} alignItems={'center'} spacing={2}>
              <RatingStars rating={Number(currentProduct.ratings)} space={'8px'} />
              <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: 'var(--light-text)' }}>
                ({currentProduct.number_of_ratings}) Ratings
              </Typography>
            </Stack>

            <Stack mt={'24px'} direction={'row'} alignItems={'center'} spacing={2}>
              <Heading sx={{ fontSize: '40px', lineHeight: '52px', fontWeight: '700', color: 'var(--text)' }}>
                ${currentProduct.price * (currentProduct.discount_value / 100)}
              </Heading>
              <Heading sx={{ fontSize: '34px', lineHeight: '26px', textAlign: 'Right', color: 'var(--light-text)', textDecoration: 'line-through' }}>
                ${currentProduct.price}
              </Heading>
              <Heading sx={{ fontSize: '20px', lineHeight: '26px', textAlign: 'Right', color: 'var(--vibrant)' }}>
                {currentProduct.discount_value}%OFF
              </Heading>
            </Stack>

            <StateButtonGroup initialState={currentProduct.quantity} mt={'40px'} />

            <Stack direction={'row'} spacing={3} mt={'40px'} width={'100%'}>
              <RoundedButton
                buttonText={'Add To Bag'}
                ButtonIcon={ShoppingBagOutlinedIcon}
                onClickEvent={() => { console.log('Add to bag') }}
                isfilled={true}
                showLeftIcon={true}
                showRightIcon={false}
                is_mobile={false}
                width={isMobile ? '319px' : '328px'}
              />
              <RoundedButton
                buttonText={'Add To Wishlist'}
                ButtonIcon={FavoriteBorderRoundedIcon}
                onClickEvent={() => { console.log('Add To Wishlist') }}
                isfilled={false}
                showLeftIcon={true}
                showRightIcon={false}
                is_mobile={isMobile}
                width={isMobile ? '48px' : '240px'}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <DescriptionSection
        description={currentProduct.description}
        relatedProducts={currentProduct.related_products}
        reviews={currentProduct.ratings}
      />
    </CustomContainer>

  );
};

export default Product;
