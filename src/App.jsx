import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ImgInicio from "./Components/ImgInicio/ImgInicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from "./Components/Banner/Banner"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import "./App.css"
import { CartProvider } from "./Components/Context/CartContext"
import Cart from "./Components/Cart/Cart"

function App() {
  return (
    <div className="App">
      <>
      <ImgInicio/>
      <Banner/> 
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={ <ItemListContainer/> } />
              <Route path='/Descargable/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/Academia/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/Productos/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/ServWeb/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/Item/:idItem' element={ <ItemDetailContainer/> }/>
              <Route path='/Cart' element ={<Cart/>}/>
              <Route path="*" element={<h2>Sitio en Construcción</h2>}/>
            </Routes> 
        </CartProvider>            
      </BrowserRouter>
      </>
    </div>
  )
}

export default App
