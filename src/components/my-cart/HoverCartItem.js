import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import QuantityInput from "./QuantityInput";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePost, useDeleteHook } from "../../custom_hooks/useApi";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "8px",
});

const HoverCartItem = ({
  product_id,
  productImage,
  brand,
  productName,
  quantity,
  price,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [route, setRoute] = useState('');
  const {setNewRequestBody} = usePost(`https://group4.iscovat.bid/cart/${route}`, 'patch');
  const [deleteRoute, setDeleteRoute] = useState('');
  const {setNewRequestBody: setDeleteBody} = useDeleteHook (`https://group4.iscovat.bid/cart/${deleteRoute}`);
  const handleQuantityChange = (newQuantity) => {
    console.log(newQuantity);
    console.log(itemQuantity);
    if(newQuantity  < itemQuantity ){
      console.log("heolooo");
      setRoute("/decrease-quantity");
    }
    else {
      setRoute('/increase-quantity');
    }
    setNewRequestBody({
      "product_id":product_id,
      "quantity":1
    });
    setItemQuantity(newQuantity);
  };

  const handleRemove = () =>{
    setDeleteRoute(`/?product_id=${product_id}`)
    setDeleteBody ({});
    alert("Your product removed from the cart!");
  }

  return (
    <Grid
      item
      xs={12}
      container
      sx={{
        display: "flex",
        p: 3,
        borderBottom: "1px solid rgba(98, 98, 98, 0.4)",
      }}
    >
      <Grid xs={10} container>
        <Grid item>
          <ButtonBase
            sx={{
              width: 80,
              height: 80,
              paddingRight: "16px",
            }}
          >
            <Img alt="Product Image" src={productImage} />
          </ButtonBase>
        </Grid>

        <Grid item sm container direction="column">
          <Grid item>
            <Typography
              gutterBottom
              variant="h3"
              color="#171520"
              fontSize="16px"
            >
              {brand}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productName}
            </Typography>
            <Typography variant="body2" color="#626262">
              <QuantityInput
                initialQuantity={itemQuantity}
                onChange={handleQuantityChange}
                product_id = {product_id}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        xs={2}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Grid item>
          <CloseIcon onClick={handleRemove} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            {price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HoverCartItem;
