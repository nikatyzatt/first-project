import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="*" element={<div>Não encontrei nada aqui...</div>} />
      </Routes>
    </BrowserRouter>
  )
  }
export default App;
