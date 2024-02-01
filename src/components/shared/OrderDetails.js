import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderText = styled.h5`
  color: var(--Type-Low-Emphasis, #626262);
  font-size: 16px;
  font-weight: 500;
`;

const OrderGrand = styled.h4`
  color: var(--Type-High-Emphasis, #171520);
  font-size: 16px;
  font-weight: 600;
`;

const OrderDetailes = ({ cartData, productQuantity, productDiscount }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (cartData && cartData.price !== undefined) {
      setSubtotal(cartData.price * productQuantity);
    }
  }, [cartData, productQuantity]);

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (cartData && cartData.price !== undefined) {
      setDiscount((productDiscount / 100) * cartData.price * productQuantity);
    }
  }, [cartData, productDiscount, productQuantity]);

  const [totalGrand, setTotalGrand] = useState(0);

  useEffect(() => {
    if (cartData && productDiscount !== undefined) {
      setTotalGrand(() => {
        return productDiscount !== 0 ? subtotal - discount : subtotal;
      });
    }
  }, [cartData, subtotal, discount, productDiscount]);

  return (
    <>
      {cartData && (
        <OrderBox>
          <Stack direction="row" justifyContent="space-between" mx={2}>
            <OrderText>Sub Total</OrderText>
            <OrderText>${subtotal}</OrderText>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mx={2}>
            <OrderText>Discount</OrderText>
            <OrderText>-${discount}</OrderText>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mx={2}>
            <OrderText>Delivery Fee</OrderText>
            <OrderText>-$0</OrderText>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mx={2}>
            <OrderGrand>Total Grand</OrderGrand>
            <OrderGrand>${totalGrand}</OrderGrand>
          </Stack>
        </OrderBox>
      )}
    </>
  );
};

export default OrderDetailes;
