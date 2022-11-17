const askNumber = function (start, end) {
  while(true) {
    const question = prompt("enter number");
    if (
      isNaN(Number(question)) === true ||
      question === null ||
      question === ""
    ) {
      continue;
    }
    if (question)
    return Number(question);
  }
};
console.log(askNumber(1, 10));

function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.logFullName = function () {
    let fullName = this.name,this.lastName;
    console.log(fullName);
  };
}
const user1 = new User("Tom", "Ray", 22);
console.log(user1);
