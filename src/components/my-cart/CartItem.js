import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import { useDeleteHook } from "../../custom_hooks/useApi";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "112px",
  borderRadius: "8px",
});

const CustomTypography = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px; /* Set your desired maximum width */
`;

export default function CartItem({
  productId,
  productImage,
  brand,
  productName,
  quantity,
  price,
}) {
  const [subtotal, setSubtotal] = useState(0);
  const [route, setRoute] = useState("");
  const { setNewRequestBody: setDeleteBody } = useDeleteHook(
    `https://group4.iscovat.bid/cart/${route}`
  );
  console.log(productName);
  useEffect(() => {
    setSubtotal(price * quantity);
  }, [price, quantity]);

  const handleRemove = () => {
    setRoute(`/?product_id=${productId}`);
    setDeleteBody({});
    alert("Your product removed from the cart!");
  };
  return (
    <>
      <Grid item xs={7} container>
        <Grid item>
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
              paddingRight: "16px",
            }}
          >
            <Img alt="Product Image" src={productImage} />
          </ButtonBase>
        </Grid>
        <Grid item sm container>
          <Grid
            item
            xs
            container
            direction="column"
            sx={{ marginBlock: "auto" }}
          >
            <Grid item>
              <CustomTypography
                gutterBottom
                variant="h3"
                color="#171520"
                fontSize="1rem"
              >
                {brand}
              </CustomTypography>
              <CustomTypography variant="body2" gutterBottom>
                {productName}
              </CustomTypography>
              <CustomTypography variant="body2" color="#626262">
                Qty- {quantity}
              </CustomTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={5}
        container
        alignItems="center"
        sx={{ marginBlock: "10px", paddingRight: "12px" }}
        justifyContent="space-between"
      >
        <Grid item>
          <CustomTypography variant="subtitle1" component="div">
            {price} <span>$</span>
          </CustomTypography>
        </Grid>

        <Grid item>
          <CustomTypography variant="subtitle1" component="div">
            {quantity}
          </CustomTypography>
        </Grid>
        <Grid item>
          <CustomTypography variant="subtitle1" component="div">
            {subtotal}
          </CustomTypography>
        </Grid>

        <Grid container item xs={12} sx={{ justifyContent: "flex-end" }}>
          <Link
            sx={{ cursor: "pointer" }}
            variant="body2"
            onClick={handleRemove}
          >
            remove
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
