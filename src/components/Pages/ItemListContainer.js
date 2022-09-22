import './itemlistcontainer.css';

const ItemListContainer = (props) => {
    return(
        <div className="d-grid gap-2 col-6 mx-auto">
            <h1 className='btn btn-lg m-1 mt-3 p-4 saludo'>{props.greeting} </h1>
        </div>
        )
}

export default ItemListContainer;