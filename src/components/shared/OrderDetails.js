import { Stack } from "@mui/material";
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

const OrderDetailes = () => {
  return (
    <OrderBox>
      <Stack direction="row" justifyContent="space-between" mx={2}>
        <OrderText>Sub Total</OrderText>
        <OrderText>10$</OrderText>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mx={2}>
        <OrderText>Discount</OrderText>
        <OrderText>10$</OrderText>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mx={2}>
        <OrderText>Delivery Fee</OrderText>
        <OrderText>10$</OrderText>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mx={2}>
        <OrderGrand>Grand Total</OrderGrand>
        <OrderGrand>10$</OrderGrand>
      </Stack>
    </OrderBox>
  );
};

export default OrderDetailes;
