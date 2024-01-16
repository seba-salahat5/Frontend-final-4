import styled from "styled-components";
import HandPickedButton from "./HandpickedButton";

const HandPickedTitle = styled.h2`
  padding-block: 24px;
  color: var(--bright);
  font-family: Inter;
  font-size: 34px;
  @media (max-width: 600px) {
    font-size: 14px;
    padding-block: 14px;
  }
`;
const HandPickedBox = styled.div`
  height: 422px;
  flex-shrink: 0;
  background: var(--primary);
  padding: 20px 24px;
  @media (max-width: 600px) {
    height: 390px;
    padding: 10px 24px;
  }
`;

const ButtonsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

const HandPickedCollections = () => {
  return (
    <HandPickedBox>
      <HandPickedTitle>Handpicked Collection</HandPickedTitle>
      <ButtonsContainer>
        <HandPickedButton
          image={"personal-care.png"}
          category={"Personal Care"}
        />
        <HandPickedButton image={"handbags.png"} category={"Handbags"} />
        <HandPickedButton
          image={"wrist-watches.png"}
          category={"Wrist Watches"}
        />
        <HandPickedButton image={"sun-glasses.png"} category={"Sun Glasses"} />
      </ButtonsContainer>
    </HandPickedBox>
  );
};

export default HandPickedCollections;
