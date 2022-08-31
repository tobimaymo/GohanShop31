
const NavBar = () => {
    return (
      <div className="container">
        <header className="w-100 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow">
                  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src="./img/logogohan.jpg" className="bi me-2" width="76" height="64"></img>
                    <span className="fs-4">Gohan´s Music Store</span>
                  </a>
                  <div className='CounterSection'>
                  <button id="boton-carrito">
                    <img src="./img/carrito.png" className="bi me-2" width="48" height="48"></img>
                    <p id="contadorCarrito">0</p>
                  </button>
                  </div>
        </header>
    </div>
    );
  };
  
  export default NavBar;
  