import styled from 'styled-components';
import ListingOptions from "../components/category/ListingOptions";
import CardsGrid from "../components/category/CardsGrid";
import { CustomContainer } from '../layout/CustomContainer';

/**
 * fix ScrollBar in new arraivals
 * fix star counter
 * fix mui number of cards font
 * fix mui dropdown font-color
 */

let tempObj = [
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 3.4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
  },
  {
    image: "../assets/newArrivals/pink-bag-small.png",
    productName: "Grande",
    productDescreption: "Blossom Pouch",
    discount: 0.5,
    showRating: true,
    price: 39.49,
    showOldPrice: true,
    ratersNumber: 43,
    rating: 4,
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
  margin-top: 3.24rem;
  margin-bottom; 2.37rem;
`;

const Category = () => {
  return<CustomContainer>
    <ListTitle>Handbags</ListTitle>
    <ListLayout>
      <ListingOptions />
      <CardsGrid cards={tempObj} />
    </ListLayout>
  </CustomContainer>;
};

export default Category;
