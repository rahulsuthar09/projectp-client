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
  Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import Otp from "./Otp";

const defaultTheme = {}; // Replace with your theme configuration

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Forgot = () => {
  const [loading, setLoading] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(!loading);
      setEmail(values.email);
      // Handle form submission
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  // OTP
  const [email, setEmail] = React.useState("");
  function handleOtpSumbit(otp, email) {
    console.log("OTP:", otp);
    console.log("Email:", email);
  }

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
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
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
              size="small"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={""}
              loading={loading}
              loadingPosition="end"
              // disabled={true}
            >
              <span>Reset Password</span>
            </LoadingButton>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <Link
                    to="/auth/login"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    Sign In
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* OTP verification */}
        <Otp length={6} email={email} onSubmit={handleOtpSumbit} />

        {/* Add the Copyright component here */}
      </Container>
    </ThemeProvider>
  );
};

export default Forgot;
