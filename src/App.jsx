//? Importamos el componente Outlet de react-router-dom para generar el ruteo de la app
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
       {/* Outlet es el componente que se encarga de generar el ruteo de la app */}
       <div>
          <Outlet />
        </div>
    </>
  )
}

export default App
