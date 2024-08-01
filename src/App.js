import React, { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SnackbarProvider } from "notistack";

import Routes from "./routes/Router";
import Loader from "./Components/Loader/Loader.js";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Theme from "./Components/Theme/Theme";

function App() {
  const snackbarRef = React.createRef();
  const onClickDismiss = (key) => () => {
    snackbarRef.current.closeSnackbar(key);
  };
  const [allRoutes, setAllRoutes] = useState(Routes);

  const getUserRoutes = (routes) => {
    const userRoutes = [];
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (!route.permission || route.permission) {
        if (route.children && route.children.length) {
          const children = getUserRoutes(route.children);
          if (children && children.length) {
            route.children = children;
          } else {
            delete route.children;
          }
        }
        userRoutes.push(route);
      }
    }
    return userRoutes;
  };

  const routing = useRoutes(allRoutes);
  const theme = createTheme(Theme('light'));
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          ref={snackbarRef}
          action={(key) => (
            <Button
              sx={{ color: "#fff" }}
              size="small"
              onClick={onClickDismiss(key)}
            >
              Dismiss
            </Button>
          )}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Suspense fallback={<Loader />}>{routing}</Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
