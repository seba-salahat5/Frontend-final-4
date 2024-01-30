import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import RoundedButton from "../shared/RoundedButton";

const PlaceOrderButton = ({ customWidth }) => {
  const navigate = useNavigate();

  const placeOrder = () => {
    navigate("/Checkout");
  };

  return (
    <RoundedButton
      onClickEvent={placeOrder}
      buttonText={"Place Order"}
      isfilled={true}
      width={customWidth}
    ></RoundedButton>
  );
};

export default PlaceOrderButton;
