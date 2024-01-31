import styled from "styled-components";
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import PaginationBar from "../components/category/PaginationBar";
import { CustomContainer } from "../layout/CustomContainer";
import { useEffect, useState } from "react";
import { useGet } from "../custom_hooks/useApi";
import { useLocation } from "react-router-dom";

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
  margin-top: 3.24rem;
  margin-bottom; 2.37rem;
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
  } else if (categoryType === "limited-edition") {
    apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    categotyTitle = "Limited Edition Collection";
    urlEndpoint = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  } else if (categoryType === "discount-edition") {
    apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    const value = 0.5;
    categotyTitle = "Discount Collection";
    urlEndpoint = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}&value=${value}`;
  } else if (categoryType === "new-arrival") {
    apiUrl = `http://158.176.1.165:3000/product/${categoryType}`;
    const pageNumber = 1;
    const numberOfItems = 10;
    urlEndpoint = `${apiUrl}?page_number=${pageNumber}&number_of_items=${numberOfItems}`;
  }
  const [categoryItems, setCategoryItems] = useState([]);
  const { data, loading } = useGet(urlEndpoint);

  useEffect(() => {
    !loading && setCategoryItems(data);
  }, [data, loading]);

  return (
    <CustomContainer>
      <ListTitle>{categotyTitle}</ListTitle>
      <ListLayout>
        <ListingOptions />
        <CardsGrid cards={categoryItems.items} />
        <PaginationBar />
      </ListLayout>
    </CustomContainer>
  );
};

export default Category;
