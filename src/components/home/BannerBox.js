import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Arrow from './Arrow';

const DetailsBox = styled(Box)(({ textcolor, maxWidth, left, top }) => ({
    position: 'absolute',
    left: left,
    top: top,
    maxWidth: maxWidth || '100%',
    color: textcolor,
}));

const BannerTitle = styled(Typography)(({ textsize, lineheight }) => ({
    fontSize: textsize,
    fontWeight: '700',
    lineHeight: lineheight,
    letterSpacing: '0em',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    zIndex: 1,
    fontFamily: "'Inter', sans-serif"
}));

const BannerBox = ({ textsize, lineheight, textcolor, bannerText, maxWidth, left, top }) => {
    return (
        <DetailsBox maxWidth={maxWidth} left={left} top={top}textcolor={textcolor}>
            <BannerTitle textsize={textsize} lineheight={lineheight}>
                {bannerText}
            </BannerTitle>
            <Arrow bgcolor={textcolor} color={textcolor} />
        </DetailsBox>
    );
}

export default BannerBox;