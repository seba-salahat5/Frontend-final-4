import styled from "styled-components";
import HandPickedButton from "./HandpickedButton";
import { Container } from "@mui/material";
import { handPickedData } from "../../utils/handPickedData";

const HandPickedTitle = styled.h2`
  padding-block: 24px;
  color: var(--bright);
  font-family: Inter;
  font-size: 34px;
  @media (max-width: 450px) {
    font-size: 14px;
    padding-block: 14px;
  }
`;

const HandpickedGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  justify-content: space-between;
  @media (max-width: 920px) {
    display: grid;
    gap: 16px;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  }
  @media (max-width: 430px) {
    display: grid;
    gap: 16px;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const HandPickedBox = styled.div`
  background: var(--primary);
  padding: 20px 24px;
  margin-top: 68px;
`;

const HandPickedCollections = () => {
  return (
    <HandPickedBox>
      <Container maxWidth="xl" disableGutters>
        <HandPickedTitle>Handpicked Collection</HandPickedTitle>
        <HandpickedGrid>
          {handPickedData.map((item) => (
            <HandPickedButton
              key={item.id}
              id={item.id}
              image={item.image}
              categoryName={item.categoryName}
            />
          ))}
        </HandpickedGrid>
      </Container>
    </HandPickedBox>
  );
};

export default HandPickedCollections;
