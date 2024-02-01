import styled from "styled-components";
import ProductCard from "../shared/ProductCard";

const GridLayout = styled.div`
  width: 57.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 4.25rem 2rem;
  @media (max-width: 510px) {
    gap: 1.375rem;  // Add 'rem' unit
    width: 20.125rem;
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));  // Change to auto-fit
  }
`;

const CardsGrid = ({ cards }) => {
  return (
    <GridLayout>
      {cards?.map((item) => (
        <ProductCard
          key={item.product_id}
          image={item.image[0]}
          productId={item.product_id}
          productName={item.name}
          productDescreption={item.sub_title}
          discount={item.discount_value}
          showRating={item.ratings}
          price={item.price}
          showOldPrice={item.discount_value !== 0 ? true : false}
          ratersNumber={item.number_of_ratings}
          width={"17.875rem"}
        />
      ))}
    </GridLayout>
  );
};

export default CardsGrid;
