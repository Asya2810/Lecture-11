// ДЗ



// 1
// В какую возрастную группу входить человек
// child 0-13 teens 13-21 young 21-30 adults 30-.. if(age>30){ you are Adult!}


// let age = prompt("Введи свой возраст:");
// if (age <= 13) {
//     alert("You are a child!");
// } else if (age >= 14 && age <= 21) {
//     alert("You are a teen!");
// } else if (age >= 22 && age < 30) {
//     alert("You are young!");
// } else {
//     alert("You are an Adult!");
// }


// 2
//Напишите программу, которая будет считать процент жира в организме человека и будет выводить результат в консоль. Запрашивайте рост и окружность талии через prompt.
// Формула:

// рост, окружность талии, мужчина или женщина
// Мужчины: 64 − (20 × рост/окружность талии)
// Женщины: 76 − (20 × рост/окружность талии)
// alert('процент жира');

// let height = prompt("Введите свой рост:");
// let waist = prompt("Введите окружность талии:");
// let sex = prompt("Введите свой пол:");

// if (sex.toUpperCase() === "МУЖЧИНА") {
//     let fatPercentage = 64-(20 * height / waist);
//     alert(fatPercentage);
// } else if (sex.toUpperCase() === "ЖЕНЩИНА") {
//     let fatPercentage = 76-(20 * height / waist);
//     alert(fatPercentage);
// } else {
//     alert("Вы ввели неверные данные!");
// }

