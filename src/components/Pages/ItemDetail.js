import { useState, useEffect } from "react"

import React from 'react'
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"


const ItemDetail = () => {
  const { tipoCamiseta, equipo } = useParams()

  const [stock, setStock] = useState(10)
  const [ele, setEle] = useState(0)

  const modificoStock = (stockInicial, cantidad) => {
    setStock(stockInicial - cantidad)
  }
  
  useEffect(() => {
    fetch("/camisetas.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   
        setEle(data.filter( elem => elem.id == equipo)[0])
      } ,1000)
    })
  }, [])


  return (
    <div className='container border'>
    {ele == 0 ?
      <div className='col mx-auto badge bg-secondary'>CARGANDO...</div>:
      <div className='row row-cols-1 row-cols-xl-2'> 
        <div className='col fotoPrincipal'>
          <img className="img-fluid" src={ele.colores[0]} alt='foto principal de camiseta'/>
        </div>
        <div className='col detalles'>
          <div className='row fs-1 text-uppercase fw-bold'>{ele.equipo}</div>
          <div className='row text-uppercase fw-bold'>{ele.pais}</div>
          <div className='row fs-2 fw-bold'>${ele.precio}</div>
          <hr></hr>
          <div className='row'>
            {ele.colores.map((color, index) => (
              <img className="itemColores border m-1 col-2" src={color} key={index} alt='opciones de colores de camiseta'/>
            ))}
          </div>
          <div className='row mx-auto'>
            {ele.stock.map((stk, index) => (
              <div className="badge bg-primary border text-center m-2 col-1" key={index}>{stk.talle}</div>
            ))}
          </div>
          <hr></hr>
          <ItemCount stock = {stock}
                   onAdd = {modificoStock}/>
        </div>
      </div>
    }
    </div>
  )
}

export default ItemDetail