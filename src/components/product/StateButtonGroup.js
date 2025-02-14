import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Label = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "var(--dark)",
}));

const CustomButton = styled(Button)(() => ({
  padding: "0px",
  backgroundColor: "var(--bright)",
  color: "var(--dark)",
  "&:hover": {
    backgroundColor: "var(--bright)",
    color: "var(--dark)",
  },
  "&:active": {
    backgroundColor: "var(--bright)",
    color: "var(--dark)",
  },
}));

const StateText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "0em",
  textAlign: "center",
  paddingBlock: "4px",
  paddingInline: "9px",
  color: "var(--text)",
}));

const StateButtonGroup = ({ initialState, onStateChange, mt }) => {
  const [state, setState] = useState(initialState);

  const handleIncrement = () => {
    const newState = state + 1;
    setState(newState);
    onStateChange(newState);
  };

  const handleDecrement = () => {
    const newState = state - 1;
    setState(newState);
    onStateChange(newState);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center" mt={mt}>
      <Label>Quantity:</Label>
      <ButtonGroup
        variant="contained"
        aria-label="quantity change button group"
      >
        <CustomButton onClick={handleDecrement}>
          <RemoveIcon />
        </CustomButton>
        <StateText>{state}</StateText>
        <CustomButton onClick={handleIncrement}>
          <AddIcon />
        </CustomButton>
      </ButtonGroup>
    </Stack>
  );
};

export default StateButtonGroup;
