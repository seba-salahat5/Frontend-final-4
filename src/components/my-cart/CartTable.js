import styled from "styled-components";
import CartItem from "./CartItem";
import { Box, Grid } from "@mui/material";

const StyledLabel = styled.label`
  display: flex;
  color: #626262;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const CartTable = () => {
  return (
    <>
      <Box
        sx={{
          my: 3,
          display: "flex",
          p: 1,
          borderBottom: "1px solid #626262",
        }}
      >
        <Grid container>
          <Grid item xs={7}>
            <StyledLabel>Product Name</StyledLabel>
          </Grid>
          <Grid item xs={5} container justifyContent="space-between">
            <Grid item>
              <StyledLabel>Price</StyledLabel>
            </Grid>
            <Grid item>
              <StyledLabel>Qty</StyledLabel>
            </Grid>
            <Grid item>
              <StyledLabel>Subtotal</StyledLabel>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Grid container>
          <CartItem
            productImage={"./assets/newArrivals/duffle 1.png"}
            brand={"Coach"}
            productName={" Leather Couch Bag"}
            quantity={2}
            price={"19.00"}
            showRemoveLink
          />

          <CartItem
            productImage={"./assets/newArrivals/pink-bag-small.png"}
            brand={"Coach"}
            productName={" Leather Couch Bag"}
            quantity={2}
            price={"19.00"}
            showRemoveLink
          />
        </Grid>
      </Box>
    </>
  );
};

export default CartTable;
