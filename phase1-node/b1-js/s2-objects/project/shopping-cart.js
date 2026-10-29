// Validations out of scope: this project focuses on JavaScript objects.

function Product(name, price) {
  this.id = Product.currentId++;

  // TODO: Validate that name is a non-empty string.
  this.name = name;

  // TODO: Validate that price is a positive number.
  this.price = price;

  this.setPrice = function (newPrice) {
    // TODO: Validate the new price.
    this.price = newPrice;
  };
}

Product.currentId = 1;

function ProductCatalog() {
  this.products = {};

  this.addProduct = function (product, stock) {
    // TODO: Validate product and stock.
    this.products[product.id] = { ...product, stock };
  };

  this.decrementStock = function (productId) {
    // TODO: Check that product exists and stock is greater than zero.
    this.products[productId].stock--;
  };

  this.incrementStock = function (productId) {
    // TODO: Check that product exists.
    this.products[productId].stock++;
  };

  this.deleteProduct = function (productId) {
    delete this.products[productId];
  };
}

function Cart() {
  this.id = Cart.currentId++;
  this.products = [];
  this.discountPercentage = 0;

  this.addProduct = function (newProduct, quantity) {
    // TODO: Validate product, quantity and available stock.
    for (const product of this.products) {
      if (product.id === newProduct.id) {
        product.quantity += quantity;
        return;
      }
    }

    // Snapshot: later changes to the original product won't change this item.
    this.products.push({ ...newProduct, quantity });
  };

  this.deleteProduct = function (id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
        break;
      }
    }
  };

  this.calculateTotal = function () {
    let subtotal = 0;

    for (const product of this.products) {
      subtotal += product.price * product.quantity;
    }

    return subtotal * (1 - this.discountPercentage / 100);
  };

  this.applyDiscount = function (discountPercentage) {
    // TODO: Validate percentage is between 0 and 100.
    this.discountPercentage = discountPercentage;
  };

  this.removeDiscount = function () {
    this.discountPercentage = 0;
  };
}

Cart.currentId = 1;
