import styled from "styled-components";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';
import RoundedButton from "./RoundedButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";


const SharedTextStyles = styled.div`
  font-family: "Inter", sans-serif;
  color: var(--Type-Low-Emphasis, #626262);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; 
`;
const Card = styled(Link)`
  display: flex;
  width: ${(props) => props.width || "100%"};
  max-width: 20.875rem;
  padding-bottom: 1.1875rem;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  color: inherit;
  @media (max-width: 510px) {
    width: 9.375rem;
    gap: 0.5625rem;
  }
`;

const CardImage = styled.img`
  width: ${(props) => props.width || "100%"};
  max-width: 20.875rem;
  height: 17.875rem;
  flex-shrink: 0;
  border-radius: 3%;
  @media (max-width: 510px) {
    height: 9.75rem;
    width: 9.375rem;
  }
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
  @media (max-width: 510px) {
    gap: 0.1875rem;
  }
`;

const RatingsLayout = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  @media (max-width: 510px) {
    gap: 0.375rem;
  }
`;

const PriceLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  @media (max-width: 510px) {
    gap: 0.375rem;
  }
`;

// Apply Shared Text Styles to Components
const ProductNameText = styled(SharedTextStyles)`
  color: var(--Type-High-Emphasis, #171520);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  @media (max-width: 510px) {
    font-size: 0.75rem;
  }
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

`;

const DescriptionText = styled(SharedTextStyles)`
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
  @media (max-width: 510px) {
    font-size: 0.75rem;
  }
`;

const OldPriceText = styled(SharedTextStyles)`
  text-decoration-line: line-through;
  @media (max-width: 510px) {
    font-size: 0.625rem;
  }
`;

const DiscountText = styled(SharedTextStyles)`
  color: #e21d1d;
  font-size: 1rem;
  line-height: 1.25rem;
  @media (max-width: 510px) {
    font-weight: 500;
    font-size: 0.625rem;
    white-space: nowrap;
  }
`;
const PriceText = styled(SharedTextStyles)`
  color: var(--Type-High-Emphasis, #171520);
  font-weight: 500;
  @media (max-width: 510px) {
    font-size: 0.875rem;;
  }
`;

const RatingText = styled(SharedTextStyles)`
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--Primary, #1b4b66);
`;

// Component
function ProductCard({ Button,
  type,
  image,
  productId,
  productName,
  productDescreption,
  discount,
  showButton,
  isTrending,
  showRating,
  rating,
  price,
  showOldPrice,
  ratersNumber,
  width }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card to={`/product?product_id=${productId}`} width={width}>
      <CardImage src={image.url} alt={productName} width={width} />
      <CardFrame>
        <CardInfo>
          <ProductNameText>{productName}</ProductNameText>
          <DescriptionText>{productDescreption}</DescriptionText>
          {showRating && !isMobile && (
            <RatingsLayout>
              <RatingStars rating={rating} />
              <RatingText>{ratersNumber} Ratings</RatingText>
            </RatingsLayout>
          )}
          <PriceLayout>
            {!showOldPrice && <PriceText>${price}</PriceText>}
            {showOldPrice && (
              <>
                <PriceText>${(price - (price * (discount / 100))).toFixed(2)}</PriceText>
                <OldPriceText>${price}</OldPriceText>
                <DiscountText>{discount}% OFF</DiscountText>
              </>
            )}
          </PriceLayout>
          {showButton && (
            <RoundedButton
              buttonText={"Add To Cart"}
              ButtonIcon={ShoppingBagOutlinedIcon}
              onClickEvent={() => {
                console.log("Add to bag");
              }}
              isfilled={false}
              showLeftIcon={true}
              showRightIcon={false}
              is_mobile={false}
              width={"151px"}
            />
          )}
        </CardInfo>
        {/* Your SVG code here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 20.5415C12 20.5415 2.625 15.2915 2.625 8.91651C2.62519 7.78976 3.01561 6.69785 3.72989 5.82643C4.44416 4.95501 5.4382 4.35786 6.54299 4.13652C7.64778 3.91517 8.79514 4.08329 9.78999 4.61229C10.7848 5.14129 11.5658 5.99852 12 7.03823L12 7.03824C12.4342 5.99853 13.2152 5.1413 14.21 4.6123C15.2049 4.08329 16.3522 3.91517 17.457 4.13652C18.5618 4.35786 19.5558 4.95501 20.2701 5.82643C20.9844 6.69785 21.3748 7.78976 21.375 8.91651C21.375 15.2915 12 20.5415 12 20.5415Z"
            stroke="#13101E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CardFrame>
    </Card>
  );
}

export default ProductCard;
