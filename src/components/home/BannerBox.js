import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Arrow from './Arrow';

const DetailsBox = styled(Box)(({ textcolor, left, top }) => ({
    position: 'absolute',
    left: left,
    color: textcolor,
    overflow: 'hidden',
    height: '228px',
    maxHeight: '169px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 630px)': {
        justifyContent: 'center',
        maxHeight: '132px',
    },

}));

const BannerTitle = styled(Typography)(({ textsize, lineheight }) => ({
    fontSize: textsize,
    fontWeight: '700',
    lineHeight: lineheight,
    letterSpacing: '0em',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    zIndex: 1,
    fontFamily: "'Inter', sans-serif",
    '@media (max-width: 1050px)': {
        fontSize: '30px',
    },
    '@media (max-width: 850px)': {
        fontSize: '26px',
    },
    '@media (max-width: 750px)': {
        fontSize: '23px',
    },
    '@media (max-width: 630px)': {
        fontSize: '14px',
        lineHeight: 2,
    },
}));

const BannerBox = ({ textsize, lineheight, textcolor, bannerText, left, top }) => {
    return (
        <DetailsBox left={left} textcolor={textcolor}>
            <BannerTitle textsize={textsize} lineheight={lineheight}>
                {bannerText}
            </BannerTitle>
            <Arrow bgcolor={textcolor} color={textcolor} />
        </DetailsBox>
    );
}

export default BannerBox;