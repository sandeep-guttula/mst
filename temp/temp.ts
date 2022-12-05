function CreateCustomerID(name: string, id: number): string {
    return "The customer id is " + name + " " + id;
  }
  interface StringGenerator {
    (chars: string, nums: number): string;
  }
  let idGenerator: StringGenerator;
  idGenerator = CreateCustomerID;
  const customerId: string = idGenerator("Mr.Tom", 101);
  console.log(customerId);
  