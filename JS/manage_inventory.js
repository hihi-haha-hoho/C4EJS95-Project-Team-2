displayManager = () => {
  let getDivElement = document.getElementById("inventory-mngmt");
  getDivElement.innerHTML = `
    <div id="edit-product">
        <input id="input-name-product" type="text" placeholder="Enter name">
        <input id="input-model-product" type="text" placeholder="enter model">
        <input id="input-price-product" type="text" placeholder="enter price">
        <input id="input-brand-product" type="text" placeholder="enter brand">
        <input id="input-cpu-product" type="text" placeholder="enter cpu">
        <input id="input-ram-product" type="text" placeholder="enter ram">
        <input id="input-storage-product" type="text" placeholder="enter storage">
        <input id="input-vga-product" type="text" placeholder="enter vga">
        <input id="input-screen-product" type="text" placeholder="enter screen">
        <input id="input-os-product" type="text" placeholder="enter os">
        <input id="input-color-product" type="text" placeholder="enter color">
        <input id="input-description-product" type="text" placeholder="enter description">
        <button class="add-product" onclick="addProduct()">Add</button>
    </div>
        <table border="1px black">
            <thead>
                <tr>
                    <th rowspan="2">Name</th>
                    <th rowspan="2">Model</th>
                    <th rowspan="2">Price</th>
                    <th rowspan="2">Brand</th>
                    <th colspan="7">Spec</th>
                    <th rowspan="2">Description</th>
                    <th rowspan="2">Action</th>
                </tr>
                    
                <tr>
                    <th>CPU</th>
                    <th>RAM</th>
                    <th>Storage</th>
                    <th>VGA</th>
                    <th>Screen</th>
                    <th>OS</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody id="display-table">
                
            </tbody>
        </table>
    `;
  let tbody = document.getElementById("display-table");
  tbody.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    let { name, model, price, brand, spec, description } = products[i];
    tbody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${model}</td>
            <td>${price}</td>
            <td>${brand}</td>
            <td>${spec.cpu}</td>
            <td>${spec.ram}</td>
            <td>${spec.storage}</td>
            <td>${spec.vga}</td>
            <td>${spec.screen}</td>
            <td>${spec.os}</td>
            <td>${spec.color}</td>
            <td>${description}</td>
            <td>
                <button class="btn-update">Update</button><span><button class="btn-del" >Delete</button></span>
            </td>
        </tr>
        `;
  }
  let getDelButtonElement = document.getElementsByClassName("btn-del");
  let delButton = [...getDelButtonElement];
  for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener("click", () => {
      removeProduct(i);
    });
  }
  const getUpdateButtonElement = document.getElementsByClassName("btn-update");
  const updateButton = [...getUpdateButtonElement];
  for (let i = 0; i < updateButton.length; i++) {
    updateButton[i].addEventListener("click", () => {
      updateUI(i);
      products.splice(i, 1);
      let getUpdateBtn = document.getElementsByClassName("update-product");
      getUpdateBtn[0].addEventListener("click", () => {
        let name = document.getElementById("input-name-product").value,
          model = document.getElementById("input-model-product").value,
          price = document.getElementById("input-price-product").value,
          brand = document.getElementById("input-brand-product").value,
          cpu = document.getElementById("input-cpu-product").value,
          ram = document.getElementById("input-ram-product").value,
          storage = document.getElementById("input-storage-product").value,
          vga = document.getElementById("input-vga-product").value,
          screen = document.getElementById("input-screen-product").value,
          os = document.getElementById("input-os-product").value,
          color = document.getElementById("input-color-product").value,
          description = document.getElementById("input-description-product")
            .value;
        let spec = { cpu, ram, storage, vga, screen, os, color };
        let newProduct = { name, model, price, brand, spec, description };
        products.splice(i, 0, newProduct);
        console.log(products);
        displayManager();
      });
    });
  }
};
//them san pham
addProduct = () => {
  let name = document.getElementById("input-name-product").value,
    model = document.getElementById("input-model-product").value,
    price = document.getElementById("input-price-product").value,
    brand = document.getElementById("input-brand-product").value,
    cpu = document.getElementById("input-cpu-product").value,
    ram = document.getElementById("input-ram-product").value,
    storage = document.getElementById("input-storage-product").value,
    vga = document.getElementById("input-vga-product").value,
    screen = document.getElementById("input-screen-product").value,
    os = document.getElementById("input-os-product").value,
    color = document.getElementById("input-color-product").value,
    description = document.getElementById("input-description-product").value;
  spec = { cpu, ram, storage, vga, screen, os, color };
  products.push({ name, model, price, brand, spec, description });
  console.log(products);
  displayManager();
};

function removeProduct(index) {
  products.splice(index, 1);
  displayManager();
}
function updateUI(index) {
  //update UI
  const getDivEdit = document.getElementById("edit-product");
  getDivEdit.innerHTML = " ";
  getDivEdit.innerHTML = `
    <input id="input-name-product" type="text" placeholder="Enter name">
    <input id="input-model-product" type="text" placeholder="enter model">
    <input id="input-price-product" type="text" placeholder="enter price">
    <input id="input-brand-product" type="text" placeholder="enter brand">
    <input id="input-cpu-product" type="text" placeholder="enter cpu">
    <input id="input-ram-product" type="text" placeholder="enter ram">
    <input id="input-storage-product" type="text" placeholder="enter storage">
    <input id="input-vga-product" type="text" placeholder="enter vga">
    <input id="input-screen-product" type="text" placeholder="enter screen">
    <input id="input-os-product" type="text" placeholder="enter os">
    <input id="input-color-product" type="text" placeholder="enter color">
    <input id="input-description-product" type="text" placeholder="enter description">
    <button class="update-product">Update</button>
    `;
  let { name, model, price, brand, spec, description } = products[index];
  document.getElementById("input-name-product").value = name;
  document.getElementById("input-model-product").value = model;
  document.getElementById("input-price-product").value = price;
  document.getElementById("input-brand-product").value = brand;
  document.getElementById("input-cpu-product").value = spec.cpu;
  document.getElementById("input-ram-product").value = spec.ram;
  document.getElementById("input-storage-product").value = spec.storage;
  document.getElementById("input-vga-product").value = spec.vga;
  document.getElementById("input-screen-product").value = spec.screen;
  document.getElementById("input-os-product").value = spec.os;
  document.getElementById("input-color-product").value = spec.color;
  document.getElementById("input-description-product").value = description;
}
