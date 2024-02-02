import styled from "styled-components";
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import PaginationBar from "../components/category/PaginationBar";
import { CustomContainer } from "../layout/CustomContainer";
import CarouselBanner from "../components/category/CategoryBanner";
import PathLine from "../components/shared/PathLine";
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGet } from "../custom_hooks/useApi.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/shared/ProductCard.js";


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
  const url = "http://158.176.1.165:3000/product/";
  const { type, number_of_items, pageNumber, id, name } = useParams();
  const [countOfItems, setCountOfItems] = useState(20);

  let tempUrl;

  if (id) {
    tempUrl = `${url}/${type}?page_number=${pageNumber}&number_of_items=${number_of_items}&id=${id}`;
  } else {
    tempUrl = `${url}/${type}?page_number=${pageNumber}&number_of_items=${number_of_items}`;
  }

  const { data, error, loading } = useGet(tempUrl);

  useEffect(() => {
    if (!loading && error) {
      setFetchError(error);
    } else if (!loading && data) {
      setItems(data.items);
      setCountOfItems(data.items_count);
      setFetchError(null);
    }
  }, [data, loading]);

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomContainer>
      <CarouselBanner />
      {!isMobile && (
        <StyledPathLine>
          <PathLine />
        </StyledPathLine>
      )}
      <ListTitle>{name || "Category"}</ListTitle>
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
          {items?.map((item) => (
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
        <PaginationBar countOfItems={countOfItems} />
      </Box>
    </CustomContainer>

  );
};

export default Category;
