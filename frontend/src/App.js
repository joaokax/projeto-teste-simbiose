import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./views/index";
import Cadastro from "./views/Cadastro";
import Menu from "./components/menu/Menu";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;