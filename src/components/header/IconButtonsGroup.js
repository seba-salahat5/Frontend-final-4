import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import MyCartHover from "../my-cart/MyCartHover";
import { useNavigate } from "react-router-dom";

export default function IconButtonsGroup() {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
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
          display: "inline-block",
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
            onClick={() => { navigate('/results?page_title=Wishlist') }}
            aria-label="wishlist"
            color="inherit"
            sx={{ px: "7px" }}
          >
            <FavoriteBorderRoundedIcon fontSize="medium" />
          </IconButton>
          <IconButton
              onClick={() => { navigate('/signin') }}
              aria-label="profile"
              id="profile"
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
              onClick={() => { navigate('/mycart') }}
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