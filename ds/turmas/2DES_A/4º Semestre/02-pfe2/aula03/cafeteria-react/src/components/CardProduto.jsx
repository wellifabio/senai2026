function CardProduto({produto}){
    const preco = produto.preco.toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    })
    return (
        <article className="card">
            <div className="icone-produto">{produto.icone}</div>
            <span className="categoria">{produto.categoria}</span>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <strong>{preco}</strong>
        </article>
    )
}
export default CardProduto