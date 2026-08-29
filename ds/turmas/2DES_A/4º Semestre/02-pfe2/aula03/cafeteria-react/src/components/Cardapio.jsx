import { useState } from "react";
import { produtos } from '../data/produtos'
import CardProduto from './CardProduto'

const categorias = ['Todos', 'Cafés', 'Bebidas', 'Doces']

function Cardapio() {
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

    const produtosFiltrados = categoriaAtiva === 'Todos'
        ? produtos
        : produtos.filter((produto) => produto.categoria === categoriaAtiva)

    return (
        <section className="secao fundo-claro" id="cardapio">
            <div className="container">
                <p className="destaque centro">Escolha o seu favorito</p>
                <h2 className="centro">Nosso cardápio</h2>
                <div className="filtros">
                    {categorias.map((categoria) => (
                        <button
                            key={categoria}
                            className={`filtro ${categoriaAtiva === categoria ? 'ativo' : ''}`}
                            onClick={() => setCategoriaAtiva(categoria)}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>
                    <div className="grade">
                        {produtosFiltrados.map((produto)=>(
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
            </div>
        </section>
    )

}
export default Cardapio