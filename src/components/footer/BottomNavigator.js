import * as React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from "react-router-dom";

export default function BottomNavigator() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <Box sx={{
      position: 'sticky',
      bottom: '0px',
      zIndex: 3,
      color: 'var(--light-text)',
      '&.MuiBottomNavigationAction-root.Mui-selected': {
        color: 'var(--primary)',
      },
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          switch (newValue) {
            case "Home":
              navigate('/') 
              break;
            case "Categories":
              navigate('/') 
              break;
            case "Wishlist":
              navigate('/results?page_title=Wishlist') 
              break;
            case "Cart":
              navigate('/mycart')
              break;
            default:
            // code block
          }
        }}
      >
        <BottomNavigationAction label="Home" value="Home" icon={<HomeOutlinedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Categories" value="Categories" icon={<WidgetsOutlinedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Wishlist" value="Wishlist" icon={<FavoriteBorderRoundedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Cart" value="Cart" icon={<ShoppingBagOutlinedIcon />} sx={{ color: 'inherit' }} />
      </BottomNavigation>
    </Box>
  );
}
