import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Autocomplete } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate  } from 'react-router-dom';

const Search = styled('div')(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'relative',
  height: '44px',
  borderRadius: '4px',
  backgroundColor: 'var(--gray)',
  display: 'flex',
  flexGrow: 8,
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  minWidth: '362px',
  '@media (max-width: 1064px)': {
    minWidth: '300px',
  },
  '@media (max-width: 599px)': {
    minWidth: '450px',
  },
  '@media (max-width: 500px)': {
    minWidth: '350px',
  },
  '@media (max-width: 400px)': {
    minWidth: '250px',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  color: 'var(--text)',
  fontSize: 'large',
  width: '24px',
  height: '24px',
}));

export default function InputField({ placeholder }) {
  const navigate = useNavigate();
  const handleOptionSelected = (event, value) => {
    if (value) {
      navigate(`/search-results/${value}`);
    }
  };
  return (
    <Autocomplete
      freeSolo
      id="search input"
      disableClearable
      options={searchOptions.map((option) => option.name)}
      onChange={handleOptionSelected}
      renderInput={(params) => (
        <Search>
          <SearchIconWrapper>
            <SearchOutlinedIcon />
          </SearchIconWrapper>
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            variant='standard'
            sx={{ padding: 0, border: '0px solid' }}
          />
        </Search>
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
