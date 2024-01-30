import { useLocation } from 'react-router-dom';
import { Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import ProductCard from '../components/shared/ProductCard';
import EmptyPanel from '../components/shared/EmptyPanel';

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



const ResultsPanel = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const pageTitle = params.get('page_title');
  //const searchPhrase = params.get('phrase');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const breadcrumbs = [
    <Link href="/Frontend-final-4/" underline="hover" key="1" color="var(--primary)" fontWeight={'500'}>
      Home
    </Link>,
    <Typography key="3" color="var(--summary-text)">
      {pageTitle}
    </Typography>,
  ];

  const emptyPageData = {
    image: pageTitle === 'Search Results' ? '/assets/emptySearch.png' : '/assets/emptyWishlist.png',
    heading: pageTitle === 'Search Results' ? 'Whoops!' : 'Well...',
    text: pageTitle === 'Search Results' ? 'We coudn’t find what you’re looking for. Try something else.' : 'It seems you have not added any products to for wishlist.'
  }
  return (
    <CustomContainer>
      {!isMobile && <PathLine breadcrumbs={breadcrumbs} />}
      {
        tempObj.length === 0 ? (
          <EmptyPanel image={emptyPageData.image} heading={emptyPageData.heading} text={emptyPageData.text} />
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
                    showRating={false}
                    price={item.price}
                    showOldPrice={item.showOldPrice}
                    ratersNumber={item.ratersNumber}
                    rating={item.rating}
                    showButton={true}
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

export default ResultsPanel;
