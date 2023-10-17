import { Link } from 'react-router-dom'

function IdentificarClientes () {
    const enviarCpf = () =>{
        alert ("Cpf enviado com sucesso!")
    }

    return (
        <main>
            <h1>Identificar clientes</h1>

            <p>Para identificação, coloque seu CPF abaixo:</p>
            <input type="text" id = "EnviarCPF" placeholder = "Digite aqui:"/>
            
            <p>Clique aqui para enviar</p>
            <button id = "EnviarCPF" onClick={enviarCpf}>enviar</button> 

            <p><b><Link to='/simulacao/identificarclientes/tipodoseguro'>Próxima etapa: </Link></b> escolha do tipo do seguro</p>
        </main>
    )
}
export default IdentificarClientes
