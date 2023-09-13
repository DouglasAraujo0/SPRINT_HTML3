import pagina1 from '../../assets/pagina1.jpg'
import pagina2 from '../../assets/pagina2.jpg'
import pagina3 from '../../assets/pagina3.jpg'
import pagina3_1 from '../../assets/pagina3.1.jpg'
import pagina3_2 from '../../assets/pagina3.2.jpg'
import pagina3_3 from '../../assets/pagina3.3.jpg'
import pagina3_4 from '../../assets/pagina3.4.jpg'
import pagina4 from '../../assets/pagina4.jpg'
import pagina5 from '../../assets/pagina5.jpg'
import { Link } from 'react-router-dom'

function Organograma(){
    return(
        <main>
             <h1>Technobike</h1>
            <h2>Organograma</h2>
            <p>Segue abaixo o organograma das páginas presentes nesse HTML: </p>
            <p>Detalhes</p>
            <Link to={'/detalhes'}><img src={pagina1} alt="Página 1" /></Link>
            <p>Totalmente Virtual</p>
            <Link to={'/totalmentevirtual'}><img src={pagina2} alt="Página 2" /></Link>
            <p>Simulação</p>
            <Link to={'/simulacao'}><img src={pagina3} alt="Página 3" /></Link>
            <p>Identificação do cliente</p>
            <Link to={'/simulacao/identificacao'}><img src={pagina3_1} alt="Página 3.1" /></Link>
            <p>Tipo de Seguro</p>
            <Link to={'/simulacao/identificacao/tipodoseguro'}><img src={pagina3_2} alt="Página 3.2" /></Link>
            <p>Vistoria</p>
            <Link to={'/simulacao/identificacao/tipodoseguro/vistoria'}><img src={pagina3_3} alt="Página 3.3" /></Link>
            <p>Validação da Vistoria</p>
            <Link to={'/simulacao/identificacao/tipodoseguro/vistoria/validacaovistoria'}><img src={pagina3_4} alt="Página 3.4" /></Link>
            <p>Organograma</p>
            <Link to={'/organograma'}><img src={pagina4} alt="Página 4" /></Link>
            <p>Integrantes</p>
            <Link to={'/integrantes'}><img src={pagina5} alt="Página 5" /></Link>
        </main>
    )
}
export default Organograma
