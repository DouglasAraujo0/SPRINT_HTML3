function TipoDoSeguro(){
    
        const tipoSeguro = () => {
            if (tipoSeguro === 0) {
                alert("Seguro para ciclistas que pedalam na rua selecionado selecionado!")
            } else if (tipoSeguro === 1) {
                alert("Seguro para ciclistas de maratona selecionado!")
            } else if (tipoSeguro === 2) {
                alert("Seguro para ciclistas que pedalam em montanhas selecionado!")
            } else if (tipoSeguro === 3) {
                alert("Seguro para ciclistas que pedalam em pedras e rochas selecionado!")
            } else if (tipoSeguro === 4) {
                alert("Seguro para ciclistas que pedalam em terra e mato selecionado!")
            } else if (tipoSeguro === 5) {
                alert("Seguro para ciclistas por hobbie selecionado!")
            } else if (tipoSeguro === 6) {
                alert("Seguro para ciclistas que viajam com a bike selecionado!")
            }
    } 

    return(
        <>
        <h1>TechnoBike</h1>

        <h2>Tipo do Seguro</h2>

        <p>Olá, seja bem vindo à TechnoBike! Nosso objetivo é promover uma vistoria do seguro bike com rapidez e 
            comodidade a você com utilização de Inteligência Artificial, sem precisar sair de casa.</p>

        <p>Para começarmos, preciso que você escolha o tipo de seguro que mais se adequa às suas necessidades:</p>

        <ul>
            <li>Para ciclistas que pedalam na rua</li>
            <button type="button" onClick={tipoSeguro(0)}>Selecionar</button>
            <li>Para ciclistas de maratona</li>
            <button type="button" onClick={tipoSeguro(1)}>Selecionar</button>
            <li>Para ciclistas que pedalam em montanhas</li>
            <button type="button" onClick={tipoSeguro(2)}>Selecionar</button>
            <li>Para ciclistas que pedalam em pedras e rochas</li>
            <button type="button" onClick={tipoSeguro(3)}>Selecionar</button>
            <li>Para ciclistas que pedalam em terra e mato</li>
            <button type="button" onClick={tipoSeguro(4)}>Selecionar</button>
            <li>Para ciclistas por hobbie</li>
            <button type="button" onClick={tipoSeguro(5)}>Selecionar</button>
            <li>Para ciclistas que viajam com a bike</li>
            <button type="button" onClick={tipoSeguro(6)}>Selecionar</button>
        </ul>

        <p><b>Próxima etapa: </b> envio dos arquivos da vistoria</p>
        </>
    )
}

export default TipoDoSeguro