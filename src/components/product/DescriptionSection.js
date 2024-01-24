import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Typography, Box, Stack } from '@mui/material';
import NewArrivals from "../home/NewArraival";

const StyledTab = styled(Tab)(({ index, current_value }) => ({
  backgroundColor: current_value === index ? 'var(--primary)' : 'var(--gray)',
  color: current_value === index ? 'var(--bright)!important' : 'var(--summary-text)',
  borderRadius: '8px',
  paddingInline: '18px',
  paddingBlock: '6px',
  width: '195px',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  letterSpacing: '0em',
  textAlign: 'left',
  textTransform: 'none'
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`description-tabpanel-${index}`}
      aria-labelledby={`description-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `description-tab-${index}`,
    'aria-controls': `description-tabpanel-${index}`,
  };
}

export default function DescriptionSection({ description, relatedProducts, reviews }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'var(--gray)', }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="description-tab"
          sx={{
            width: '100%',
            paddingInline: '16px',
            paddingBlock: '8px',
            borderRadius: '12px',
            gap: '24px',
          }}
        >
          <StyledTab current_value={value} index={0} label="Product Description" {...a11yProps(0)} />
          <StyledTab current_value={value} index={1} label="Related Products" {...a11yProps(1)} />
          <StyledTab current_value={value} index={2} label="Ratings and Reviews" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {description}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                mb: '24px'
              }}
            >
              You Might Also Like
            </Typography>
            <NewArrivals isMainComponent={false} cards={relatedProducts} />
          </>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Panel 3
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}