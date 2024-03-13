import ReactDOM from 'react-dom/client'

//? Importamos los componentes de React Query para poder usarlos en toda la app 
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../src/api/queryClient.js";

//? Importamos el sistema de rutas
import Router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
