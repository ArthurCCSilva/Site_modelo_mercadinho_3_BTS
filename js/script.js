let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
document.addEventListener("DOMContentLoaded", () => {
    const produtosContainer = document.getElementById("produtos-container");
    const searchInput = document.getElementById("search-input");
    const sortOptions = document.getElementById("sort-options");
    const paginationControls = document.getElementById("pagination-controls");
    let currentPage = 1; // Página atual
    const produtosPorPagina = 12; // Número de produtos por página

    // Função para renderizar os produtos na página
    function renderizarProdutos(produtosFiltrados) {
        // Limpa o conteúdo anterior
        produtosContainer.innerHTML = "";

        // Calcula os índices dos produtos a serem exibidos na página atual
        const inicio = (currentPage - 1) * produtosPorPagina;
        const fim = inicio + produtosPorPagina;
        const produtosPaginados = produtosFiltrados.slice(inicio, fim);

        produtosPaginados.forEach((produto) => {
            const card = document.createElement("div");
            card.className = "col-xl-2 col-lg-3 col-md-4 col-6 product py-2";
            card.innerHTML = `
                <div class="card text-center bg-light h-100 d-flex flex-column" style="max-width: 250px;">
                    <img src="${produto.image}" class="card-img-top" alt="${produto.name}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.name}</h5>
                        <p class="card-text truncate-4l">${produto.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <p class="card-text m-0"><strong>R$ ${produto.price.toFixed(2)}</strong></p>
                    </div>
                    <button class="btn btn-primary btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
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

        // Atualiza a barra de paginação
        atualizarPaginacao(produtosFiltrados.length);
    }

    // Função para filtrar produtos com base na barra de pesquisa
    function filtrarProdutos() {
        const termoPesquisa = searchInput.value.toLowerCase();
        return listaProdutos.filter((produto) =>
            produto.name.toLowerCase().includes(termoPesquisa) ||
            produto.description.toLowerCase().includes(termoPesquisa)
        );
    }

    // Função para ordenar produtos com base na seleção
    function ordenarProdutos(produtos) {
        const criterio = sortOptions.value;
        switch (criterio) {
            case "price-desc":
                return produtos.sort((a, b) => b.price - a.price);
            case "price-asc":
                return produtos.sort((a, b) => a.price - b.price);
            case "category-alimentos":
                return produtos.filter((p) => p.category === "alimentos");
            case "category-bebidas":
                return produtos.filter((p) => p.category === "bebidas");
            case "category-carne":
                return produtos.filter((p) => p.category === "carne");
            case "category-higiene":
                return produtos.filter((p) => p.category === "higiene");
            default:
                return produtos;
        }
    }

    // Função para atualizar a barra de paginação
    function atualizarPaginacao(totalProdutos) {
        paginationControls.innerHTML = ""; // Limpa a barra de paginação
        const totalPaginas = Math.ceil(totalProdutos / produtosPorPagina);
        if (totalPaginas <= 1) return; // Não exibe paginação se houver apenas uma página

        // Botão "Anterior"
        const btnAnterior = document.createElement("button");
        btnAnterior.className = `btn btn-sm btn-outline-danger mx-1 ${currentPage === 1 ? "disabled" : ""}`;
        btnAnterior.textContent = "<";
        btnAnterior.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                atualizarInterface();
            }
        });
        paginationControls.appendChild(btnAnterior);

        // Cria os botões de página
        for (let i = 1; i <= totalPaginas; i++) {
            const button = document.createElement("button");
            button.className = `btn btn-sm ${i === currentPage ? "btn-danger" : "btn-outline-danger"} mx-1`;
            button.textContent = i;
            button.addEventListener("click", () => {
                currentPage = i; // Atualiza a página atual
                atualizarInterface(); // Atualiza a interface com os novos produtos
            });
            paginationControls.appendChild(button);
        }

        // Botão "Próximo"
        const btnProximo = document.createElement("button");
        btnProximo.className = `btn btn-sm btn-outline-danger mx-1 ${currentPage === totalPaginas ? "disabled" : ""}`;
        btnProximo.textContent = ">";
        btnProximo.addEventListener("click", () => {
            if (currentPage < totalPaginas) {
                currentPage++;
                atualizarInterface();
            }
        });
        paginationControls.appendChild(btnProximo);
    }

    // Função para atualizar a interface com base nos filtros, ordenação e paginação
    function atualizarInterface() {
        const produtosFiltrados = filtrarProdutos();
        const produtosOrdenados = ordenarProdutos(produtosFiltrados);
        renderizarProdutos(produtosOrdenados); // Renderiza os produtos da página atual
    }

    // Eventos de entrada
    searchInput.addEventListener("input", () => {
        currentPage = 1; // Reseta para a primeira página ao pesquisar
        atualizarInterface();
    });

    sortOptions.addEventListener("change", () => {
        currentPage = 1; // Reseta para a primeira página ao ordenar
        atualizarInterface();
    });

    // Inicializa a interface
    atualizarInterface();
});

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
        alert(`${produto.name} adicionado ao carrinho!`);
    }
}