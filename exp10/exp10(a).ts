const cart: string[] = [];
const pushtoCart = (item: string) => {
  cart.push(item);
};
function addtoCart(...productName: string[]): string[] {
  for (const item of productName) {
    pushtoCart(item);
  }
  return cart;
}
console.log(
  "Cart Items are:" + addtoCart(" Moto G Play, 4th Gen", " Apple iPhone 5s")
);
