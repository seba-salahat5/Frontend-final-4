import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageGallery from "../components/product/ImageGallery";
import { CustomContainer } from "../layout/CustomContainer";
import PathLine from "../components/shared/PathLine";
import RatingStars from "../components/shared/RatingStars";
import StateButtonGroup from "../components/product/StateButtonGroup";
import RoundedButton from "../components/shared/RoundedButton";
import DescriptionSection from "../components/product/DescriptionSection";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useGet, usePost } from "../custom_hooks/useApi";

const Heading = styled(Typography)(() => ({
  fontWeight: "600",
  letterSpacing: "0em",
  textAlign: "left",
}));

const Product = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery("(min-width:900px) and (max-width:1279px)");
  const isLg = useMediaQuery("(min-width:1280px) and (max-width:1500px)");
  const isXl = useMediaQuery("(min-width:1700px)");
  const imageWidth = isMobile
    ? "100%"
    : isMd
    ? 440
    : isLg
    ? 605
    : isXl
    ? 950
    : 740;

  const [currentProduct, setCurrentProduct] = useState(null);
  const [relatedProducts, setRelatedProduct] = useState([]);
  const [ratings, setRatigns] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [brandId, setBrandId] = useState(0);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const baseUrl = "https://group4.iscovat.bid/product";

  const product_id = params.get("product_id");
  const { data: productData, loading: productLoading } = useGet(
    `${baseUrl}/single-product/${parseInt(product_id)}`
  );
  const { data: relatedData, loading: relatedLoading } = useGet(
    `${baseUrl}/related-product?category_id=${categoryId}&brand_id=${brandId}`
  );
  const { data: ratingData, loading: ratingLoading } = useGet(
    `${baseUrl}/ratings/${parseInt(product_id)}`
  );
  const apiUrl =
    "https://group4.iscovat.bid/wishlist/products?page_number=1&number_of_items=20";
  const { data: wishlistItems, loading: loadingWishlist } = useGet(apiUrl);

  const { setNewRequestBody } = usePost(
    "https://group4.iscovat.bid/cart/"
  );
  const handleAddToCart = () => {
    setNewRequestBody({
      product_id: productData.product_id,
      quantity: userQuantity,
    });
    alert("Your product added to the cart!");
  };

  useEffect(() => {
    if (!productLoading && productData) {
      setCurrentProduct(productData);
      setCategoryId(parseInt(productData.category_id));
      setBrandId(parseInt(productData.brand_id));
    }
  }, [productData, productLoading]);

  useEffect(() => {
    if (!relatedLoading && relatedData) {
      setRelatedProduct(relatedData.items);
    }
  }, [relatedData, relatedLoading, currentProduct]);

  useEffect(() => {
    if (!ratingLoading && ratingData) {
      setRatigns(ratingData);
    }
  }, [ratingData, ratingLoading, currentProduct]);

  const [userQuantity, setUserQuantity] = useState(1);

  const handleStateChange = (newState) => {
    setUserQuantity(newState);
  };

  useEffect(() => {
    console.log("hello");
    if (!loadingWishlist && wishlistItems) {
      console.log("wishlist", wishlistItems);
      setWishlist(wishlistItems.items);
    }
  }, [wishlistItems, loadingWishlist]);

  return (
    <>
      {currentProduct && (
        <CustomContainer>
          <Grid container mt={"24px"} spacing={1}>
            <Grid item xs={12} md={6} xl={7}>
              <Stack direction={"column"} spacing={2}>
                {!isMobile && <PathLine />}
                <ImageGallery
                  imageList={currentProduct.image}
                  width={imageWidth}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} xl={5}>
              <Stack direction="column" mt={"50px"}>
                <Heading
                  sx={{
                    fontSize: "34px",
                    lineHeight: "44px",
                    color: "var(--dark)",
                  }}
                >
                  {currentProduct.name}
                </Heading>
                <Heading
                  sx={{
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "var(--summary-text)",
                  }}
                >
                  {currentProduct.sub_title}
                </Heading>

                <Stack
                  mt={"32px"}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <RatingStars
                    rating={Number(currentProduct.ratings)}
                    space={"8px"}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: "400",
                      color: "var(--light-text)",
                    }}
                  >
                    ({currentProduct.number_of_ratings}) Ratings
                  </Typography>
                </Stack>

                <Stack
                  mt={"24px"}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <Heading
                    sx={{
                      fontSize: "40px",
                      lineHeight: "52px",
                      fontWeight: "700",
                      color: "var(--text)",
                    }}
                  >
                    $
                    {(
                      currentProduct.price -
                      currentProduct.price *
                        (currentProduct.discount_value / 100)
                    ).toFixed(2)}
                  </Heading>
                  <Heading
                    sx={{
                      fontSize: "34px",
                      lineHeight: "26px",
                      textAlign: "Right",
                      color: "var(--light-text)",
                      textDecoration: "line-through",
                    }}
                  >
                    ${currentProduct.price}
                  </Heading>
                  <Heading
                    sx={{
                      fontSize: "20px",
                      lineHeight: "26px",
                      textAlign: "Right",
                      color: "var(--vibrant)",
                    }}
                  >
                    {currentProduct.discount_value}%OFF
                  </Heading>
                </Stack>

                <StateButtonGroup
                  initialState={userQuantity}
                  onStateChange={handleStateChange}
                  mt={"40px"}
                />

                <Stack direction={"row"} spacing={3} mt={"40px"} width={"100%"}>
                  <RoundedButton
                    buttonText={"Add To Cart"}
                    ButtonIcon={ShoppingBagOutlinedIcon}
                    onClickEvent={handleAddToCart}
                    isfilled={true}
                    showLeftIcon={true}
                    showRightIcon={false}
                    is_mobile={false}
                    width={isMobile ? "319px" : "328px"}
                  />
                  <RoundedButton
                    buttonText={"Add To Wishlist"}
                    ButtonIcon={FavoriteBorderRoundedIcon}
                    onClickEvent={() => {
                      console.log("Add To Wishlist");
                    }}
                    isfilled={false}
                    showLeftIcon={true}
                    showRightIcon={false}
                    is_mobile={isMobile}
                    width={isMobile ? "48px" : "240px"}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <DescriptionSection
            description={currentProduct.description}
            relatedProducts={relatedProducts}
            ratings={ratings ? ratings.countRating : []}
            reviews={ratings ? ratings.ratingData : []}
            avgRating={currentProduct.ratings}
          />
        </CustomContainer>
      )}
    </>
  );
};

export default Product;