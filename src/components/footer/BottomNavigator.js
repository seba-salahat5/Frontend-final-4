import * as React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function BottomNavigator() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: 'sticky',
          bottom: '0px',
          zIndex: 3,
          color: 'var(--light-text)',
          '&.MuiBottomNavigationAction-root.Mui-selected': {
            color: 'var(--primary)',
          },
        }}
      >
        <BottomNavigationAction label="Home" value="Home" icon={<HomeOutlinedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Categories" value="Categories" icon={<WidgetsOutlinedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Profile" value="Profile" icon={<PermIdentityRoundedIcon />} sx={{ color: 'inherit' }} />
        <BottomNavigationAction label="Cart" value="Cart" icon={<ShoppingBagOutlinedIcon />} sx={{ color: 'inherit' }} />
      </BottomNavigation>
    </Box>
  );
}
