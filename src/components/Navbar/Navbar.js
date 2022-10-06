import './navbar.css'
import CartWidget from '../Cartwidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className= "navbar-expand-lg navbar">
  <div className="container-fluid">
    <Link className="navbar-brand">Camisetas</Link>
    <button className="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameclassName="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link textonav" to={'/'} aria-current="page" >Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link textonav" to={'/camisetas/historicas'} >Históricas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link textonav" to={'/camisetas/actuales'} >Actuales</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link textonav " ><CartWidget/></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;