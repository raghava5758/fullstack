// Product Model
class Product {
  constructor(id, name, category, price, stock) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }

  // Static method to get all products
  static getAll() {
    return [
      new Product(1, 'Laptop', 'Electronics', 999.99, 15),
      new Product(2, 'Smartphone', 'Electronics', 699.99, 30),
      new Product(3, 'Headphones', 'Accessories', 149.99, 50),
      new Product(4, 'Keyboard', 'Accessories', 79.99, 40),
      new Product(5, 'Monitor', 'Electronics', 299.99, 20)
    ];
  }

  // Static method to find a product by ID
  static findById(id) {
    return this.getAll().find(product => product.id === parseInt(id));
  }

  // Static method to get products by category
  static getByCategory(category) {
    return this.getAll().filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Static method to search products by name
  static searchByName(name) {
    return this.getAll().filter(product => 
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}

module.exports = Product;
