function renderHTML(array) {
  getElement.innerHTML = " ";
  for (let i = 0; i < array.length; i++) {
    // let {name, price} = array[i];
    // console.log(name, price);
    getElement.innerHTML += `
        <div class="product-container" >
            <img alt="img" width="" height="">
            <p class="name-product">${array[i].name}</p>
            <p class="price-product">${formatCurrency(array[i].price)}</p>
            <button onclick="addCart(event)">Add to cart</button>
        </div>
        `;
  }
}
renderHTML(products);

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += `<li><span>${
      cart[i].name
    }</span> <span>- ${formatCurrency(cart[i].price)}</span> <span> x ${
      cart[i].quantity
    }</span> <button onclick="deleteItemCart(event)">X</button></li>`;
    total += cart[i].price * cart[i].quantity;
  }
  cartTotal.innerText = `Total: ${formatCurrency(total)}`;
}

function showCart() {
  setTimeout(function () {
    hideAll();
    cartPageDiv.style.display = "flex";
    renderCart();
  }, 250);
}

function hideAll() {
  contentContainerDiv.style.display = "none";
  loginPageDiv.style.display = "none";
  cartPageDiv.style.display = "none";
}

function showLoginPage() {
  setTimeout(function () {
    hideAll();
    loginPageDiv.style.display = "flex";
  }, 250);
}

function showMainPage() {
  setTimeout(function () {
    hideAll();
    contentContainerDiv.style.display = "flex";
  }, 250);
  renderHTML(products);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

function addEventSortBrand() {
  for (let i = 0; i < arrDiv.length; i++) {
    arrDiv[i].addEventListener("click", () => {
      const productBrand = [];
      for (let j = 0; j < products.length; j++) {
        if (arrDiv[i].getAttribute('name') === products[j].brand) {
          productBrand.push(products[j]);
        }
      }
      renderHTML(productBrand)
    });
}
}
addEventSortBrand();
