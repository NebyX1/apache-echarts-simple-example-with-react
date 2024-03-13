import React from "react";
//? Importamos los componentes de React Router para generar el sistema de rutas de la app
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//? Importamos todas las views para poder usarlas en las rutas
import App from "../App.jsx";

import Dashboard from "../Views/Dashboard.jsx";

const Router = () => {
    //? Crear el sistema de rutas
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<App />}>
            <Route index={true} element={<Dashboard />} />
            <Route path="/home" element={<Dashboard/>} />
            <Route path="*" element={<Dashboard/>} />
          </Route>
        </>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default Router;