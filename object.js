let person = {
  name: "Shakil",
  age: 10,
  profession: "web developer",
  isMarried: true,
  showMessage: function () {
    console.log(this.name, " is a", this.profession);
  },

  showIfMarried() {
    if (this.isMarried) {
      console.log("Shakil is married");
    } else {
      console.log("Shakil is unmarried");
    }
  },

  checkIfAddult: function () {
    if (this.age > 18) {
      console.log(this.name, "is an adult");
    } else {
      console.log(this.name, "still a child!");
    }
  },
};

person.showMessage();
person.showIfMarried();
person.checkIfAddult();

let car = {
  brand: "BMW",
  model: 2013,
  color: "blue",
  weight: 850,
};

let car2 = {
  brand: "Tesla",
  model: "X",
  color: "Red",
};

// // dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);

// console.log(car.brand);
// console.log(car.model);
// console.log(car.color);
// console.log(car.weight);

// console.log(person["age"]); // bracket notation

// console.table(car2);
// console.log(car2);
