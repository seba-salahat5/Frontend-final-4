import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Stack, Grid, Divider, useMediaQuery, useTheme } from '@mui/material';
import FooterList from '../components/footer/FooterList.js';
import SocialLogos from '../components/footer/SocialLogos.js';
import Location from '../components/footer/Location.js';
import { CATEGORIES, LOGOS, COLLECTIONS } from '../utils/constants.js';

const FooterComponent = styled('div')(() => ({
  margin: 0,
  paddingInline: '20px',
  zIndex: '-3',
  width: '100%',
  paddingBlock: '32px',
  backgroundColor: 'var(--primary)',
  '@media (min-width: 900px)': {
    position: 'relative',
    marginTop: '68px',
    paddingInline: '62px',
    paddingBottom: '106px',
  },
}));

const ListTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '22px',
  letterSpacing: '0em',
  textAlign: 'left',
  paddingBottom: '5px',
  color: 'var(--bright)'
}));

const ListBox = styled(Box)(() => ({
  position: 'relative',
}));

const CopyrightText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '0em',
  marginTop: '8px',
  color: 'var(--light-text)',
}));

const StyledDivider = styled(Divider)(() => ({
  backgroundColor: 'var(--light-text)',
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex: 1,
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FooterComponent>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 3 }}>
        <Grid item xs={12} sm={6}>
          <Stack spacing={isMobile ? '24px' : '73px'} direction={isMobile ? 'column' : 'row'}>
            <ListBox>
              <ListTitle>Shop By Category</ListTitle>
              <FooterList list={CATEGORIES} />
            </ListBox>
            <ListBox>
              <ListTitle>Shop By Product</ListTitle>
              <FooterList list={COLLECTIONS} />
            </ListBox>
          </Stack>
        </Grid>
        <Box sx={{ width: '100%', display: isMobile ? 'block' : 'none' }}>
          <StyledDivider />
        </Box>
        <Grid item xs={12} sm={6}>
          <Stack direction={'column'} sx={{ alignItems: { sm: 'left', md: 'end' } }}>
            <SocialLogos logos={LOGOS} />
            <Location />
            <CopyrightText sx={{ textAlign: { sm: 'left', md: 'end' } }}>© 2021 | Cora Leviene All Rights Reserved</CopyrightText>
          </Stack>
        </Grid>
      </Grid>
    </FooterComponent>
  );
};

export default Footer;
