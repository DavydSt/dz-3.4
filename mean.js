"use strict"

// 1  ============

const firstTxt = "hallo";
const secendTxt = "world";

if (firstTxt !== "" && secendTxt !== ""){
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

// 2  ============

const number1 = 6;
const number2 = 46;


if ( number1 + number2 > 10){
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3  ============

const text = "hallo, it is JavaScript";

if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

// 4  ============

const number = 13;

if (number > 10 && number < 20) {
    console.log("число входить в діапазон від 10 до 20");
} else {
    console.log("число не входить в діапазон від 10 до 20");
}

// 5  ============

const userName = "Davyd";
const email = "darvins@gmail.com";
const paswort = "8883330605"

if ( userName.lengt > 3 && email.includes("@") && email.includes(".") && paswort.lengt > 6 ) {
console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}