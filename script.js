let startDiapason = 1;
let endDiapason = 10;
const askNumber = function (start, end) {
  for (i = start; i < end; ) {
    const question = prompt("enter number");
    if (
      isNaN(Number(question)) === true ||
      question === null ||
      question === ""
    ) {
      continue;
    }
    return Number(question);
  }
};
console.log(askNumber(startDiapason, endDiapason));

function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.logFullName = function () {
    let fullName = this.name + this.lastName;
    console.log(fullName);
  };
}
const user1 = new User("Tom", "Ray", 22);
console.log(user1);
