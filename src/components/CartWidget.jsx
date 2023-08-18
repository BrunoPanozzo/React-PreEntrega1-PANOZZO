import Carrito from "../img/carrito.png"

const CartWidget = () => {

    return (
        <div>
            <button type="button" className="btn btn-ligth position-relative" width="20" height="20">
                <img src={Carrito} alt="Logo de carrito de compras" width="35" height="35" />
                <span id="cantidadProdu"
                    className="position-absolute translate-middle badge rounded-pill bg-danger">3</span>
            </button>
        </div>
    )
    
}

export default CartWidget