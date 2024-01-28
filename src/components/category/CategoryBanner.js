import Carousel from "react-material-ui-carousel";
import { categoryCarouselData } from "../../utils/categoryBannerData";
import styled from "styled-components";

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
  @media (max-width: 510px) {
    display: none;
  }
`;

const AdBox = styled.div`
  width: 700px;
  height: 316px;
  flex-shrink: 0;
  position: absolute;
  top: 25%;
  right:-100px;
  padding: 25px;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 500px;
    height: 320px;
    padding: 20px 20px;
    top: 35%;
    right:-90px;
  }
  @media (max-width: 510px) {
    display: none;
    width: 200px;
    height: 100px;
    padding: 7px 12px;
  }
`;

const CarouselTitle = styled.h2`
  color: var(--Dark, #13101E);
  font-family: Inter;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 510px) {
    font-size: 24px;
  }
`;

const CarouselSubTitle = styled.h3`
  color: var(--Dark, #13101E);
  font-family: Inter;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
  @media (max-width: 510px) {
    font-size: 12px;
  }
`;
const CarouselShow = styled.div`
  @media (max-width: 510px) {
    display: none;
  }
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
      {categoryCarouselData.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </CustomedCarousel>
  );
}

function Item(props) {
  return (
    <CarouselShow>
      <CarouselImage src={ process.env.PUBLIC_URL+ props.item.src} alt={props.item.alt} />
      <AdBox>
        <CarouselTitle>{props.item.carouselTitle}</CarouselTitle>
        <CarouselSubTitle>{props.item.carouselSubTitle}</CarouselSubTitle>
      </AdBox>
    </CarouselShow>
  );
}
export default CarouselBanner;
