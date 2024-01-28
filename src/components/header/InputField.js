/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Autocomplete, useMediaQuery, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = styled('div')(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'relative',
  height: '44px',
  borderRadius: '4px',
  backgroundColor: 'var(--gray)',
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  minWidth: '362px',
  '@media (max-width: 1064px)': {
    minWidth: '300px',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  color: 'var(--text)',
  fontSize: 'large',
  width: '24px',
  height: '24px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'var(--text)',
  fontFamily: 'Inter, sans-serif',
  width: '100%',
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
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isXSmall
        ? (
          <IconButton aria-label="search" color="inherit" sx={{ px: '7px' }}>
            <SearchOutlinedIcon fontSize="medium" />
          </IconButton>
        ) : (
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
        )}
    </>
  );
};*/

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, IconButton, Autocomplete, useMediaQuery, useTheme } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = styled('div')(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'relative',
  height: '44px',
  borderRadius: '4px',
  backgroundColor: 'var(--gray)',
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  minWidth: '362px',
  '@media (max-width: 1064px)': {
    minWidth: '300px',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  color: 'var(--text)',
  fontSize: 'large',
  width: '24px',
  height: '24px',
}));

/*const StyledTextField = styled(TextField)(({ theme }) => ({
  color: 'var(--text)',
  fontFamily: 'Inter, sans-serif',
  width: '100%',
  height: '44px',
  border: '0px',
  paddingLeft: '8px',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '0em',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '32px',
  },
}));*/

export default function InputField({ placeholder }) {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Autocomplete
      freeSolo
      id="search input"
      disableClearable
      options={searchOptions.map((option) => option.name)}
      renderInput={(params) => (
        <>
          {isXSmall
            ? (
              <IconButton aria-label="search" color="inherit" sx={{ px: '7px' }}>
                <SearchOutlinedIcon fontSize="medium" />
              </IconButton>
            ) : (
              <Search>
                <SearchIconWrapper>
                  <SearchOutlinedIcon />
                </SearchIconWrapper>
                <TextField
                  {...params}
                  placeholder= {placeholder}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  variant='standard'
                  sx={{padding:0, border: '0px solid'}}
                />
              </Search>
            )}
        </>
      )}
    />
  );
}

const searchOptions = [
  { "name": "Minimalist Fuzzy Hobo Bag" },
  { "name": "Curated Bags" },
  { "name": "Stylish Solid Handbag" },
  { "name": "Fashionable Simple Handbag" },
  { "name": "Hooded Sweatshirt With Slogan Print" },
  { "name": "Women's Letter Print Hooded Sweatshirt" },
  { "name": "Heart-Shaped Leopard Print Hoodie" },
];
