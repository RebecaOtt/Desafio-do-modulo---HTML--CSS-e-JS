const menuContainer = document.querySelector(".header-inner-conteiner");
const menuButton = document.getElementById("button-menu");

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle("show-menu");
});

if (!localStorage.cont) {
  localStorage.cont = 0;
}

const produtosNormais = document.querySelectorAll(".cols .products");
const produtosFavoritos = document.querySelectorAll(".colsFavorites img");

produtosNormais.forEach(produto => {
  produto.addEventListener("click", () => {
    const nome = produto.querySelector(".product").textContent;
    const preco = produto.querySelector(".product-price").textContent;
    const dados = `${nome};${preco}`;

    localStorage.cont = Number(localStorage.cont) + 1;
    localStorage.setItem("cad" + localStorage.cont, dados);

    alert("Salvo no carrinho!");
  });
});

produtosFavoritos.forEach(img => {
  img.addEventListener("click", () => {
    const nome = img.alt;
    const preco = "";
    const dados = `${nome};${preco}`;

    localStorage.cont = Number(localStorage.cont) + 1;
    localStorage.setItem("cad" + localStorage.cont, dados);

    alert("Salvo no carrinho!");
  });
});
