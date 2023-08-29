import React from "react";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

// function App() {
//   React.useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return;
// }

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home items={[]} />} />
            <Route exact path="/cart" Component={Cart} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
