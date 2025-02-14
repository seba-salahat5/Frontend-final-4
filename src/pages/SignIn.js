import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usePost } from "../custom_hooks/useApi";
import { useUser } from "../context/userProvider";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();
export default function SignIn() {
  const { data, error, setNewRequestBody } = usePost(
    "https://group4.iscovat.bid/auth/login"
  );
  const { toggleIsLoggedIn, signIn, isLoggedIn } = useUser();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) {
      if (data.msg) {
        signIn(data.session_token);
        navigate("/");
      } else {
        console.log(error);
      }
    }
  }, [data, error, signIn, navigate, toggleIsLoggedIn]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      toggleIsLoggedIn();
      navigate("/signin");
    } else {
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      const password = data.get("password");
      setNewRequestBody({
        email,
        password,
      });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLoggedIn ? "Sign out" : "Sign in"}
          </Typography>
          {isLoggedIn ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Out
            </Button>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    variant="body2"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
