function IdentificarClientes () {
    const enviarCpf = () =>{
        alert ("Cpf enviado com sucesso!")
    }
    return (
        <main>
            <h1>Identificar clientes</h1>
            <p>Para identificação, coloque seu CPF abaixo:</p>
            <input type="text" id = "EnviarCPF" placeholder = "Digite aqui:"/>
            <button id = "EnviarCPF" onClick={enviarCpf}>enviar</button> 
        </main>
    )
}
export default IdentificarClientes
