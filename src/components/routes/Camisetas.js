import { useEffect, useState  } from 'react'
import { useParams, Link } from 'react-router-dom'

import Item from '../Pages/Item'

const Camisetas = () => {
  const { categoria } = useParams()
  const[camisetas, setCamisetas] = useState([])
 
  useEffect(() => {
    fetch("../camisetas.json") 
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() =>  {   // simulo retardo de 2s en respuesta
        setCamisetas(data)
      } ,2000)
    })
  }, [])


  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      {camisetas.length == 0 ? 
        <div className='col mx-auto badge bg-secondary'>CARGANDO...</div>
        : camisetas.filter( ele => ele.tipo == categoria ).map( elefil => (
        <div className='col'>
          <Link className="" to={`/camisetas/${categoria}/${elefil.id}`}>
            <Item ele={elefil} key={elefil.id}/>
          </Link>
        </div>     
      ))}
      </div>
    </div>
  )
}

export default Camisetas