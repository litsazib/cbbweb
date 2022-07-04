import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";
function App() {
  return (
    <BrowserRouter basename='/bn'>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
