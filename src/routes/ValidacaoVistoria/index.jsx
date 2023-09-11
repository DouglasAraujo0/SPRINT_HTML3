export default function ValidacaoVistoria(){
    const conferir = () =>{
        alert("Sua vistoria está em análise!")
    }
    return(
        <main>
            <h1>Validação da Vistoria</h1>
        <div>
            <h2>Como sei o status da minha vistoria?</h2>
            <p>Você ficará sabendo do andamento de sua vistoria pelo e-mail que você informou no momento do cadastro com a Porto Seguro.
                Por lá, você poderá receber um e-mail dizendo se está em análise, com documentos faltando, se foi aprovado ou reprovado.
                Independemente do tipo de e-mail que você receber, lá você receberá informações de como prosseguir com a sua vistoria.
            </p>
            <p>Também é possível acompanhar o status da sua vistoria por aqui: </p>
            <button type="button" onClick={conferir} >Conferir Status da Vistoria</button>
        </div>
        </main>
    )
}