import BrandsButton from "./BrandButton";
import { brandsData } from "../../utils/brandsData";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";

const ShopByBrandsTitle = styled.h2`
  color: var(--Dark, #13101e);
  font-size: 34px;
  font-weight: 600;
  padding-bottom: 24px;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const ByBrandsBox = styled.div`
  padding-top: 67px;
  margin: auto;
  @media (max-width: 450px) {
    padding-top: 20px;
  }
`;

const BrandsList = () => {
  return (
    <ByBrandsBox>
      <Container maxWidth="xl" disableGutters>
        <ShopByBrandsTitle>Shop by Brands</ShopByBrandsTitle>
        <Grid container spacing={6} rowSpacing={1}>
          {brandsData.map((item) => (
            <Grid item xs={4} sm={4} md={2} key={item}>
              <BrandsButton image={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ByBrandsBox>
  );
};

export default BrandsList;
