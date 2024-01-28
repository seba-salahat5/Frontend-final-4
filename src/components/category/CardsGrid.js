import styled from 'styled-components';
import ProductCard from '../shared/ProductCard';

const GridLayout = styled.div`
  width: 57.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 4.25rem 2rem;
  @media (max-width: 510px) {
    gap: 1.375;
    width: 20.125rem;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
`;

const CardsGrid = ({ cards }) => {
  return (
    <GridLayout>
      {cards.map((item) => (
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
      ))}
    </GridLayout>
  );
}

export default CardsGrid;