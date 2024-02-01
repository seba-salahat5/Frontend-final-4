import BrandsButton from "./BrandButton";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import { useGet } from "../../custom_hooks/useApi";
import { useEffect, useState } from "react";

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
  const [brands, setBrands] = useState([]);
  const { data, loading } = useGet("https://group4.iscovat.bid/brand");

  useEffect(() => {
    !loading && setBrands(data);
  }, [data, loading]);

  return (
    <ByBrandsBox>
      <Container maxWidth="xl" disableGutters>
        <ShopByBrandsTitle>Shop by Brands</ShopByBrandsTitle>
        <Grid container spacing={6} rowSpacing={1}>
          {brands.map((item) => (
            <Grid item xs={4} sm={4} md={2} key={item.brand_id}>
              <BrandsButton image={item.name} id={item.brand_id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ByBrandsBox>
  );
};

export default BrandsList;
