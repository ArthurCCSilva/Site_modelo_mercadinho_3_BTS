// Array global para armazenar o carrinho
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const produtosContainer = document.getElementById("produtos-container");

    // Verifica se o elemento existe
    if (!produtosContainer) {
        console.error("Elemento 'produtos-container' não encontrado!");
        return;
    }

    // Função para renderizar os produtos na página
    function renderizarProdutos() {
        // Limpa o conteúdo anterior
        produtosContainer.innerHTML = "";

        // Renderiza cada produto
        listaProdutos.forEach((produto) => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
                        <button class="btn btn-primary btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;
            produtosContainer.appendChild(card);
        });

        // Adiciona evento de clique aos botões
        document.querySelectorAll(".btn-adicionar").forEach((botao) => {
            botao.addEventListener("click", (event) => {
                const produtoId = event.target.getAttribute("data-id");
                adicionarAoCarrinho(produtoId);
            });
        });
    }

    // Função para adicionar produto ao carrinho
    function adicionarAoCarrinho(produtoId) {
        const produto = listaProdutos.find((p) => p.id === parseInt(produtoId));
        if (produto) {
            const produtoNoCarrinho = carrinho.find((p) => p.id === produto.id);
            if (produtoNoCarrinho) {
                produtoNoCarrinho.quantidade += 1; // Aumenta a quantidade se o produto já estiver no carrinho
            } else {
                carrinho.push({ ...produto, quantidade: 1 }); // Adiciona o produto com quantidade inicial 1
            }
            localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva no localStorage
            alert(`${produto.nome} adicionado ao carrinho!`);
        }
    }

    // Inicializa a renderização dos produtos
    renderizarProdutos();
});