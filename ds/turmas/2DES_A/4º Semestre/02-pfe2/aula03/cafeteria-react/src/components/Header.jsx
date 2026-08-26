import { useState } from "react"

function Header(){
    const[menuAberto, setMenuAberto] = useState(false)

    function fecharMenu(){
        setMenuAberto(false)
    }
    return (
        <header className="cabecalho">
            <div className="container menu">
                <a className="logo" href='#inicio' onClick={fecharMenu}>☕ Aroma </a>
                <button className="menu-botao" onClick={()=>setMenuAberto(!menuAberto)}>≡</button>
                <nav className={`navegacao ${menuAberto ? 'aberta':''}`}>
                    <a href="#inicio" onClick={fecharMenu}>Inicio</a>
                    <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                    <a href="#cardapio" onClick={fecharMenu}>Cardapio</a>
                    <a href="#contato" onClick={fecharMenu}>Contato</a>
                </nav>
            </div>
        </header>
    )
}
export default Header