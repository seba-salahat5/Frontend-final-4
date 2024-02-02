import Carousel from "react-material-ui-carousel";
import { carouselData } from "../../utils/carouselData";
import styled from "styled-components";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  @media (max-width: 100px) {
    height: 200px;
  }
  @media (max-width: 510px) {
    height: 120px;
  }
`;

const CustomedCarousel = styled(Carousel)`
  position: relative;
  width: auto;
  height: auto;
`;

const AdBox = styled.div`
  width: 700px;
  height: 316px;
  flex-shrink: 0;
  border-radius: 24px 0px 0px 24px;
  background: rgba(222, 222, 222, 0.7);
  backdrop-filter: blur(2.5px);
  position: absolute;
  bottom: 50%;
  top: 10%;
  right: 0;
  padding: 25px 47px;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 500px;
    height: 320px;
    padding: 20px 20px;
  }
  @media (max-width: 510px) {
    width: 200px;
    height: 100px;
    padding: 7px 12px;
  }
`;

const CarouselTitle = styled.h2`
  color: var(--Primary, #1b4b66);
  font-size: 60px;
  font-weight: 800;
  @media (max-width: 510px) {
    font-size: 24px;
  }
`;

const CarouselSubTitle = styled.h3`
  color: var(--Primary, #1b4b66);
  font-size: 28px;
  font-weight: 500;
  @media (max-width: 510px) {
    font-size: 12px;
  }
`;

const CustomedButton = styled.button`
  border: none;
  color: var(--bright);
  display: flex;
  width: 180px;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Primary, #1b4b66);
  font: inherit;
  position: absolute;
  bottom: 55px;
  cursor: pointer;
  @media (max-width: 1000px) {
    bottom: 20px;
  }
  @media (max-width: 510px) {
    display: none;
  }
`;

const CustomedEastIcon = styled(EastIcon)`
  color: white;
`;

function CarouselBanner(props) {
  return (
    <CustomedCarousel
      indicatorIconButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      {carouselData.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </CustomedCarousel>
  );
}

function Item(props) {
  const category = "handpicked-products";
  const categoryLink = `/category/${category}/20/1/${null}/${category}`;
  return (
    <>
      <CarouselImage
        src={process.env.PUBLIC_URL + props.item.src}
        alt={props.item.alt}
      />
      <Link to={categoryLink}>
        <AdBox>
          <CarouselTitle>{props.item.carouselTitle}</CarouselTitle>
          <CarouselSubTitle>{props.item.carouselSubTitle}</CarouselSubTitle>
          <CustomedButton>
            <CustomedEastIcon /> See more
          </CustomedButton>
        </AdBox>
      </Link>
    </>
  );
}
export default CarouselBanner;
