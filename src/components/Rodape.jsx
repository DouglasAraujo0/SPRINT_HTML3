export default function Rodape() {
    return(
        <footer>
            <nav>
            <b>Confira mais:</b>
            <Link to='/Detalhes'>Detalhes da solução</Link>
            <span> | </span>
            <Link to='/IdentificarCliente'>Identificação</Link>
            <span> | </span>
            <Link to='/Simulacao'>Simulação</Link>
            <span> | </span>
            <Link to='/'>Totalmente Virtual</Link>
            <span> | </span>
            <Link to='/Organograma'>Organograma</Link>
            <span> | </span>
            <Link to='/TipoDoSeguro'>Tipo de Seguro</Link>
            <span> | </span>
            <Link to='/Vistoria'>Vistoria</Link>
            <span> | </span>
            <Link to='/'>Página Principal</Link>    
        </nav>
        </footer>
    )
}