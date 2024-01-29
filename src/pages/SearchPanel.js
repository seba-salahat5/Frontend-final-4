import { Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import ProductCard from '../components/shared/ProductCard';

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

const StyledImg = styled('img')(() => ({
  width: '350px',
  height: '350px',
  borderRadius: '16px',
  '@media (max-width: 1200px)': {
    width: '242.54px',
    height: '245.04px',
  },
}));

const SearchPanel = ({ searchResult }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const breadcrumbs = [
    <Link href="/Frontend-final-4/" underline="hover" key="1" color="var(--primary)" fontWeight={'500'}>
      Home
    </Link>,
    <Typography key="3" color="var(--summary-text)">
      Search results
    </Typography>,
  ];
  return (
    <CustomContainer>
      {!isMobile && <PathLine breadcrumbs={breadcrumbs} />}
      {
        tempObj.length === 0 ? (
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <StyledImg src={process.env.PUBLIC_URL + '/assets/emptySearch.png'} alt={'Results Not Found'} />
            <Typography sx={{
              mt: '24px',
              fontFamily: 'Inter',
              fontSize: '28px',
              fontWeight: 700,
              lineHeight: '26px',
            }}>
              Whoops!
            </Typography>
            <Typography
              sx={{
                mt: '16px',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '18px',
              }}>
              We coudn’t find what you’re looking for. Try something else.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
              {tempObj.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.productId}>
                  <ProductCard
                    key={item.productId}
                    image={item.image}
                    productName={item.productName}
                    productDescreption={item.productDescreption}
                    discount={item.discount}
                    showRating={item.showRating}
                    price={item.price}
                    showOldPrice={item.showOldPrice}
                    ratersNumber={item.ratersNumber}
                    rating={item.rating}
                  />
                </Grid>

              ))}
            </Grid>
          </Box>
        )
      }
    </CustomContainer >
  );
};

export default SearchPanel;
