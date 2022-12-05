class Product {
    static productPrice: string;
    productId: number;
    constructor() {
      this.productId = 1234;
    }
    getProductId(): string {
      return "Product id is : " + this.productId;
    }
  }
  const product: Product = new Product();
  const p = {
    producti: product.getProductId(),
  };
  console.log(p.producti);
  