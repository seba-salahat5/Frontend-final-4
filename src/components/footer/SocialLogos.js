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
        <Stack direction={'row'}>
            {logos.map((logo) => (
                <IconButton key={logo.name} aria-label={logo.name}>
                    <LogoImage src={imageSrc + logo.svg} alt={logo.name} />
                </IconButton>
            ))}

        </Stack>
    );
}

export default SocialLogos;