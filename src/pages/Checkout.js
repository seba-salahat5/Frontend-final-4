import styled from 'styled-components';
import React from 'react';
import PathLine from '../components/shared/PathLine';
import { Link, Typography, Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, TextField } from '@mui/material';

const ListTitle = styled.h1`
  color: var(--Primary, #1B4B66);
  font-family: Inter;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem;
  margin-top: 1.438rem;
  margin-bottom; 2.37rem;
`;
const StyledPathLine = styled.div`
  margin-top: 2.438rem;
`;
const CheckoutFormContainer = styled('div')(({ theme }) => ({
  width: '44.4rem',
  height: '23.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const FormSegment = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.9375rem',
});

const InputField = styled(TextField)({
  color: (theme) =>
    theme.palette.type === 'dark' ? '#fff' : theme.palette.text.primary,
  fontFamily: 'Inter',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
});


const Checkout = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    // Navigate to the home link
    navigate('/');
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="var(--primary)" fontWeight={'500'} href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="2" color="var(--summary-text)">
      Checkout
    </Typography>,
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1279px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1500px)');
  const isXl = useMediaQuery('(min-width:1700px)');
  const imageWidth = isMobile ? '100%' : (isMd ? 440 : (isLg ? 605 : (isXl ? 950 : 740)));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div>{!isMobile &&
    <StyledPathLine><PathLine breadcrumbs={breadcrumbs} /></StyledPathLine>}
    <ListTitle>Handbags</ListTitle>
    <Button onClick={handleMenu}>Open Checkout</Button>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      component={CheckoutFormContainer}
    >
      <FormSegment>
        <InputField label="Full Name" variant="outlined" />
      </FormSegment>
      <FormSegment>
        <InputField
          label="Mobile Number"
          variant="outlined"
          placeholder="+11"
        />
        <InputField label="Enter Number" variant="outlined" />
      </FormSegment>
      <FormSegment>
        <InputField label="Email Address" variant="outlined" />
        <InputField label="State" variant="outlined" />
      </FormSegment>
      <FormSegment>
        <InputField label="City" variant="outlined" />
        <InputField label="Pin Code" variant="outlined" />
      </FormSegment>
    </Menu>

  </div>;
};

export default Checkout;
