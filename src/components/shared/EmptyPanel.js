import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const StyledImg = styled('img')(() => ({
    width: '350px',
    height: '350px',
    borderRadius: '16px',
    '@media (max-width: 1200px)': {
        width: '242.54px',
        height: '245.04px',
    },
}));
const EmptyPanel = ({ image, heading, text }) => {
    return (
        <Box sx={{ textAlign: 'center', my: 4 }}>
            <StyledImg src={process.env.PUBLIC_URL + image} alt={'Results Not Found'} />
            <Typography sx={{
                mt: '24px',
                fontFamily: 'Inter',
                fontSize: '28px',
                fontWeight: 700,
                lineHeight: '26px',
            }}>
                {heading}
            </Typography>
            <Typography
                sx={{
                    mt: '16px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '18px',
                }}>
                {text}
            </Typography>
        </Box>
    );
}

export default EmptyPanel;