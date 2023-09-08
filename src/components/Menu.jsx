import {Link} from 'react-router-dom'

function Menu() {
    return(
        <nav>
            <Link to='/Home/Detalhes'>Detalhes da solução</Link>
            <span> | </span>
            <Link to='/Home/IdentificarCliente/TipoDoSeguro'>Identificação</Link>
        </nav>
    )
}

export default Menu