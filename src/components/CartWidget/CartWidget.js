//Importo img svg carrito
import cart from "./assets/cart.svg"

//Creo componente carrito
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" height="30px"/>
            0
        </div>
    )
}

//Exporto img carrito (componente)
export default CartWidget