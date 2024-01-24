
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import BrandsList from "../components/home/BrandsList";
import CarouselBanner from "../components/home/CarouselBanner";
import HandPickedCollections from "../components/home/HandpickedCollections";
import NewArrivals from "../components/home/NewArraival";
import { CustomContainer } from "../layout/CustomContainer";
import SmallBanner from "../components/home/SmallBanner";
import BannerBox from '../components/home/BannerBox';

const CardsSection = styled(Grid)(() => ({
  marginTop: '70px',

}));

const Home = () => {
  let tempObj = [
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
    {
      image: "/assets/newArrivals/pink-bag-small.png",
      productName: "Grande",
      productDescreption: "Blossom Pouch",
      discount: 0.5,
      showRating: false,
      price: 39.49,
      showOldPrice: false,
      ratersNumber: 43,
      productId: 4,
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
      productId: 5,
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
      productId: 6,
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
      productId: 7,
    },
  ];

  return (
    <>
      <CustomContainer>
        <CarouselBanner />
        <NewArrivals isMainComponent={true} cards={tempObj} />
      </CustomContainer>
      <HandPickedCollections />
      <CustomContainer>
        <BrandsList />
        <CardsSection container spacing={2}>
          <Grid item xs={12}>
            <SmallBanner bannerHight={'400px'} backgroundImage={'/assets/main offer.png'} imageAlt={'Limited Edition Products'}>
              <BannerBox
                textsize={'52px'}
                lineheight={'68px'}
                textcolor={'var(--secondary1)'}
                left={'4.5%'}
                bannerText={'Limited Edition Products'} />
            </SmallBanner>
          </Grid>
          <Grid item xs={6}>
            <SmallBanner bannerHight={'228px'} backgroundImage={'/assets/offer1.png'} imageAlt={'15% Off And More!'}>
              <BannerBox
                textsize={'40px'}
                lineheight={'52px'}
                textcolor={'var(--secondary2)'}
                left={'61%'}
                bannerText={'15% Off And More!'} />
            </SmallBanner>
          </Grid>
          <Grid item xs={6}>
            <SmallBanner bannerHight={'228px'} backgroundImage={'/assets/offer2.png'} imageAlt={'Popular In The Community!'}>
              <BannerBox
                textsize={'40px'}
                lineheight={'52px'}
                textcolor={'var(--primary)'}
                left={'50%'}
                bannerText={'Popular In The Community!'} />
            </SmallBanner>
          </Grid>

        </CardsSection>
      </CustomContainer>
    </>
  );
};

export default Home;