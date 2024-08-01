import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import Otp from "./Otp";

const defaultTheme = {}; // Replace with your theme configuration

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        ProjectP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LogIn = () => {
  // Show / Hide password
  const [showPassword, setShowPassword] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const handleClickShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // OTP
  const [email, setEmail] = React.useState("");
  function handleOtpSumbit(otp, email) {
    console.log("OTP:", otp);
    console.log("Email:", email);
  }

  // for disabling Sign In btn
  const [loginLoading, setLoginLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoginLoading(!loginLoading);
      console.log("Login Values:", values);
      setEmail(values.email);
      // Handle form submission
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              size="small"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              margin="normal"
              required
              size="small"
              variant="outlined"
              type={showPassword.password ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("password")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="remember"
                      color="primary"
                      checked={formik.values.remember}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Remember me"
                  variant="body2"
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <Link
                    to="/auth/forgot-password"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>
            </Grid>

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              endIcon={""}
              loading={loginLoading}
              loadingPosition="end"
              // disabled={true}
            >
              <span>Sign In</span>
            </LoadingButton>
            <Grid container sx={{ justifyContent: "center" }}>
              <Typography variant="body2">
                Don't have an account?
                <Link
                  to="/auth/register"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  {"  Sign Up"}
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Box>

        {/* OTP verification */}
        <Otp length={6} email={email} onSubmit={handleOtpSumbit} />

        {/* Add the Copyright component here */}
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
