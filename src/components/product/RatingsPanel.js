import * as React from 'react';
import { Box, Stack, Slider, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const RatingTitle = styled(Typography)(() => ({
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'var(--text)'
}));
export default function RatingsPanel({ rating }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const totalRatings = 200;
    const ratings = [
        {
            rating: "5.0",
            count: 170,
        },
        {
            rating: "4.0",
            count: 150,
        },
        {
            rating: "3.0",
            count: 100,
        },
        {
            rating: "2.0",
            count: 50,
        },
        {
            rating: "1.0",
            count: 30,
        },

    ]
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
            <Box sx={{ width: 200 }}>
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                    <RatingTitle>{rating}</RatingTitle>
                    <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                    <RatingTitle>Average Rating</RatingTitle>
                </Stack>
                {ratings.map((item) => (
                    <Stack key={item.rating} direction="row" sx={{ mb: 1, gap: '8px' }} alignItems="center">
                        {item.rating}
                        <Slider
                            max={100}
                            min={0}
                            value={(item.count / totalRatings) * 100}
                            aria-label="Disabled slider"
                            sx={{
                                '& .MuiSlider-rail': {
                                    backgroundColor: 'lightgray',
                                    height: 8,
                                    borderRadius: 4,
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: 'var(--primary)',
                                    height: 8,
                                    borderRadius: 4,
                                },
                                '& .MuiSlider-thumb': { display: 'none' }
                            }}
                        />
                    </Stack>
                ))}
            </Box>
            {isMobile && <Divider sx={{width:'100%', borderBottomWidth: 'thick', marginTop: '24px', marginBottom: '24px'}} />}
            <Box>
                <Box mb={3}>
                    <Stack direction={'row'} spacing={4}>
                        <Stack direction={'row'} spacing={1} bgcolor={'var(--accent)'}>
                            <RatingTitle sx={{ fontSize: '16px' }}>4.0</RatingTitle>
                            <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                        </Stack>
                        <Box>
                            <RatingTitle>Vincent Lobo</RatingTitle>
                            <RatingTitle sx={{ fontWeight: 500, color: 'var(--summary-text)' }}>20/03/2021</RatingTitle>
                        </Box>
                    </Stack>
                    <Box mt={'12px'}>
                        <RatingTitle>Must go for the class feel. </RatingTitle>
                        <RatingTitle sx={{ fontWeight: 500, lineHeight: '18px', color: 'var(--summary-text)' }}>
                            Totally amazing! I loved the material and the quality.
                            It has a jolly vibe in it which makes me feel happy everytime I put it on.
                        </RatingTitle>
                    </Box>
                </Box>
                <Box mb={3}>
                    <Stack direction={'row'} spacing={4}>
                        <Stack direction={'row'} spacing={1} bgcolor={'var(--accent)'}>
                            <RatingTitle sx={{ fontSize: '16px' }}>4.0</RatingTitle>
                            <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                        </Stack>
                        <Box>
                            <RatingTitle>Vincent Lobo</RatingTitle>
                            <RatingTitle sx={{ fontWeight: 500, color: 'var(--summary-text)' }}>20/03/2021</RatingTitle>
                        </Box>
                    </Stack>
                    <Box mt={'12px'}>
                        <RatingTitle>Must go for the class feel. </RatingTitle>
                        <RatingTitle sx={{ fontWeight: 500, lineHeight: '18px', color: 'var(--summary-text)' }}>
                            Totally amazing! I loved the material and the quality.
                            It has a jolly vibe in it which makes me feel happy everytime I put it on.
                        </RatingTitle>

                    </Box>
                </Box>
                <Box mb={3}>
                    <Stack direction={'row'} spacing={4}>
                        <Stack direction={'row'} spacing={1} bgcolor={'var(--accent)'}>
                            <RatingTitle sx={{ fontSize: '16px' }}>4.0</RatingTitle>
                            <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                        </Stack>
                        <Box>
                            <RatingTitle>Vincent Lobo</RatingTitle>
                            <RatingTitle sx={{ fontWeight: 500, color: 'var(--summary-text)' }}>20/03/2021</RatingTitle>
                        </Box>
                    </Stack>
                    <Box mt={'12px'}>
                        <RatingTitle>Must go for the class feel. </RatingTitle>
                        <RatingTitle sx={{ fontWeight: 500, lineHeight: '18px', color: 'var(--summary-text)' }}>
                            Totally amazing! I loved the material and the quality.
                            It has a jolly vibe in it which makes me feel happy everytime I put it on.
                        </RatingTitle>

                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}