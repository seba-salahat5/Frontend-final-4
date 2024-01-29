import styled from "styled-components";
import CartTable from "../components/my-cart/CartTable";
import { CustomContainer } from "../layout/CustomContainer";
import OrderDetailes from "../components/shared/OrderDetails";
import { Box, Grid } from "@mui/material";
import ContinueShoppingButton from "../components/my-cart/ContinueShoppingButton";
import PlaceOrderButton from "../components/my-cart/PlaceOrderButton";

const MyHeaderTitle = styled.h2`
  color: var(--Primary, #1b4b66);
  font-size: 34px;
  font-weight: 600;
`;
const SummeryTitle = styled.h3`
  color: var(--dark, #13101e);
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;

const MyCartContainer = styled.div``;
const MyCart = () => {
  return (
    <CustomContainer>
      <MyHeaderTitle>My Cart</MyHeaderTitle>
      <MyCartContainer>
        <Grid container spacing={{ xs: 3, md: 17 }}>
          <Grid item xs={12} md={7}>
            <CartTable />
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                my: 3,
                display: "flex",
                p: 1,
                borderBottom: "1px solid #626262",
              }}
            >
              <SummeryTitle>Order Summary</SummeryTitle>
            </Box>
            <OrderDetailes />
            <Grid
              my={5}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="space-around"
            >
              <PlaceOrderButton customWidth={"180px"} />
              <ContinueShoppingButton />
            </Grid>
          </Grid>
        </Grid>
      </MyCartContainer>
    </CustomContainer>
  );
};

export default MyCart;
