import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Container, Stack, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { CustomContainer } from "./CustomContainer";
import InputField from "../components/header/InputField.js";
import LeftDrawer from '../components/header/LeftDrawer.js';
import Navbar from '../components/header/Navbar.js';
import IconButtonsGroup from '../components/header/IconButtonsGroup.js';
import { TOP_CATEGORIES } from "../utils/constants.js";

const CustomizedAppBar = styled(AppBar)(() => ({
  width: '100%',
  height: '80px',
  backgroundColor: 'var(--bright)',
  color: 'var(--text)'
}));

const CustomizedImage = styled('img')(() => ({
  marginRight: '15px',
  '@media (max-width: 1013px)': {
    display: 'none',
  },
}));

const Heading = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '26px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'var(--primary)',
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const imageSrc = process.env.PUBLIC_URL + `/assets/logo.png`;

  const [isSearchMode, setIsSearchMode] = React.useState(false);

  const handleSearchIconClick = () => {
    setIsSearchMode(true);
  };

  const handleBackIconClick = () => {
    setIsSearchMode(false);
  };
  return (
    <CustomContainer>
      <CustomizedAppBar position="static" sx={{ boxShadow: 0, py: 1, mb: 2 }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar disableGutters sx={{ display: 'flex', mt: { xs: '24px', md: '0px' }, justifyContent: 'space-between' }}>
            {
              isMobile
                ? !isSearchMode && (
                  <>
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" sx={{ alignItems: 'center' }}>
                      <LeftDrawer navItems={TOP_CATEGORIES} />
                      <Heading>Home</Heading>
                    </Stack>
                  </>
                ) : (
                  <>
                    <CustomizedImage src={imageSrc} alt='logo' />
                    <Navbar navItems={TOP_CATEGORIES} />
                  </>
                )
            }
            {isXSmall
              ? (
                <>
                  {isSearchMode
                    ? (
                      <Stack direction={'row'} display={'flex'}>
                        <IconButton aria-label="back" color="inherit" sx={{ px: '7px' }} onClick={handleBackIconClick}>
                          <ArrowBackIosIcon />
                        </IconButton>
                        <InputField placeholder="Search for products or brands....." />
                      </Stack>

                    ) : (
                      <Stack direction={'row'} alignItems={'center'}>
                        <IconButton aria-label="search" color="inherit" sx={{ px: '7px' }} onClick={handleSearchIconClick}>
                          <SearchOutlinedIcon fontSize="medium" />
                        </IconButton>
                        <IconButtonsGroup />
                      </Stack>
                    )
                  }
                </>
              ) : (
                <Stack direction={'row'} alignItems={'center'}>
                  <InputField placeholder="Search for products or brands....." />
                  <IconButtonsGroup />
                </Stack>
              )}
          </Toolbar>
        </Container>
      </CustomizedAppBar>
    </CustomContainer>
  );
};

export default Header;