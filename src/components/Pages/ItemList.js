import { useState, useEffect } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

const ItemList = () => {

  const[camisetas, setCamisetas] = useState([])
  
  useEffect(() => {
    fetch("./camisetas.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {  
        setCamisetas(data)
      } ,2000)
    })
  }, [])
  
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {camisetas.length == 0 ? 
        <div className='col mx-auto badge bg-secondary'>CARGANDO...</div>
        : camisetas.map((ele) => (
        <div className='col'>
          <Link className="" to={`/camisetas/${ele.tipo}/${ele.id}`}>
            <Item ele={ele} key={ele.id}/>
          </Link>        
        </div>     
      ))}
      </div>
    </div>
  )
}

export default ItemList