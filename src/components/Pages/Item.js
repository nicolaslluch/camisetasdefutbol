/* import './Item.css' */

const Item = ({ ele }) => {

return (
    <div className="container itemCard">
      <div className="itemFoto row">
        <img className="fotoPrincipal" src={ele.foto[0]} alt='foto camiseta'/>
      </div>
      <div className="itemmarca text-uppercase fw-bold row">{ele.equipo}</div>
      <div className="itemmodelo text-start text-uppercase fw-light row">{ele.pais}</div>
      <div className="itemPrecio fw-bold row">$ {ele.precio}</div>
    </div>
  )
}

export default Item