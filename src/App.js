import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/cart" Component={Cart} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
