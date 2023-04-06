const readline = require ('readline-sync');

console.log("Загадано число в диапазоне от 0 до 100");
var intenedNumber = Math.floor(Math.random()*100);
var readLineInpit ="";

do{
readLineInpit = Number(readline.question("Введите число:"))
answer = (readLineInpit*1 > intenedNumber) ? 
"Загаданное число меньше":
"Загаданное число больше";
console.log(answer);
}while (readLineInpit != intenedNumber );
console.log(`Загаданное число: ${intenedNumber}`)