class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }

  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping('more cheese');
console.log(pizza2.toppings); // ["cheese", "more cheese"];