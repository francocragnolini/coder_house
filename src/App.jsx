import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hello World, How Are You" />
    </>
  );
}

export default App;
