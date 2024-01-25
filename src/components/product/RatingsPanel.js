import * as React from 'react';
import { Box, Stack, Slider } from '@mui/material';

export default function RatingsPanel() {
    const totalRatings = 200;
    const ratings = [
        {
            rating: 5.0,
            count: 170,
        },
        {
            rating: 4.0,
            count: 150,
        },
        {
            rating: 3.0,
            count: 100,
        },
        {
            rating: 2.0,
            count: 50,
        },
        {
            rating: 1.0,
            count: 30,
        },

    ]
    return (
        <Box sx={{ width: 200 }}>
            {ratings.map((item) => (
                <Stack key={item.rating} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    {item.rating}
                    <Slider disabled max={100} min={0} value={(item.count / totalRatings)*100} aria-label="Disabled slider" sx={{ }}/>
                </Stack>
            ))}
        </Box>
    );
}