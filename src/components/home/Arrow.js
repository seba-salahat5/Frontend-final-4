import React from 'react';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Arrow = ({ bgcolor, color }) => {
  return (
    <Box
      width='51px'
      height='51px'
      borderRadius="50%" 
      bgcolor= {hexToRGBA(bgcolor, 0.15)}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        <ArrowForwardIcon style={{ color: {color}, opacity:1 }} />
    </Box>
  );
};
export default Arrow;