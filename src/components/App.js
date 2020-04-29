import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from "components/common";

import { createGlobalStyle } from "styled-components";

import Login from "components/pages/Login";
import Home from "components/pages/Home";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    min-height: 100vh;
    margin: 0;
    color: #000;
    font-family: 'Kaushan Script'
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
