import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <>
      <NavBar />
      <ItemListContainer greeting= "Bienvenidos a la tienda de La Chica del Seguro"/>
      </>
    </div>
  );
}

export default App;
