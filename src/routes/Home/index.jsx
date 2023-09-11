import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
            <p> A Porto Seguro é uma empresa fundada em 1945 e que se especializa na área de seguros, soluções 
                financeiras e serviços em geral. Atualmente, a Porto segue insatisfeita com sua vistoria do produto
                Bike, pois para sua parte de vistoria, necessita-se de um funcionário para a análise das fotos 
                tiradas pelo cliente – seja por chamada de vídeo ou pessoalmente.</p>
            
            <p>Visto isso, juntamente com a FIAP, nosso projeto pretende automatizar este processo de vistoria da 
                Bike, com sua realização feita on-line, com a utilização da inteligência artificial e sem 
                necessidade de intervenção humana no processo. Dessa maneira, promove-se uma maior rapidez e 
                comodidade aos clientes, com um sistema simples e intuitivo e, para a empresa, é promovido uma
                redução de custos e de tempo ao não ser necessária a ação humana. Além disso, há uma redução nas 
                fraudes e mantimento da sinistralidade no controle do produto no canal digital. Assim, é conquistada
                a confiança do cliente, através de um bom atendimento e de um projeto de qualidade</p>
            
            <h2>Faça uma simulação aqui:</h2>
            <ul>
                <li><Link to='/simulacao'>Simulação</Link></li>
                <ul>
                    <li><Link to='/simulacao/identificacao'>Identificação do cliente</Link></li>
                    <li><Link to='/simulacao/identificacao/tipodoseguro'>Tipo do Seguro</Link></li>
                    <li><Link to='/simulacao/identificacao/tipodoseguro/vistoria'>Vistoria</Link></li>
                    <li><Link to='/simulacao/identificacao/tipodoseguro/vistoria/validacaodavistoria'>Validação da vistoria</Link></li>
                </ul>
            </ul>
        </>
    )
}

export default Home