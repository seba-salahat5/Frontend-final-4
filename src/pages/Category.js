import styled from "styled-components";
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGet } from "../custom_hooks/useApi";

import PaginationBar from "../components/category/PaginationBar";
import { CustomContainer } from "../layout/CustomContainer";
import CarouselBanner from "../components/category/CategoryBanner";
import PathLine from "../components/shared/PathLine";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";

/**
 * fix ScrollBar in new arraivals
 * fix star counter
 * fix mui number of cards font
 * fix mui dropdown font-color
 */

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
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const id = params.get("id");
  const categoryType = params.get("category");

  let apiUrl;
  let urlEndpoint;
  let categotyTitle;

  if (categoryType === "product-brand") {
    const apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    categotyTitle = "Brand";
    urlEndpoint = `${apiUrl}?brand_id=${id}&page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  } else if (categoryType === "handpicked-products") {
    apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    categotyTitle = "Handpicked Collection";
    urlEndpoint = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}&category_id=${id}`;
  } else if (categoryType === "new-arrival") {
    apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    categotyTitle = "New Arrival";
    urlEndpoint = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  }
  const [categoryItems, setCategoryItems] = useState([]);
  const { data, loading } = useGet(urlEndpoint);

  useEffect(() => {
    !loading && setCategoryItems(data);
  }, [data, loading]);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    // Navigate to the home link
    navigate("/");
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="var(--primary)"
      fontWeight={"500"}
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="2" color="var(--summary-text)">
      Handbag
    </Typography>,
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  /*const isMd = useMediaQuery('(min-width:900px) and (max-width:1279px)');
  const isLg = useMediaQuery('(min-width:1280px) and (max-width:1500px)');
  const isXl = useMediaQuery('(min-width:1700px)');
  const imageWidth = isMobile ? '100%' : (isMd ? 440 : (isLg ? 605 : (isXl ? 950 : 740)));*/
  return (
    <CustomContainer>
      <CarouselBanner />
      {!isMobile && (
        <StyledPathLine>
          <PathLine breadcrumbs={breadcrumbs} />
        </StyledPathLine>
      )}
      <ListTitle>{categotyTitle}</ListTitle>
      <ListLayout>
        {!isMobile && <ListingOptions />}
        <CardsGrid cards={categoryItems.items} />
        <PaginationBar />
      </ListLayout>
    </CustomContainer>
  );
};

export default Category;
