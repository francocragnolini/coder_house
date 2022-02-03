import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer";
import CartListContainer from "./pages/CartListContainer";
import { CartContext } from "./context/CartContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <CartListContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
