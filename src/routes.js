import PaginaPadrao from "componentes/PaginaPadrao";
import PaginaPadraoHobbies from "componentes/PaginaPadraoHobbies";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import Galeria from "paginas/Galeria";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop/>
      <Menu />

      <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='inicio' element={<Inicio />} />
          </Route>

          <Route path='posts/:id/' element={<PaginaPadraoHobbies />}>
            <Route index element={<Post />}/>
          </Route>

          <Route path='posts/:id/*' element={<Post/>} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="galeria" element={<Galeria />} />

          <Route path="*" element= {<NaoEncontrada />} /> 
          
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
