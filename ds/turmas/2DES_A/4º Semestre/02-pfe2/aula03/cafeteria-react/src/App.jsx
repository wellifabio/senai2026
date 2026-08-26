import Header from './components/Header'
import Banner from './components/Banner'
import Sobre from './components/Sobre'
import Cardapio from './components/Cardapio'
import Contato from './components/Contato'

function App(){
    return (
        <>
        <Header />
        <main>
            < Banner />
            < Sobre />
            < Cardapio />
            <Contato />
        </main>
        </>
    )
}
export default App