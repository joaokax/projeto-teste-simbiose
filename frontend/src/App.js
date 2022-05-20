import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Cadastro from "./views/Cadastro";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;