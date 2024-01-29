import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomContainer } from "./CustomContainer";
import InputField from "../components/header/InputField.js";
import LeftDrawer from "../components/header/LeftDrawer.js";
import Navbar from "../components/header/Navbar.js";
import IconButtonsGroup from "../components/header/IconButtonsGroup.js";
import { TOP_CATEGORIES } from "../utils/constants.js";
import { Link } from "react-router-dom";

const CustomizedAppBar = styled(AppBar)(() => ({
  width: "100%",
  height: "80px",
  backgroundColor: "var(--bright)",
  color: "var(--text)",
}));

const CustomizedImage = styled("img")(() => ({
  marginRight: "15px",
  "@media (max-width: 1013px)": {
    display: "none",
  },
}));

const Heading = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "26px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "var(--primary)",
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const imageSrc = process.env.PUBLIC_URL + `/assets/logo.png`;
  return (
    <CustomContainer>
      <CustomizedAppBar position="static" sx={{ boxShadow: 0, py: 1 }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              mt: { xs: "24px", md: "0px" },
              justifyContent: "space-between",
            }}
          >
            {isMobile ? (
              <>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  sx={{ alignItems: "center" }}
                >
                  <LeftDrawer navItems={TOP_CATEGORIES} />
                  <Heading>Home</Heading>
                </Stack>
              </>
            ) : (
              <>
                <Link to="./">
                  <CustomizedImage src={imageSrc} alt="logo" />
                </Link>
                <Navbar navItems={TOP_CATEGORIES} />
              </>
            )}
            <Stack direction="row">
              <InputField placeholder="Search for products or brands....." />
              <IconButtonsGroup />
            </Stack>
          </Toolbar>
        </Container>
      </CustomizedAppBar>
    </CustomContainer>
  );
};

export default Header;
