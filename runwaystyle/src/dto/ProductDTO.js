class ProductDTO {
    constructor({ _id, name, category, price, stock }) {
      this.id = _id;
      this.name = name;
      this.category = category;
      this.price = price;
      this.stock = stock;
    }
  }
  
  export default ProductDTO;
  