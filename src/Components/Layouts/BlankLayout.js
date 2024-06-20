import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const BlankLayout = () => (
  <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>

        <Typography variant="h6" noWrap component="div">
            <Link to="/">
            <img
              className="w-32 pe-4"
              alt="logo"
              src="https://img.logoipsum.com/243.svg"
            />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* main body */}
      <Container component="main" >
        <DrawerHeader />
        <Outlet />
      </Container>
    </Box>
  </>
);

export default BlankLayout;
