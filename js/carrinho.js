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

        // Renderiza cada produto no carrinho
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

        // Adiciona o campo de seleção de forma de pagamento
        const formaPagamentoDiv = document.createElement("div");
        formaPagamentoDiv.className = "mt-3";
        formaPagamentoDiv.innerHTML = `
            <label for="forma-pagamento" class="form-label">Forma de Pagamento:</label>
            <select id="forma-pagamento" class="form-select">
                <option value="pix">Pix</option>
                <option value="debito">Cartão de Débito</option>
                <option value="credito">Cartão de Crédito</option>
                <option value="dinheiro">À vista (Dinheiro Físico)</option>
            </select>
        `;
        listaCarrinho.appendChild(formaPagamentoDiv);

        // Adiciona o botão para enviar ao WhatsApp
        const whatsappButton = document.createElement("button");
        whatsappButton.className = "btn btn-success mt-3 w-100";
        whatsappButton.textContent = "Enviar para WhatsApp";
        whatsappButton.onclick = () => enviarParaWhatsApp(total);
        listaCarrinho.appendChild(whatsappButton);
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

    // Função para enviar a lista para o WhatsApp
    function enviarParaWhatsApp(total) {
        const formaPagamento = document.getElementById("forma-pagamento").value;
        let mensagem = "🛒 *Lista de Compras* 🛒\n\n";

        // Adiciona os detalhes dos produtos
        carrinho.forEach((produto) => {
            const subtotal = produto.price * produto.quantidade;
            mensagem += `*Produto:* ${produto.name}\n`;
            mensagem += `*Preço Unitário:* R$${produto.price.toFixed(2)}\n`;
            mensagem += `*Quantidade:* ${produto.quantidade}\n`;
            mensagem += `*Subtotal:* R$${subtotal.toFixed(2)}\n\n`;
        });

        // Adiciona o total e a forma de pagamento
        mensagem += `*Total:* R$${total.toFixed(2)}\n`;
        mensagem += `*Forma de Pagamento:* ${formatarFormaPagamento(formaPagamento)}\n`;

        // Se a forma de pagamento for Pix, adiciona o número do Pix e o QR Code
        if (formaPagamento === "pix") {
            const numeroPix = "123.456.789-00"; // Substitua pelo número real do Pix
            mensagem += `\n*Chave Pix:* ${numeroPix}\n`;
        }

        // Cria o link do WhatsApp
        const url = `https://wa.me/5588993503686?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }

    // Função para formatar a forma de pagamento
    function formatarFormaPagamento(forma) {
        switch (forma) {
            case "pix":
                return "Pix";
            case "debito":
                return "Cartão de Débito";
            case "credito":
                return "Cartão de Crédito";
            case "dinheiro":
                return "À vista (Dinheiro Físico)";
            default:
                return "Não especificado";
        }
    }

    // Inicializa a renderização do carrinho
    renderizarCarrinho();
});