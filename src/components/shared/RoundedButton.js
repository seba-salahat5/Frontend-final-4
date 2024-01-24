import * as React from 'react';
import { Button, Typography } from '@mui/material';
function RoundedButton({ buttonText, ButtonIcon, onClickEvent, isfilled, showLeftIcon, showRightIcon, is_mobile, width }) {

    return (
        <Button onClick={onClickEvent} startIcon={showLeftIcon && <ButtonIcon />} endIcon={showRightIcon && <ButtonIcon />}
            disableRipple
            sx={{
                backgroundColor: isfilled ? 'var(--primary)' : 'var(--bright)',
                color: isfilled ? 'var(--bright)' : 'var(--primary)',
                border: '1px solid var(--primary)',
                borderRadius: '8px',
                paddingInline: '20px',
                paddingBlock: '10px',
                width: {width},
                gap: '8px',
                '&:hover': {
                    backgroundColor: isfilled ? 'var(--primary)' : 'var(--bright)',
                },
                '&:active': {
                    backgroundColor: isfilled ? 'var(--primary)' : 'var(--bright)',
                },
            }}>
            <>
                {!is_mobile && (<Typography sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    fontFamily: "'Inter', sans-serif",
                }}>
                    {buttonText}
                </Typography>)}
            </>
        </Button>
    );
}

export default RoundedButton;