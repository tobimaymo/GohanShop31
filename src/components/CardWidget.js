import React from 'react'

const CardWidget = () => {
  return (
    <div className='CounterSection'>
        <button id="boton-carrito">
            <img src="./img/carrito.png" className="bi me-2" width="48" height="48"></img>
            <p id="contadorCarrito">0</p>
        </button>
    </div>
  )
}

export default CardWidget