import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const CustomizedTypography = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: '500',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'center',
  color: 'var(--text)',
  textTransform: 'none'
}));

function Navbar({ navItems }) {
  const navigate = useNavigate();
  return (<Box sx={{ flexGrow: 1, alignItems: 'baseline' }}>
    {navItems.slice(0, 5).map((navItem) => (
      <Button key={navItem.id} sx={{ m: '5px' }} onClick={() => { navigate(`/category/product-category/20/1/${navItem.id}/${navItem.name}`) }}>
        <CustomizedTypography>
          {navItem.name}
        </CustomizedTypography>
      </Button>
    ))}
  </Box>);
}

export default Navbar;