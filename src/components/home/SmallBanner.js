import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, ButtonBase } from '@mui/material';

const BannerImage = styled('img')(({imageHight}) => ({
    width: '100%',
    height: imageHight || 'auto',
    objectFit: 'cover',
    position: 'relative',
    zIndex: '0',
    borderRadius: '15px',

    '@media (max-width: 100px)': {
        height: '50%',
    },

    '@media (max-width: 510px)': {
        height: '30%',
    },
}));

const ImageButton = styled(ButtonBase)(({ buttonHight }) => ({
    width: '100%',
    position: 'relative',
    height: buttonHight || 'auto',
    '&:hover, &.Mui-focusVisible': {
        zIndex: 0,
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
    },
}));



const SmallBanner = ({ bannerHight, backgroundImage, imageAlt, children }) => {
    return (
        //<BannerImage imageHight={'400px'} imageSrc={process.env.PUBLIC_URL + '/assets/main offer.png'} alt={'Limited Edition'} />
        //<BannerImage imageHight={bannerHight} imageSrc={backgroundImage} alt={alternativeText} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            <ImageButton focusRipple>
                <BannerImage imageHight={bannerHight} src={process.env.PUBLIC_URL + backgroundImage} alt={imageAlt} />
                {children}
            </ImageButton>
        </Box>
    );
}

export default SmallBanner;