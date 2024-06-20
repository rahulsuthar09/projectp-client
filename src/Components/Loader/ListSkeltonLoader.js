import React from "react";
import "./loader.css";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Loader = () => (
  <Container sx={{p:4}}>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography component="div" variant="h3">
          <Skeleton />
        </Typography>
        <Typography component="div" variant="h6">
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Typography>
      </Grid>
    </Grid>
  </Container>
);
export default Loader;
