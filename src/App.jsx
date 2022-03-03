import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer";
import CartListContainer from "./pages/CartListContainer";
import CheckoutContainer from "./pages/CheckoutContainer";

function App() {
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
          {/* check this route */}
          <Route path="/checkout">
            <CheckoutContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
