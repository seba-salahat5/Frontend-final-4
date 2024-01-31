import { Link } from "react-router-dom";
import styled from "styled-components";

const BrandLogo = styled.img`
  width: 168px;
  @media (max-width: 800px) {
    width: 95px;
  }
`;

const BrandsButton = ({ image, id }) => {
  const category = "product-brand";
  const categoryLink = `/category?id=${id}&category=${category}`;
  return (
    <Link to={categoryLink}>
      <BrandLogo
        src={process.env.PUBLIC_URL + "/assets/brands/" + image + ".png"}
        alt="Brands Logo"
      />
    </Link>
  );
};

export default BrandsButton;
