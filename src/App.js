/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './components/routes/Inicio'
import Camisetas from './components/routes/Camisetas'
import ItemDetail from './components/Pages/ItemDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Inicio />}> </Route>  
        <Route exact path='/camisetas' element={<Inicio />}> </Route>
        <Route exact path='/camisetas/:categoria' element={<Camisetas/>} />
        <Route exact path='/camisetas/:categoria/:equipo' element={<ItemDetail/>} />
      </Routes>  
    </BrowserRouter>  
  )
}

export default App;
