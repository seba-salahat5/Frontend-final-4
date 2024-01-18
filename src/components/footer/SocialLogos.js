import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, IconButton } from '@mui/material';

const LogoImage = styled('img')(() => ({
    width: '38px',
    height: '38px',
}));
const SocialLogos = ({ logos }) => {
    const imageSrc = process.env.PUBLIC_URL + `/assets/social-media/`;
    return (
        <Stack direction={'row'} spacing={2} mt={'24px'}>
            {logos.map((logo) => (
                <IconButton key={logo.name} aria-label={logo.name} sx={{padding: '0px'}}>
                    <LogoImage src={imageSrc + logo.svg} alt={logo.name} />
                </IconButton>
            ))}

        </Stack>
    );
}

export default SocialLogos;