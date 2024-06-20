// Loadable.js
import React, { Suspense } from "react";
import Loader from "./Loader";

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component, fallback = null) => (props) =>
  (
    <Suspense fallback={fallback || <Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
