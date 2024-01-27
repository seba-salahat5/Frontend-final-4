import React from 'react';
import { Box, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

export default function IconButtonsGroup() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ justifyContent: "flex-end" }}>
        <IconButton aria-label="wishlist" color="inherit" sx={{ px: "7px" }}>
          <FavoriteBorderRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton
        href='/Frontend-final-4/signin'
          aria-label="profile"
          color="inherit"
          sx={{ px: "7px" }}
        >
          <PermIdentityRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton
          href='/Frontend-final-4/mycart'
          aria-label="my cart"
          color="inherit"
          sx={{ pl: "7px", pr: "0px" }}
        >
          <ShoppingBagOutlinedIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
}