 
//Importo componente carrito 
import CartWidget from "../CartWidget/CartWidget"


//Creo la barra de navegación  
const NavBar = () => {
    return (
        <nav className = "Nav">
            <h3>Lupita Shoes Store</h3>
            <div>
                <button class="button is-danger is-light">Texanas</button>
                <button class="button is-danger is-light">Borcegos</button>
                <button class="button is-danger is-light">Bucaneras</button>
                <button class="button is-danger is-light">Botas y Botinetas</button>
                <button class="button is-danger is-light">Zapatillas</button>
            </div>
            <CartWidget/>
        </nav>

    )
}
//Exporto el componente
export default NavBar