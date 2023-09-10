import {Link} from 'react-router-dom'

function Menu() {
    return(
        <nav>
            <Link to='/Detalhes'>Detalhes da solução</Link>
            <span> | </span>
            <Link to='/IdentificarCliente/TipoDoSeguro'>Identificação</Link>
            <span> | </span>
            <Link to='/'>Simulação</Link>
            <span> | </span>
            <Link to='/Home/IdentificarCliente/TipoDoSeguro'>Totalmente Virtual</Link>
            <span> | </span>
            <Link to='/Home/IdentificarCliente/TipoDoSeguro'>Organograma</Link>
        </nav>
    )
}

export default Menu