function filtrarEOrdenar(produtos, categoriaFiltrar) {
    let produtosFiltrados = categoriaFiltrar 
        ? produtos.filter(produto => produto.categoria === categoriaFiltrar) 
        : produtos;
    
    produtosFiltrados.sort((a, b) => a.preco - b.preco);
    
    return produtosFiltrados;
}

const produtos = [
    { nome: "Arroz", preco: 20, categoria: "Alimentos" },
    { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 100, categoria: "Eletrônicos" },
    { nome: "Feijão", preco: 10, categoria: "Alimentos" },
    { nome: "Carregador", preco: 50, categoria: "Eletrônicos" },
];

console.log(filtrarEOrdenar(produtos, "Eletrônicos"));
