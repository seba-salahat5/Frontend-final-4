import styled from 'styled-components';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Options = styled.div`
  display: flex;
  width: 57rem;
  justify-content: space-between;
  align-items: center;
`;
const PageLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8125rem;
`;
const IconsLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

const CustomeAppIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  background-color: var(--Primary, #1B4B66);
  cursor: pointer;
`;
const CustomeSortIcon = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem 0.125rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const DetailText = styled.div`
  color: var(--Type-High-Emphasis, #171520);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;
const SortOptions = styled.div`
  display: flex;
  width: 29.75rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
const ToShow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 8.19rem;
  height: 3.25rem;
`;
const SortBy = styled.div`
  display: flex;
  width: 16.9375rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
const CustomTextField = styled(TextField)({
    borderRadius: '0.25rem',
    background: 'var(--Grey, #F1F1F1)',
    '& input': {
        width: '3.5rem',
        height: '3.25rem',
        textAlign: 'center',
        fontSize: '1rem',
        boxSizing: 'border-box',
        color: 'var(--Type-Low-Emphasis, #626262)',
    },
});

const CustomSelect = styled(Select)({
    width: '12.875rem',
    height: '3.25rem',
    background: 'var(--Grey, #F1F1F1)',
    borderRadius: '0.25rem',
    display: 'flex',
    padding: '1rem 0.75rem 1rem 1rem',
    alignItems: 'center',
    gap: '0.75rem',
    alignSelf: 'stretch',
});

const CustomSelectText = styled(DetailText)`
  color: 'var(--Type-Low-Emphasis, #626262)',
`;


const ListingOptions = ({ currntPage, totalPages, totalItems, numCardsToShow, sortBy }) => {
    const handleInput = (event) => {
        const value = event.target.value;
        const isValidInput = /^[1-9]$/.test(value); // Only allow digits 1-9
        if (!isValidInput) {
            event.preventDefault();
        }
    };
    return (
        <div>
            <Options>
                <PageLayout>
                    <IconsLayout>
                        <CustomeAppIcon>
                            <AppsIcon style={{ color: 'var(--bright, #FFFFFF)' }} />
                        </CustomeAppIcon>
                        <CustomeSortIcon>
                            <ViewListIcon style={{ color: 'var(--lightText, #B6B6B6)' }} />
                        </CustomeSortIcon>
                    </IconsLayout>
                    <DetailText>Showing {currntPage} - {totalPages} of {totalItems} items</DetailText>
                </PageLayout>
                <SortOptions>
                    <ToShow>
                        <DetailText>To Show:</DetailText>
                        <CustomTextField
                            onChange={handleInput}
                            defaultValue="9"
                            inputProps={{
                                maxLength: 1, // Restrict to one character
                            }}
                        />
                    </ToShow>
                    <SortBy>
                        <DetailText>Sort By</DetailText>
                        <CustomSelect
                            value={10}
                            IconComponent={KeyboardArrowDownIcon}
                            input={<Input />}
                            disableUnderline
                        >
                            <MenuItem value={10}><CustomSelectText>Position</CustomSelectText></MenuItem>
                            <MenuItem value={20}><CustomSelectText>Price</CustomSelectText></MenuItem>
                            <MenuItem value={30}><CustomSelectText>Ratings</CustomSelectText></MenuItem>
                        </CustomSelect>
                    </SortBy>
                </SortOptions>
            </Options>
        </div>
    );
};

export default ListingOptions;
