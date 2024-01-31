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
export default function RatingsPanel({ ratings, reviews, avgRating }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const totalRatings = ratings.length || 1;
    const ratingsMap = {};
    const result = [];

    if(ratings){
        ratings.forEach(({ rating_value, countRating }) => {
            ratingsMap[rating_value] = countRating;
        });
    
        for (let i = 5; i >= 1; i--) {
            const countRating = ratingsMap[i] || 0;
            const rating_value = `${i}.0`;
            result.push({
                rating_value,
                countRating,
            });
        }
    }
    return (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
            {ratings &&             <Box sx={{ width: 200 }}>
                <Stack direction={'row'} sx={{ alignItems: 'center' }}>
                    <RatingTitle>{avgRating || "0.0"}</RatingTitle>
                    <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                    <RatingTitle>Average Rating</RatingTitle>
                </Stack>
                {result.map((item) => (
                    <Stack key={item.rating_value} direction="row" sx={{ mb: 1, gap: '8px' }} alignItems="center">
                        {item.rating_value}
                        <Slider
                            max={100}
                            min={0}
                            value={(item.countRating / totalRatings) * 100}
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
            </Box>}
            {isMobile && <Divider sx={{ width: '100%', borderBottomWidth: 'thick', marginTop: '24px', marginBottom: '24px' }} />}
            {reviews && <Box>
                {reviews.map((item) => (
                    <Box mb={3} key={item.rating_id}>
                        <Stack direction={'row'} spacing={4}>
                            <Stack direction={'row'} spacing={1} bgcolor={'var(--accent)'}>
                                <RatingTitle sx={{ fontSize: '16px' }}>{item.rating_value}</RatingTitle>
                                <StarIcon sx={{ width: '20px', height: '20px', color: 'var(--highlight)' }} />
                            </Stack>
                            <Box>
                                <RatingTitle>{item.first_name} {item.last_name}</RatingTitle>
                                <RatingTitle sx={{ fontWeight: 500, color: 'var(--summary-text)' }}>{item.date}</RatingTitle>
                            </Box>
                        </Stack>
                        <Box mt={'12px'}>
                            <RatingTitle>
                                {item.comment}
                            </RatingTitle>
                        </Box>
                    </Box>
                ))}
            </Box>}
        </Stack>
    );
}