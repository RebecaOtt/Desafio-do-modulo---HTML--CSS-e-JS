const menuContainer = document.querySelector(".header-inner-conteiner");
const menuButton = document.getElementById("button-menu");

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle("show-menu");
});

if (!localStorage.cont) {
  localStorage.cont = 0;
}

const normalProducts = document.querySelectorAll(".cols .products");
const favoriteProducts = document.querySelectorAll(".colsFavorites img");

normalProducts.forEach(product => {
  product.addEventListener("click", () => {
    const name = product.querySelector(".product").textContent;
    const price = product.querySelector(".product-price").textContent;
    const data = `${name};${price}`;

    localStorage.cont = Number(localStorage.cont) + 1;
    localStorage.setItem("cad" + localStorage.cont, data);

    alert("Salvo no carrinho!");
  });
});

favoriteProducts.forEach(img => {
  img.addEventListener("click", () => {
    const name = img.alt;
    const price = "";
    const data = `${name};${price}`;

    localStorage.cont = Number(localStorage.cont) + 1;
    localStorage.setItem("cad" + localStorage.cont, data);

    alert("Salvo no carrinho!");
  });
});
