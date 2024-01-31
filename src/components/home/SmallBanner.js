import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BannerImage = styled("img")(({ imageHight }) => ({
  width: "100%",
  height: imageHight || "auto",
  objectFit: "cover",
  minHeight: "132px",
  position: "relative",
  zIndex: "0",
  borderRadius: "15px",

  "@media (max-width: 100px)": {
    height: "50%",
  },

  "@media (max-width: 510px)": {
    height: "30%",
  },
}));

const ImageButton = styled(ButtonBase)(({ buttonHight }) => ({
  width: "100%",
  position: "relative",
  height: buttonHight || "auto",
  minHeight: "132px",
  "&:hover, &.Mui-focusVisible": {
    zIndex: 0,
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const SmallBanner = ({
  bannerHight,
  backgroundImage,
  imageAlt,
  children,
  category,
}) => {
  const navigate = useNavigate();

  const categoryLink = `/category?&category=${category}`;

  const handleButtonClick = () => {
    // Redirect to the categoryLink when the button is clicked
    navigate(categoryLink);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: "156px",
        width: "100%",
      }}
    >
      <ImageButton focusRipple onClick={handleButtonClick}>
        <BannerImage
          imageHight={bannerHight}
          src={process.env.PUBLIC_URL + backgroundImage}
          alt={imageAlt}
        />
        {children}
      </ImageButton>
    </Box>
  );
};

export default SmallBanner;
