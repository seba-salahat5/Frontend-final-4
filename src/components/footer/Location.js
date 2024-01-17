import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const LocationText = styled(Typography)(() => ({
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'left',
}));

const CustomStack = styled(Stack)(()=>({
    color: 'var(--bright)',
    marginTop: '26px'
}));
const Location = () => {
    return (
        <CustomStack direction={'row'}>
            <PlaceOutlinedIcon sx={{width: '24px', height: '24px' }}/>
            <LocationText>United States</LocationText>
        </CustomStack>
    );
}

export default Location;