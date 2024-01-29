import { Link } from "react-router-dom";
import styled from "styled-components";

const BrandLogo = styled.img`
  width: 168px;
  @media (max-width: 800px) {
    width: 95px;
  }
`;

const BrandsButton = ({ image }) => {
  return (
    <Link>
      <BrandLogo
        src={process.env.PUBLIC_URL + "/assets/brands/" + image}
        alt="Brands Logo"
      />
    </Link>
  );
};

export default BrandsButton;
