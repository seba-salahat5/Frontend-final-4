import ProductCard from "../shared/ProductCard";
import { Grid } from '@mui/material';

const CardsGrid = ({ cards }) => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}>
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
    </Grid>
  );
};

export default CardsGrid;
