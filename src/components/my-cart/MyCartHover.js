import styled from "styled-components";
import PlaceOrderButton from "./PlaceOrderButton";
import HoverCartItem from "./HoverCartItem";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const SmallMyCartBox = styled.div`
  width: 394px;
  height: auto;
  background: var(--bright, #fff);
  position: absolute;
  right: 0;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 15px;
`;
const OrderTotal = styled.h4`
  color: var(--Type-High-Emphasis, #171520);
  font-size: 16px;
  font-weight: 600;
`;

const MyCartHover = () => {
  return (
    <>
      <SmallMyCartBox>
        <HoverCartItem
          productImage={"./assets/newArrivals/pink-bag-small.png"}nn
          brand={"Coach"}
          productName={" Leather Couch Bag"}
          quantity={2}
          price={"19.00"}
        />

        <Stack direction="row" justifyContent="space-between" mx={2} my={2}>
          <OrderTotal>Total</OrderTotal>
          <OrderTotal>10$</OrderTotal>
        </Stack>

        <Grid
          container
          direction="row"
          justifyContent="center"
          my={2}
          sx={{ gap: "45px" }}
        >
          <PlaceOrderButton
            to="/mycart"
            customWidth={" 360px"}
          ></PlaceOrderButton>
          <Link to="/category" sx={{ cursor: "pointer" }}>
            Continue Shopping
          </Link>
        </Grid>
      </SmallMyCartBox>
    </>
  );
};

export default MyCartHover;
