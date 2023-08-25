// 1

let a = prompt("Введіть перше число");
let b = prompt("Введіть друге число");

let arr = [a, b];
let max = arr[0];

arr.forEach(function (elem, index) {
  if (index > 0) {
    if (max < elem) {
      max = elem;
    }
    alert(`Більше число з двох буде ${max[0]}`);
  }
});

console.log(max);

// 2

let Name = prompt("Введіть ваше ім'я");
let age = prompt("Введіть ваш вік");

if (age >= 59 || age <= 60) {
  alert(`Шановний ${Name}, вам на пенсію через років`);
} else {
  alert(`Шановний ${Name}, ви вже на пенсії`);
}



