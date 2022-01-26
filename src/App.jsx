import NavBar from "./components/NavBar";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
