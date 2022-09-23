import './navbar.css'
import CartWidget from '../Cartwidget/CartWidget'

const Navbar = () => {
    return(
        <nav class= "navbar-expand-lg navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Camisetas</a>
    <button class="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link textonav" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textonav" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textonav" href="#">Tienda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textonav" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link textonav " href="#"><CartWidget/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;