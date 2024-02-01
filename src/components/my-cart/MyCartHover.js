import styled from "styled-components";
import PlaceOrderButton from "./PlaceOrderButton";
import HoverCartItem from "./HoverCartItem";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useGet } from "../../custom_hooks/useApi";
import { useEffect, useState } from "react";

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
  const [cartData, setCartData] = useState();
  const { data, loading, error } = useGet("https://group4.iscovat.bid/cart/");

  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      setCartData(data);
    } else {
      setCartData([]);
    }
  }, [data, loading]);

  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalGrand, setTotalGrand] = useState(0);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      const totalSubtotal = cartData.reduce(
        (acc, item) => acc + item.price * item.cart_quantity,
        0
      );
      setSubtotal(totalSubtotal);
      const totalDiscount = cartData.reduce(
        (acc, item) =>
          acc + (item.discount_value / 100) * item.price * item.cart_quantity,
        0
      );
      setDiscount(totalDiscount);
      setTotalGrand(
        totalDiscount !== 0 ? totalSubtotal - totalDiscount : totalSubtotal
      );
    }
  }, [cartData]);

  return (
    <>
      <SmallMyCartBox>
        {cartData &&
          cartData.map((items) => (
            <HoverCartItem
              product_id={items.product_id}
              productImage={items.image[0].url}
              brand={items.name}
              productName={items.sub_title}
              quantity={items.cart_quantity}
              price={items.price}
            />
          ))}

        <Stack direction="row" justifyContent="space-between" mx={2} my={2}>
          <OrderTotal>Total</OrderTotal>
          <OrderTotal>${totalGrand}</OrderTotal>
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
