function Detalhes() {
    return(
        <>  
            <h2>Detalhes da solução do projeto</h2>
            
            <p>Na primeira etapa de nosso projeto, o cliente, considerando que ele já está cadastrado no site e que já passou algumas de suas informações pessoais que permitiu a solicitação do seguro, irá informar seu CPF para que seja possível identificar os dados do cliente no banco de dados e prosseguir.</p>
            
            <p>Após isso, ele será direcionado à etapa “Tipo de seguro”, no qual escolherá aquele seguro de bike que melhor se encaixa com a sua necessidade e com seu estilo de vida: para ciclistas que pedalam na rua, para ciclistas de maratona, para ciclistas que pedalam em montanhas, para ciclistas que pedalam em pedras e rochas, para ciclistas que pedalam em terra e mato, para ciclistas por hobbie e para ciclistas que viajam com a bike – este seguro pode ser adquirido independentemente do valor da bike.</p>

            <p>Caso esteja tudo certo, o cliente será direcionado para a etapa “Envio das fotos e vídeos da bike para a vistoria”, no qual o cliente deverá enviar fotos e vídeos de partes específicas da bike para a vistoria - essas fotos e vídeos devem obrigatoriamente ser tiradas no momento da vistoria: para isso, nosso sistema não permite fazer upload de arquivos já existentes na galeria, só é possível acessar a câmera.</p>
            
            <p>Nesse momento, ao invés da vistoria da bike ser realizada por um funcionário, ela será realizada em segundos por uma inteligência artificial com visão computadorizada que identificará aspectos pré-estabelecidos nas fotos e vídeos. Após o término da análise das fotos e vídeos, a inteligência artificial retornará ao cliente um e-mail mostrando o status de sua vistoria: se está em análise, com arquivos faltando, aprovado ou reprovado – a partir desse e-mail, o cliente saberá os próximos passos a serem tomados.</p>

            <p>Todas essas informações enviadas para o site e analisadas são possíveis por conta do código, do banco de dados e da inteligência artificial criada por nós. Ao fim, o cliente poderá deixar seu feedback sobre a vistoria em questão de tempo, serviços, problemas, atendimento e resolução de dúvidas. </p>
        </>
    )
}

export default Detalhes