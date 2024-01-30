import React, { useState, useEffect } from "react";
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

const CardsSection = styled(Grid)(() => ({
  marginTop: "70px",
}));

const Home = () => {
  /*   const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://158.176.1.165:3000/product/new-arrival";
        const pageNumber = 1;
        const numberOfItems = 10;

        const response = await axios.get(
          `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`
        );
        console.error("data:", response);
        console.log(response.data);
        setNewArrivals(response.data.items);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); */

  const [newArrivals, setNewArrivals] = useState([]);
  const apiUrl = "http://158.176.1.165:3000/product/new-arrival";
  const pageNumber = 1;
  const numberOfItems = 10;
  const { data, loading } = useGet(
    `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`
  );

  useEffect(() => {
    !loading && setNewArrivals(data.items);
  }, [data, loading]);

  return (
    <>
      <CustomContainer>
        <CarouselBanner />
        <NewArrivals cards={newArrivals} isMainComponent={true} />
      </CustomContainer>
      <HandPickedCollections />
      <CustomContainer>
        <BrandsList />
        <CardsSection container spacing={2}>
          <Grid item xs={12}>
            <SmallBanner
              bannerHight={"400px"}
              backgroundImage={"/assets/main offer.png"}
              imageAlt={"Limited Edition Products"}
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