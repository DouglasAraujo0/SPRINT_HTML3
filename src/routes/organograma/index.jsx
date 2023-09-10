import pagina1 from "./assets/pagina1.jpeg"
import React from "react"

export default function Organograma () {

    return (

        <main>
             <h1>Technobike</h1>
        <h2>Organograma</h2>
            <p>Segue abaixo o organograma das páginas presentes nesse HTML: </p>
            <div className="org">
            <img className= "organograma" src={pagina1} />
            {/* <a href="../pags/totalmentevirtual.html"><img class="organograma" src="../img/pagina2.jpeg" alt="página 2"></a>
            <a href="../pags/simulacao.html"><img class="organograma" src="../img/pagina3.jpeg" alt="página 3"></a>
            <a href="../pags/tipodoseguro.html"><img class="organograma" src="../img/pagina3.1.jpeg" alt="página 3.1"></a>
            <a href="../pags/informacoes.html"><img class="organograma" src="../img/pagina3.2.jpeg" alt="página 3.2"></a>
            <a href="../pags/vistoria.html"><img class="organograma" src="../img/pagina3.3.jpeg" alt="página 3.3"></a>
            <a href="../pags/validacaodavistoria.html"><img class="organograma" src="../img/pagina3.4.jpeg" alt="página 3.4"></a>
            <a href="../pags/apolice.html"><img class="organograma" src="../img/pagina3.5.jpeg" alt="página 3.5"></a>
            <a href="../pags/organograma.html"><img class="organograma" src="../img/pagina4.jpeg" alt="página 4"></a>
            <a href="../pags/integrantes.html"><img class="organograma" src="../img/pagina5.jpeg" alt="página 5"></a> */}
            </div>

        </main>
    )
}