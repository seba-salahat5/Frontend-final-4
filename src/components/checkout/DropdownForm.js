import styled from 'styled-components';
import { Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledButton = styled(IconButton)`
  && {
    display: flex;
    width: 44.25rem;
    height: 3.75rem;
    padding: 1rem 0rem;
    justify-content: space-between !important;
    align-items: center;
    align-self: stretch;
    color: var(--Dark, #13101E);
  }
`;
function DropdownForm({ handleClick, showForm, name }) {
    return (
        <StyledButton onClick={handleClick} sx={{
            "&.MuiButtonBase-root:hover": {
                backgroundColor: "transparent"
            }
        }}>
            <Typography
                color="inherit"
                fontFamily="Inter"
                fontSize="1.25rem"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="1.625rem"
            >
                {name}
            </Typography>
            {showForm ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </StyledButton>
    );
}

export default DropdownForm;