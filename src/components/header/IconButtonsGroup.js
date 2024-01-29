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
      <Box
        sx={{
          justifyContent: "flex-end",
          position: "relative",
          display: "inline-block", // Added this to keep them in the same line
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            href="/Frontend-final-4/results?page_title=Wishlist"
            aria-label="wishlist"
            color="inherit"
            sx={{ px: "7px" }}
          >
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
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            sx={{ pl: "7px", pr: "0px" }}
          >
            <IconButton
              href="/Frontend-final-4/mycart"
              aria-label="my cart"
              color="inherit"
            >
              <ShoppingBagOutlinedIcon fontSize="medium" />
            </IconButton>
            {isHovering && <MyCartHover />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
