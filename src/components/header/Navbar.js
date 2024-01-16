import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography} from '@mui/material';

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
  
function Navbar({navItems}) {
    return ( <Box sx={{ flexGrow: 1, alignItems: 'baseline' }}>
    {navItems.map((navItem) => (
      <Button key={navItem} sx={{ m: '5px'}}>
        <CustomizedTypography>
          {navItem}
        </CustomizedTypography>
      </Button>
    ))}
  </Box> );
}

export default Navbar;