import styled from 'styled-components';
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import PaginationBar from '../components/category/PaginationBar';
import { CustomContainer } from '../layout/CustomContainer';
import CarouselBanner from '../components/category/CategoryBanner';
import PathLine from '../components/shared/PathLine';
import { Link, Typography, Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
/**
 * fix ScrollBar in new arraivals
 * fix star counter
 * fix mui number of cards font
 * fix mui dropdown font-color
 */

let tempObj = [
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 1,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 3.4,
    productId: 2,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 3,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 4,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 5,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 6,
  },
  {
    image: "/assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
    productId: 7,
  },
];

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
      <CardsGrid cards={tempObj} />
      <PaginationBar />
    </ListLayout>
  </CustomContainer>;
};

export default Category;
