////Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)

//Приклад виконання:

//Повинен знаходити: Wonderful, Joyful

//Не повинен знаходити: Happiness, Time, Task, Apple

var regex = /^[^Aa]{6,}$/;

console.log(regex.test("Wonderful")); // true
console.log(regex.test("Joyful")); // true
console.log(regex.test("Powerful")); // true
console.log(regex.test("Time")); // false
console.log(regex.test("Timeee")); // true
console.log(regex.test("Task")); // false
console.log(regex.test("Apple")); // false
