import React from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
import { fetchPizzas } from "./redux/actions/pizzas";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
