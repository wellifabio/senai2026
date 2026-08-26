import { useState } from "react";

function Contato(){
    const [nome,setNome] = useState('')
    const [mensagem,setMensagem] = useState('')
    const [retorno, setRetorno] = useState('')

    function enviarFormulario(evento){
        evento.preventDefault()
        setRetorno(`Obrigado, ${nome}! Sua mensagem foi recebida.`)
        setNome('')
        setMensagem('')
    }

    return (
        <section className="secao" id="contato">
            <div className="container contato">
                <div>
                    <p className="destaque">Venha nos visitar</p>
                    <h2>Contato</h2>
                    <p><strong>Endereço:</strong> Rua dos Cafés, 100</p>
                    <p><strong>Horário:</strong> Segunda a sábado, das 8h às 20h</p>
                    <p><strong>Telefone:</strong> (19 99999-9999)</p>
                </div>
                <form className="formulario" onSubmit={enviarFormulario}>
                    <label>Nome</label>
                    <input id="nome" value={nome} onChange={(e)=> setNome(e.target.value)} required />
                    <label>Mensagem</label>
                    <textarea id="mensagem" rows="4" value={mensagem} onChange={(e)=>setMensagem(e.target.value)} required />
                    <button className="botao" type="submit">Enviar mensagem</button>
                    <p className="retorno">{retorno}</p>
                </form>
            </div>
        </section>
    )
} 
export default Contato