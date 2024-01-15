import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Container, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import InputField  from "../components/shared/InputField.js";
import LeftDrawer from '../components/shared/LeftDrawer.js';
import {CATEGORIES} from "../utils/constants.js";

const CustomizedAppBar = styled(AppBar)(() => ({
  width: '100%',
  height: '80px',
  backgroundColor: 'var(--bright)'
}));

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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomizedAppBar position="static" sx={{ boxShadow: 0 }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <img src='/assets/logo.png' alt='logo' />
          {isMobile
            ? (<LeftDrawer/>)
            : (<Box sx={{ flexGrow: 1 ,display: { xs: 'none', md: 'flex' }, alignItems: 'baseline' }}>
              {CATEGORIES.map((category) => (
                <Button key={category} sx={{ m: 1.0, display: 'block' }}>
                  <CustomizedTypography>
                    {category}
                  </CustomizedTypography>
                </Button>
              ))}
            </Box>)
          }
          <InputField placeholder="Search for products or brands....."/>
        </Toolbar>
      </Container>
    </CustomizedAppBar>
  );
};

export default Header;