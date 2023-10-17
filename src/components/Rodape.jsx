import { Link } from 'react-router-dom'

export default function Rodape() {
    return(
        <>
            <footer>
                <nav id='Rodape'>
                    <b>Confira mais: </b>
                    <Link to='/detalhes'>Detalhes da solução</Link>
                    <span> | </span>
                    <Link to='/totalmentevirtual'>Totalmente Virtual</Link>
                    <span> | </span>
                    <Link to='/organograma'>Organograma</Link>
                    <span> | </span>
                    <Link to='/integrantes'>Integrantes</Link>
                    <span> | </span>
                    <Link to='/'>Página Principal</Link>    
                </nav>
            </footer>
        </>
    )
}