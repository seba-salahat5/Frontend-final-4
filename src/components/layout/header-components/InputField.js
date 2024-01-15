import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = styled('div')(() => ({
    paddingLeft: '8px',
    paddingRight: '8px',
    position: 'relative',
    width: '100%',
    minWidth: '362px',
    height: '44px',
    borderRadius: '4px',
    backgroundColor: 'var(--background-gray)',
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-start',
}));

const SearchIconWrapper = styled('div')(() => ({
    color: 'var(--text)',
    fontSize: 'large',
    width: '24px',
    height: '24px',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'var(--text)',
    fontFamily: 'Inter, sans-serif',
    width: '336px',
    paddingLeft: '8px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '32px',
    },
  }));


export default function InputField({ placeholder }) {
    return (
        <Search>
        <SearchIconWrapper>
          <SearchOutlinedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
          name='search'
        />
      </Search>
    );
};