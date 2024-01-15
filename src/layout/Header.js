import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Box, useMediaQuery, useTheme } from '@mui/material';
import InputField from "../components/layout/header-components/InputField.js";
import LeftDrawer from '../components/layout/header-components/LeftDrawer.js';
import Navbar from '../components/layout/header-components/Navbar.js';
import IconButtonsGroup from '../components/layout/header-components/IconButtonsGroup.js';
import { CATEGORIES } from "../utils/constants.js";

const CustomizedAppBar = styled(AppBar)(() => ({
  width: '100%',
  height: '80px',
  backgroundColor: 'var(--bright)',
  color: 'var(--text)'
}));

const CustomizedImage = styled('img')(() => ({
  marginRight: '15px',
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomizedAppBar position="static" sx={{ boxShadow: 0, py: 1 }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          {isMobile
            ? (
              <>
                <LeftDrawer />
                <CustomizedImage src='/assets/logo.png' alt='logo' />
              </>
            )
            : (<>
              <CustomizedImage src='/assets/logo.png' alt='logo' />
              <Navbar navItems={CATEGORIES}/>
            </>)
          }
          <Box sx={{ display: 'flex' }}>
            <InputField placeholder="Search for products or brands....." sx={{ flexGrow: 2 }} />
            <IconButtonsGroup />
          </Box>
        </Toolbar>
      </Container>
    </CustomizedAppBar>
  );
};

export default Header;