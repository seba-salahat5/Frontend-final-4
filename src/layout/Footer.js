import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { CustomContainer } from './CustomContainer.js';
import FooterList from '../components/footer/FooterList.js';

const FooterComponent = styled(CustomContainer)(() => ({
  width: '100%',
  position: 'relative',
  top: '2626px',
  paddingBottom: '106px',
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
  top: '32px',
}));

const Footer = () => {
  const list = ['Handbags', 'Watches', 'Skincare', 'Jewellery', 'Apparels', 'Personal Care', 'Makeup', 'Eye Wear', 'Shoes', 'Sports']
  const collections = ['Featured', 'Brands', 'Trendy'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <FooterComponent>
      <Stack spacing={isMobile ? '24px' : '73px'} direction={isMobile ? 'column' : 'row'}>
        <ListBox>
          <ListTitle>Shop By Category</ListTitle>
          <FooterList list={list} />
        </ListBox>
        <ListBox>
          <ListTitle>Shop By Product</ListTitle>
          <FooterList list={collections} />
        </ListBox>
      </Stack>
    </FooterComponent>
  );
};

export default Footer;
