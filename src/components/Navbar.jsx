// import ejemplo desde assets
import logoReact from '../assets/react.svg'
//Importar estilos del navbar
import '../css/NavBar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <a className='anchor-nav' href="">
                <img src={logoReact} alt="logo"/>
            </a>
            <a className='anchor-nav' href="">Recién Llegados</a>
            <a className='anchor-nav' href="">Ofertas!</a>
            <a className='anchor-nav' href="">Best Sellers</a>
            <a className='anchor-nav' href="">
                <img src= "vite.svg" alt="carrito" />
            </a>
        </nav>
    );
}

export default Navbar