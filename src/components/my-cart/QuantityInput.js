import * as React from "react";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const StyledInputRoot = styled("div")`
  display: flex;
  align-items: center;
  width: 60px;
  margin-block: 5px;
  padding-block: 3px;
  border: 1px solid var(--dark);
  border-radius: 5px;
`;

const StyledInput = styled("input")`
  font-size: 0.875rem;
  border: none;
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#c7d0dd" : "#434d5b"};
  outline: 0;
  min-width: 0;
  width: 80px;
  text-align: center;

  &:focus {
    box-shadow: 0 0 0 3px
      ${({ theme }) => (theme.palette.mode === "dark" ? "#004c99" : "#b6daff")};
  }

  &:focus-visible {
    outline: 0;
  }
`;

const StyledButton = styled("button")`
  font-size: 8px;
  line-height: 30px;
  border: none;
  border-radius: 999px;
  background: var(--bright);
  color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#c7d0dd" : "#434d5b"};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#0059b2" : "#66b2ff"};
    border-color: none;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#f3f6f9" : "#fff"};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`;

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function QuantityInput() {
  return <NumberInput aria-label="Quantity Input" min={1} max={99} />;
}
