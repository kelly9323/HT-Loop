//Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
//функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!

const askNumber = function (start = 0, end = 10) {
  while (true) {
    const question = Number(prompt("enter number"));
    if (isNaN(question) === false && question !== null && question !== "") {
      if (question > start && question < end) {
        return question;
      }
    }
  }
};
console.log(askNumber());

// Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.
// (* - це повинна бути функція)

function reverseOrder(start = 0, end = 100) {
  for (i = end; i > start; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
}
console.log(reverseOrder());

// Створити функцію конструктор, яка описує користувача:
// -ім'я
// -прізвище
// -вік
// - метод, який логує ім'я та прізвище разом

function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.logFullName = function () {
    let fullName = this.name + " " + this.lastName;
    console.log(fullName);
  };
}
const user1 = new User("Tom", "Ray", 22);
console.log(user1);
