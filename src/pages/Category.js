import styled from 'styled-components';
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import PaginationBar from '../components/category/PaginationBar';
import { CustomContainer } from '../layout/CustomContainer';
import CarouselBanner from '../components/category/CategoryBanner';
import PathLine from '../components/shared/PathLine';
import { Link, Typography, Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../custom_hooks/useApi.js'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ListTitle = styled.h1`
  color: var(--Primary, #1B4B66);
  font-family: Inter;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem;
  margin-top: 1.438rem;
  margin-bottom; 2.37rem;
`;

const StyledPathLine = styled.div`
  margin-top: 2.438rem;
`;

const Category = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const url = 'http://158.176.1.165:3000/product/';
  const { type, number_of_items, pageNumber } = useParams();
  const [countOfItems, setCountOfItems] = useState(20);

  // Use the custom hook directly within the component
  const { data, error, loading } = useGet(`${url}/${type}?page_number=${pageNumber}&number_of_items=${number_of_items}`);

  useEffect(() => {
    if (!loading && error) {
      setFetchError(error);
    } else if (!loading && data) {
      setItems(data.items);
      setCountOfItems(data.items_count)
      setFetchError(null);
    }
  }, [data, loading]);

  const handleClick = (event) => {
    event.preventDefault();
    // Navigate to the home link
    navigate('/');
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="var(--primary)" fontWeight={'500'} href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="2" color="var(--summary-text)">
      Handbag
    </Typography>,
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1279px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1500px)');
  const isXl = useMediaQuery('(min-width:1700px)');
  const imageWidth = isMobile ? '100%' : (isMd ? 440 : (isLg ? 605 : (isXl ? 950 : 740)));
  return <CustomContainer>
    <CarouselBanner />
    {!isMobile &&
      <StyledPathLine><PathLine breadcrumbs={breadcrumbs} /></StyledPathLine>}
    <ListTitle>Handbags</ListTitle>
    <ListLayout>
      {!isMobile && <ListingOptions />}
      <CardsGrid cards={items} />
      <PaginationBar countOfItems={countOfItems} />
    </ListLayout>
  </CustomContainer>;
};

export default Category;