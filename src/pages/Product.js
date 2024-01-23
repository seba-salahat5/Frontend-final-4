import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, Typography, Grid, Stack } from '@mui/material';
import ImageGallery from '../components/product/ImageGallery';
import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import RatingStars from '../components/shared/RatingStars';

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

  const productName = "Coach";
  const productDescreption = "Leather Coach Bag with adjustable starps.";
  const rating = 4.0;
  const ratersNumber = 250;
  const price = 78.66;
  const discount = 0.5;
  //const quantity = 0;
  //const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.';
  //const relatedProduct;
  //const reviews;
  return (
    <CustomContainer>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PathLine breadcrumbs={breadcrumbs} />
          <ImageGallery imageList={imageList} />
        </Grid>
        <Grid item xs={6} mt={'36px'}>
          <Heading sx={{ fontSize: '34px', lineHeight: '44px', color: 'var(--dark)', }}>{productName}</Heading>
          <Heading sx={{ fontSize: '20px', lineHeight: '26px', color: 'var(--summary-text)'}}>{productDescreption}</Heading>

          <Stack mt={'32px'} direction={'row'} alignItems={'center'} spacing={2}>
            <RatingStars rating={rating} space={'8px'} />
            <Typography sx={{fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: 'var(--light-text)'}}>
              ({ratersNumber}) Ratings
            </Typography>
          </Stack>

          <Stack mt={'24px'} direction={'row'} alignItems={'center'} spacing={2}>
            <Heading sx={{ fontSize: '40px', lineHeight: '52px', fontWeight: '700', color: 'var(--text)' }}>
              ${price * discount}
            </Heading>
            <Heading sx={{ fontSize: '34px', lineHeight: '26px', textAlign: 'Right', color: 'var(--light-text)', textDecoration: 'line-through' }}>
              ${price}
            </Heading>
            <Heading sx={{ fontSize: '20px', lineHeight: '26px', textAlign: 'Right', color: 'var(--vibrant)' }}>
              {discount * 100}%OFF
            </Heading>
          </Stack>

        </Grid>
      </Grid>
    </CustomContainer>

  );
};

export default Product;
