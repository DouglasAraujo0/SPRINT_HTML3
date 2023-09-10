import {Link} from 'react-router-dom'

function Menu() {
    return(
        <nav>
            <Link to='/Detalhes'>Detalhes da solução</Link>
            <span> | </span>
            <Link to='/IdentificarCliente/TipoDoSeguro'>Identificação</Link>
            <span> | </span>
            <Link to='/Simulacao'>Simulação</Link>
            <span> | </span>
            <Link to='/'>Totalmente Virtual</Link>
            <span> | </span>
            <Link to='/'>Organograma</Link>
        </nav>
    )
}

export default Menu