import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import BottomNavigator from '../components/footer/BottomNavigator';

const FooterAccordion = styled(Accordion)(() => ({
  width: '100%',
  position: 'relative',
  bottom: '0',
}));

const AccordionSummaryText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: 'var(--summary-text)',
}));

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {isMobile
        ? (
          <>
            <FooterAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ width: '24px', height: '24px' }} />} aria-controls="footer-content" id="footer-header">
                <AccordionSummaryText>More about CORA’L</AccordionSummaryText>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Footer />
              </AccordionDetails>
            </FooterAccordion>
            <BottomNavigator />
          </>
        ) : (
          <Footer />
        )
      }
    </>
  );
};

export default Layout;
