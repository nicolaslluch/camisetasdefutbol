import './itemlistcontainer.css';
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return(
        <div className="d-grid gap-2 col-6 mx-auto">
            <h1 className='btn btn-lg m-1 mt-3 p-4 greeting'>{props.greeting} </h1>
        <ItemList/>
        </div>
        )
}

export default ItemListContainer;