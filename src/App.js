/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Pages/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Vendemos camisetas de futbol"/>
    </div>
  );
}

export default App;