import React from "react";
import { BrowserRouter} from "react-router-dom";
import GlobalStyles from "./assets/Js/GlobalStyles";

import GlobalConfig from "./assets/Js/GlobalConfig";
import Index from "./views/index";

function App() {
  return (
    <>
    <div className="fundo"></div>
    <BrowserRouter>
      <Index />
      <GlobalStyles />
      <GlobalConfig />
    </BrowserRouter>
    </>
  );
}

export default App;
