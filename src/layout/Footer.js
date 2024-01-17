import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CustomContainer } from './CustomContainer.js';
import FooterList from '../components/footer/FooterList.js';
import SocialLogos from '../components/footer/SocialLogos.js';
import Location from '../components/footer/Location.js';
import { CATEGORIES, LOGOS, COLLECTIONS } from '../utils/constants.js';

const FooterComponent = styled(CustomContainer)(() => ({
  width: '100%',
  position: 'relative',
  top: '2626px',
  paddingBottom: '106px',
  paddingTop: '32px',
  paddingInline: '62px',
  backgroundColor: 'var(--primary)',
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

const CopyrightText = styled(Typography)(()=>({
fontSize: '14px',
fontWeight: '500',
lineHeight: '18px',
letterSpacing: '0em',
textAlign: 'right',
marginTop: '8px',
color: 'var(--light-text)',
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
        <Grid item xs={12} sm={6}>
          <Stack direction={'column'} sx={{alignItems: {xs: 'left',sm:'end'}}}>
            <SocialLogos logos={LOGOS} />
            <Location /> 
            <CopyrightText>© 2021 | Cora Leviene All Rights Reserved</CopyrightText>
          </Stack>
        </Grid>
      </Grid>
    </FooterComponent>
  );
};

export default Footer;
