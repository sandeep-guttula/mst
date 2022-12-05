class Product {
    static productPrice = 150;
    private productId: number;
    public productName: string;
    protected productCategory: string;
    constructor(productId: number, productName: string, productCategory: string) {
      this.productId = productId;
      this.productName = productName;
      this.productCategory = productCategory;
    }
    getProductId() {
      console.log("The Product id is : " + this.productId);
    }
  }
  class Gadget extends Product {
    getProduct(): void {
      console.log("Product category is : " + this.productCategory);
    }
  }
  const g: Gadget = new Gadget(1234, "Mobile", "SmartPhone");
  g.getProduct();
  g.getProductId();
  console.log("Product name is : " + g.productName);
  console.log("Product price is : $" + Product.productPrice);
  