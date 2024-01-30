import styled, { css } from 'styled-components'
import React from 'react';
import PathLine from '../components/shared/PathLine';
import { Link, Typography } from '@mui/material';
import AddressForm from '../components/checkout/AddressForm';
import { useNavigate } from 'react-router-dom';
import { CustomContainer } from '../layout/CustomContainer';
import DropdownForm from '../components/checkout/DropdownForm';
import OrderDetailes from "../components/shared/OrderDetails";
import { Box, Grid } from "@mui/material";

const StyledPathLine = styled.div`
  margin-top: 2.438rem;
`;

const ListTitle = styled.h1`
  color: var(--Primary, #1B4B66);
  font-family: Inter;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem;
  margin-top: 1.438rem;
  margin-bottom: 2.37rem;
`;

const CheckoutLayout = styled.h1`
  display: flex;
  flex-direction: row;
  gap: 8.8rem;
`;

const Buttons = styled.h1`
  display: flex;
  width: 44.375rem;
  justify-content: space-between;
  align-items: flex-end;
`;

const BackButton = styled.button`
  display: flex;
  width: 8.5rem;
  padding: 0.625rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: -5.625rem;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const NextButton = styled.button`
  display: flex;
  width: 8.5rem;
  padding: 0.625rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--Primary, #1B4B66);
  border:0;
`;
const sharedTextStyle = css`
  text-align: center;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;
const UnderlinedText = styled.span`
  ${sharedTextStyle}
  color: ${(props) => props.theme.Primary || '#1B4B66'};
  text-decoration-line: underline;
`;
const NextText = styled.span`
  ${sharedTextStyle}
  color: var(--Bright, #FFF);
`;

const RightLayout = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: var(--Bright, #FFF);
  border: 0;
  width: 25.8rem;
`;

const SummeryTitle = styled.h3`
  color: var(--dark, #13101e);
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;


const Checkout = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [showPayment, setShowPayment] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handlePayment = () => {
    setShowPayment(!showPayment);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="var(--primary)"
      fontWeight={'500'}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        navigate('/');
      }}
    >
      Home
    </Link>,
    <Typography key="2" color="var(--summary-text)">
      Checkout
    </Typography>,
  ];

  return (
    <CustomContainer>
      <StyledPathLine>
        <PathLine breadcrumbs={breadcrumbs} />
      </StyledPathLine>
      <ListTitle>Handbags</ListTitle>
      <CheckoutLayout>
        <div>
          <DropdownForm showForm={showForm} handleClick={handleClick} name={"Add New Address"} />
          {showForm && <AddressForm />}
          <DropdownForm showForm={showPayment} handleClick={handlePayment} name={"Select Payment Method"} />
          <Buttons>
            <BackButton>
              <UnderlinedText>Back to Cart</UnderlinedText>
            </BackButton>
            <NextButton>
              <NextText>Next</NextText>
            </NextButton>
          </Buttons>
        </div>
        <RightLayout>
          <SummeryTitle>Order Summary</SummeryTitle>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  my: 0,
                  display: "flex",
                  p: 1,
                  borderBottom: "1px solid #626262",
                }}
              ></Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  my: 3,
                  display: "flex",
                  p: 1,
                  borderBottom: "1px solid #626262",
                }}
              >
                <SummeryTitle>Order Details</SummeryTitle>
              </Box>
              <OrderDetailes />
            </Grid>
          </Grid>
        </RightLayout>
      </CheckoutLayout>
    </CustomContainer >
  );
};

export default Checkout;
