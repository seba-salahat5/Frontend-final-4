import React, {useState} from 'react';
import {Box, IconButton, MenuItem, Menu} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function IconButtonsGroup() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'icons-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="wishlist" color="inherit">
            <FavoriteBorderRoundedIcon />
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="profile" color="inherit">
            <PermIdentityRoundedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="my cart" color="inherit">
          <ShoppingBagOutlinedIcon />
        </IconButton>
        <p>My Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end' }}>
            <IconButton aria-label="wishlist" color="inherit" sx={{px: '7px'}}>
                <FavoriteBorderRoundedIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="profile" color="inherit" sx={{px: '7px'}}>
                <PermIdentityRoundedIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="my cart" color="inherit" sx={{pl: '7px', pr: '0px'}}>
              <ShoppingBagOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon fontSize="medium" />
            </IconButton>
          </Box>
      {renderMobileMenu}
    </Box>
  );
}

/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, Stack } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

const IconButtonsGroup = () => {
    return (
        <Stack direction="row" spacing={0} sx={{ flexGrow: 1, display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end' }}>
            <IconButton aria-label="wishlist">
                <FavoriteBorderRoundedIcon />
            </IconButton>
            <IconButton aria-label="profile">
                <PermIdentityRoundedIcon />
            </IconButton>
            <IconButton aria-label="cart" sx={{ pr: 0 }}>
                <ShoppingBagOutlinedIcon />
            </IconButton>
        </Stack>
    );
}

export default IconButtonsGroup;*/