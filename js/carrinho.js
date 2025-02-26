document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Função para renderizar o carrinho
    function renderizarCarrinho() {
        listaCarrinho.innerHTML = ""; // Limpa o conteúdo anterior

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
            return;
        }

        let total = 0;

        carrinho.forEach((produto, index) => {
            const div = document.createElement("div");
            div.classList.add("card", "mb-3");

            div.innerHTML = `
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${produto.name}</h5>
                        <p class="card-text">Preço unitário: R$${produto.price.toFixed(2)}</p>
                        <p class="card-text">Quantidade: <span id="quantidade-${index}">${produto.quantidade}</span></p>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-danger me-2" onclick="removerProduto(${index})">Remover</button>
                        <button class="btn btn-sm btn-primary me-2" onclick="alterarQuantidade(${index}, -1)">-</button>
                        <button class="btn btn-sm btn-primary" onclick="alterarQuantidade(${index}, 1)">+</button>
                    </div>
                </div>
            `;
            listaCarrinho.appendChild(div);

            total += produto.price * produto.quantidade; // Calcula o total
        });

        // Exibe o total
        const totalElement = document.createElement("div");
        totalElement.className = "row mt-3 fw-bold";
        totalElement.innerHTML = `
            <div class="col-md-8">Total:</div>
            <div class="col-md-4 text-end">R$ ${total.toFixed(2)}</div>
        `;
        listaCarrinho.appendChild(totalElement);
    }

    // Função para remover um produto do carrinho
    window.removerProduto = function (index) {
        carrinho.splice(index, 1); // Remove o produto do array
        localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Atualiza o localStorage
        renderizarCarrinho(); // Re-renderiza o carrinho
    };

    // Função para alterar a quantidade de um produto
    window.alterarQuantidade = function (index, valor) {
        if (carrinho[index].quantidade + valor > 0) {
            carrinho[index].quantidade += valor; // Altera a quantidade
        } else {
            alert("A quantidade não pode ser menor que 1. Para remover o produto, clique em 'Remover'.");
        }
        localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Atualiza o localStorage
        renderizarCarrinho(); // Re-renderiza o carrinho
    };

    // Inicializa a renderização do carrinho
    renderizarCarrinho();
});