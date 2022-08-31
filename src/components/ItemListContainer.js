const ItemListContainer = (props) => {
    return (
      <div className="producto">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-text">{props.album}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button className="boton-agregar" id="agregar1">Comprar</button>
                </div>
                <small className="text-muted">{props.precio}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
            
    );
  };
  
  export default ItemListContainer;
  