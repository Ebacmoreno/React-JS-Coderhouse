import logoReact from '../assets/react.svg'
import CartWidget from './CartWidget'
import ReactIcons from './ReactIcons'

//Importar estilos del navbar
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <a className='anchor-nav' href="">
                <img src={logoReact} alt="logo"/>
            </a>
            <a className='anchor-nav' href="">Recién Llegados</a>
            <a className='anchor-nav' href="">Ofertas!</a>
            <a className='anchor-nav' href="">Best Sellers</a>
            <ReactIcons.Carrito />
            <CartWidget />

        </nav>
    );
}

export default Navbar