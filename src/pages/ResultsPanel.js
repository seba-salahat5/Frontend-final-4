import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import ProductCard from '../components/shared/ProductCard';
import EmptyPanel from '../components/shared/EmptyPanel';

import { useGet } from "../custom_hooks/useApi";


const ResultsPanel = () => {
  const [viewProducts, setViewProducts] = useState([]);
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const pageTitle = params.get('page_title');
  const apiRoute = params.get('route');
  const value = params.get('value');
  const apiUrl = `http://158.176.1.165:3000/product/${apiRoute}`;
  const pageNumber = 1;
  const numberOfItems = 10;

  const urlEndpoint = value !== undefined
  ? `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}&value=${value}`
  : `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  const { data, loading } = useGet(urlEndpoint);

  useEffect(() => {
    !loading && setViewProducts(data.items);
  }, [data, loading]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const emptyPageData = {
    image: pageTitle === 'Search Results' ? '/assets/emptySearch.png' : '/assets/emptyWishlist.png',
    heading: pageTitle === 'Search Results' ? 'Whoops!' : 'Well...',
    text: pageTitle === 'Search Results' ? 'We coudn’t find what you’re looking for. Try something else.' : 'It seems you have not added any products to for wishlist.'
  }
  return (
    <CustomContainer>
      {!isMobile && <PathLine />}
      {
        viewProducts.length === 0 ? (
          <EmptyPanel image={emptyPageData.image} heading={emptyPageData.heading} text={emptyPageData.text} />
        ) : (
          <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
              {viewProducts.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.product_id}>
                  <ProductCard
                    key={item.product_id}
                    image={item.image[0]}
                    productId={item.product_id}
                    productName={item.name}
                    productDescreption={item.sub_title}
                    discount={item.discount_value}
                    showRating={true}
                    price={item.price}
                    showOldPrice={item.discount_value !== 0 ? true : false}
                    ratersNumber={item.number_of_ratings}
                    rating={parseFloat(item.ratings)}
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
