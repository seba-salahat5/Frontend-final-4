import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled(Link)`
  width: 280px;
  height: 280px;
  flex-shrink: 0;
  color: inherit;
  text-decoration: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 1200px) {
    width: calc(200px + 10 * ((100vw - 440px) / 760));
    height: calc(200px + 10 * ((100vw - 440px) / 760));
  }
  @media (max-width: 940px) {
    width: 150px;
    height: 150px;
  }
`;

const HandPickedImage = styled.img`
  width: 100%;
`;
const HandPickedCategory = styled.h3`
  position: absolute;
  padding: 16px;
  bottom: 0;
  color: var(--hand-picked-text);

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 9px;
  }
`;

const HandPickedButton = ({ image, category }) => {
  return (
    <ButtonContainer>
      <HandPickedImage src={"./assets/hand-picked/" + image} alt={image} />
      <HandPickedCategory>{category}</HandPickedCategory>
    </ButtonContainer>
  );
};

export default HandPickedButton;
