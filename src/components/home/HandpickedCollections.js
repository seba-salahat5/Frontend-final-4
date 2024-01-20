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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  justify-items: center;
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const HandPickedBox = styled.div`
  background: var(--primary);
  padding: 20px 24px;
`;

const HandPickedCollections = () => {
  return (
    <HandPickedBox>
      <Container maxWidth="xl" disableGutters>
        <HandPickedTitle>Handpicked Collection</HandPickedTitle>
        <HandpickedGrid>
          {handPickedData.map((item) => (
            <HandPickedButton image={item.image} category={item.category} />
          ))}
        </HandpickedGrid>
      </Container>
    </HandPickedBox>
  );
};

export default HandPickedCollections;
