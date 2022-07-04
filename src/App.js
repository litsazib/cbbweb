import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";
function App() {
  return (
    <BrowserRouter basename='/cbbreact'>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
