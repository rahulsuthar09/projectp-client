import React from "react";
import "./loader.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <CircularProgress />
    </div>
  </div>
);
export default Loader;
