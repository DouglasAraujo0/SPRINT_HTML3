import { Link } from 'react-router-dom'

function Simulacao() {
    return(
        <>
            <h2>Simulação</h2>

            <p>Veja aqui uma simulação de como o cliente irá fazer sua vistoria do produto bike. Ah, claro: como é apenas uma demonstração, não é possível realmente mandar dados ou algo do tipo.</p>

            <p>A vistoria é composta por 5 etapas:</p>
            <p><b><Link to='/simulacao/identificarclientes'>Primeira etapa: </Link></b>Identificação do cliente</p>
        </>

    )
}

export default Simulacao
