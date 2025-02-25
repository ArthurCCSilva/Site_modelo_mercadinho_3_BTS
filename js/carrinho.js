/* Arquivo: carrinho.js */
document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
    } else {
        carrinho.forEach(product => {
            const Div = document.createElement("div");
            Div.classList.add("card", "mb-3");
            Div.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Preço: R$${product.price}</p>
                </div>
            `;
            listaCarrinho.appendChild(Div);
        });
    }
});