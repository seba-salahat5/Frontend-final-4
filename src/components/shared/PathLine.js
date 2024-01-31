import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack, Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";

export default function PathLine() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const pathSegments = pathname.split('/').filter((segment) => segment !== '');
    const breadcrumbs = [
        <Link onClick={() => { navigate('/') }} underline="hover" key="1" color="var(--primary)" fontWeight={'500'}>
            Home
        </Link>,
    ];


    breadcrumbs.push(pathSegments.map((segment, index) => (
        <Link
            key={index}
            onClick={() => { navigate(`/${pathSegments.slice(0, index + 1).join('/')}`) }}
            underline="hover"
            color="var(--primary)"
            fontWeight={'500'}
        >
            {segment}
        </Link>
    )));

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                {breadcrumbs.length === 0 ? (
                    <Typography color="var(--summary-text)" fontWeight={'500'}>
                        Home
                    </Typography>
                ) : (
                    breadcrumbs
                )}
            </Breadcrumbs>
        </Stack>
    );
}