import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const HandPickedImage = styled.img`
  border-radius: 16px;
  width: 280px;
  height: 280px;
  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 510px) {
    width: 150px;
    height: 150px;
  }
`;
const HandPickedCategory = styled.h3`
  position: absolute;
  padding: 16px;
  bottom: 0;
  color: var(--text);

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 9px;
  }
`;

const HandPickedButton = ({ image, categoryName, id }) => {
  const category = "handpicked-products";
  const categoryLink = `/category/${category}/20/1/${id}`;
  return (
    <ButtonContainer to={categoryLink}>
      <HandPickedImage
        src={process.env.PUBLIC_URL + "/assets/hand-picked/" + image}
        alt={image}
      />
      <HandPickedCategory>{categoryName}</HandPickedCategory>
    </ButtonContainer>
  );
};

export default HandPickedButton;
