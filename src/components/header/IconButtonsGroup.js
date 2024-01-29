import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import MyCartHover from "../my-cart/MyCartHover";

export default function IconButtonsGroup() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }} />

      <IconButton aria-label="wishlist" color="inherit" sx={{ px: "7px" }}>
        <FavoriteBorderRoundedIcon fontSize="medium" />
      </IconButton>
      <IconButton
        href="/Frontend-final-4/signin"
        aria-label="profile"
        color="inherit"
        sx={{ px: "7px" }}
      >
        <PermIdentityRoundedIcon fontSize="medium" />
      </IconButton>
      <Box
        sx={{
          justifyContent: "flex-end",
          position: "relative",
          display: "inline-block", // Added this to keep them in the same line
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <IconButton
          href="/Frontend-final-4/mycart"
          aria-label="my cart"
          color="inherit"
          sx={{ pl: "7px", pr: "0px" }}
        >
          <ShoppingBagOutlinedIcon fontSize="medium" />
        </IconButton>
        {isHovering && <MyCartHover />}
      </Box>
    </Box>
  );
}
