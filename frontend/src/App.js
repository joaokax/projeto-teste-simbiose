import React from "react";
import { BrowserRouter} from "react-router-dom";
import GlobalStyles from "./assets/Js/GlobalStyles";

import GlobalConfig from "./assets/Js/GlobalConfig";
import Index from "./views/index";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <>
    <BrowserRouter>
      <Index />
      <Rodape />
      <GlobalStyles />
      <GlobalConfig />
    </BrowserRouter>
    </>
  );
}

export default App;
