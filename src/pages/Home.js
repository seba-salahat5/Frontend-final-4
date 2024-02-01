import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import BrandsList from "../components/home/BrandsList";
import CarouselBanner from "../components/home/CarouselBanner";
import HandPickedCollections from "../components/home/HandpickedCollections";
import NewArrivals from "../components/home/NewArraival";
import { CustomContainer } from "../layout/CustomContainer";
import SmallBanner from "../components/home/SmallBanner";
import BannerBox from "../components/home/BannerBox";
import { useGet } from "../custom_hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userProvider";
import { useScrollContext } from '../context/ScrollContext';

const CardsSection = styled(Grid)(() => ({
  marginTop: "70px",
}));

const Home = () => {
  const { scrollToComponent, setScrollTarget } = useScrollContext();
  const handpickedRef = useRef();
  const brandsRef = useRef();
  const cardsRef = useRef();

  const [newArrivals, setNewArrivals] = useState([]);
  const navigate = useNavigate();
  const { session_token } = useUser();
  const apiUrl = "https://group4.iscovat.bid/product/new-arrival";
  const pageNumber = 1;
  const numberOfItems = 10;

  const url = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  const { data, loading } = useGet(url, session_token);

  useEffect(() => {
    !loading && setNewArrivals(data.items);
  }, [data, loading]);

  useLayoutEffect(() => {
    const targetRefs = {
      handpicked: handpickedRef,
      brands: brandsRef,
      cards: cardsRef,
    };

    const scrollToRef = targetRefs[scrollToComponent];
    if (scrollToComponent && scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollTarget(null);
    }
  }, [scrollToComponent, setScrollTarget]);

  return (
    <>
      <CustomContainer>
        <CarouselBanner />
        <NewArrivals cards={newArrivals} isMainComponent={true} />
      </CustomContainer>
      <div ref={handpickedRef}>
        <HandPickedCollections />
      </div>
      <CustomContainer>
        <div ref={brandsRef}>
          <BrandsList />
        </div>

        <CardsSection container spacing={2} ref={cardsRef}>
          <Grid item xs={12}>
            <SmallBanner
              bannerHight={"400px"}
              backgroundImage={"/assets/main offer.png"}
              imageAlt={"Limited Edition Products"}
              onClickEvent={() => { navigate('/results?page_title=Limited Editions&route=limited-edition') }}
            >
              <BannerBox
                textsize={"52px"}
                lineheight={"68px"}
                textcolor={"var(--secondary1)"}
                left={"4.5%"}
                bannerText={"Limited Edition Products"}
              />
            </SmallBanner>
          </Grid>
          <Grid item xs={6}>
            <SmallBanner
              bannerHight={"228px"}
              backgroundImage={"/assets/offer1.png"}
              imageAlt={"15% Off And More!"}
              onClickEvent={() => { navigate('/results?page_title=Products with 15% Sale&route=discount-edition&value=15') }}
            >
              <BannerBox
                textsize={"40px"}
                lineheight={"52px"}
                textcolor={"var(--secondary2)"}
                left={"61%"}
                bannerText={"15% Off And More!"}
              />
            </SmallBanner>
          </Grid>
          <Grid item xs={6}>
            <SmallBanner
              bannerHight={"228px"}
              backgroundImage={"/assets/offer2.png"}
              imageAlt={"Popular In The Community!"}
              onClickEvent={() => { navigate('/results?page_title=Popular Products&route=popular&value=4.5') }}
            >
              <BannerBox
                textsize={"40px"}
                lineheight={"52px"}
                textcolor={"var(--primary)"}
                left={"50%"}
                bannerText={"Popular In The Community!"}
              />
            </SmallBanner>
          </Grid>
        </CardsSection>
      </CustomContainer>
    </>
  );
};

export default Home;
