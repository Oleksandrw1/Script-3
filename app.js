// 1
let a = prompt("Введіть перше число");
let b = prompt("Введіть друге число");

if (a > b) {
  alert(`Більше ${a}`);
} else {
  alert(`Більше ${b}`);
}


// 1.1

// let arr = [a, b];
// let max = arr[0];

// arr.forEach(function (elem, index) {
//   if (index > 0) {
//     if (max < elem) {
//       max = elem;
//     }
//     alert(`Більше число з двох буде ${max[0]}`);
//   }
// });
// console.log(max);

// 2

const Name = prompt("Введіть ваше ім'я");
const year = +prompt("Введіть свій рік народження");
const age = 2023 - year;
const work = 60 - age;
alert("Вам:  " + age + "  років");

  if (work >= 60) {
    alert(`Шановний ${Name}, ви вже на пенсії`); 
  } else {
    alert(`Шановний ${Name}, вам на пенсію через ${work}  років`);
  }
