import styled from 'styled-components';
import RatingStars from './RatingStars';
import { Link } from "react-router-dom";

const SharedTextStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  font-family: 'Inter', sans-serif;
  color: var(--Type-Low-Emphasis, #626262);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;
const Card = styled(Link)`
  display: flex;
  width: 17.75rem;
  height: 23.1875rem;
  padding-bottom: 1.1875rem;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  color: inherit;
`;

const CardImage = styled.img`
  width: 17.875rem;
  height: 17.875rem;
  flex-shrink: 0;
  border-radius: 3%;
`;

const CardFrame = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const RatingsLayout = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

const PriceLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`;

// Apply Shared Text Styles to Components
const ProductNameText = styled(SharedTextStyles)`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const DescriptionText = styled(SharedTextStyles)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OldPriceText = styled(SharedTextStyles)`
  text-decoration-line: line-through;
`;

const DiscountText = styled(SharedTextStyles)`
  color: #E21D1D;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const RatingText = styled(SharedTextStyles)`
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--Primary, #1B4B66);
`;

// Component
function ProductCard({ button, type, image, productName, productDescreption, discount, showLabel, isTrending, showRating, rating, price, showOldPrice, ratersNumber }) {
  return (
    <Card to="/category">
      <CardImage src={image} alt={productName} />
      <CardFrame>
        <CardInfo>
          <ProductNameText>{productName}</ProductNameText>
          <DescriptionText>{productDescreption}</DescriptionText>
          {showRating && (
            <RatingsLayout>
              <RatingStars rating={rating} />
              <RatingText>{ratersNumber} Ratings</RatingText>
            </RatingsLayout>
          )}
          <PriceLayout>
            <div>${price}</div>
            {showOldPrice && (
              <>
                <OldPriceText>${price / discount}</OldPriceText>
                <DiscountText>{discount * 100}% OFF</DiscountText>
              </>
            )}
          </PriceLayout>
        </CardInfo>
        {/* Your SVG code here */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M12 20.5415C12 20.5415 2.625 15.2915 2.625 8.91651C2.62519 7.78976 3.01561 6.69785 3.72989 5.82643C4.44416 4.95501 5.4382 4.35786 6.54299 4.13652C7.64778 3.91517 8.79514 4.08329 9.78999 4.61229C10.7848 5.14129 11.5658 5.99852 12 7.03823L12 7.03824C12.4342 5.99853 13.2152 5.1413 14.21 4.6123C15.2049 4.08329 16.3522 3.91517 17.457 4.13652C18.5618 4.35786 19.5558 4.95501 20.2701 5.82643C20.9844 6.69785 21.3748 7.78976 21.375 8.91651C21.375 15.2915 12 20.5415 12 20.5415Z" stroke="#13101E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CardFrame>
    </Card>
  );
}

export default ProductCard;
