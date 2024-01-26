import * as React from 'react';
import { Box, Stack, Slider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const RatingTitle = styled(Typography)(() => ({
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',

}));
export default function RatingsPanel({ rating }) {
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
        <Stack>
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
        </Stack>
    );
}