import {Suspense, useState} from 'react';
import { useRoutes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from './routes/Router';
import Loader from './Components/Loader/Loader.js';

function App() {
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

  return (
    <>
      <Suspense fallback={<Loader />}>
        {routing}
      </Suspense>
    </>
  );
}

export default App;
