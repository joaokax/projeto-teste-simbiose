import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemContextProvider } from "./contexts/ItemContext";
import GlobalStyles from "./assets/GlobalStyles";

import Index from "./views/index";
import Item from "./views/Item";
import Menu from "./components/menu/Menu";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <>
    <ItemContextProvider>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Item" element={<Item/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
    </ItemContextProvider>
    <GlobalStyles />
    </>
  );
}

export default App;
