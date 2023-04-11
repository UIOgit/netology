const readline = require('readline');
const { stdin: input, stdout: output, getuid } = require('process');
const { escape } = require('querystring');
const rl = readline.createInterface({ input, output });
const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { v4: uuidv4 } = require('uuid');

const argv = yargs(hideBin(process.argv))
    .option('fileName',
        {
        alias: "f",
        type: "string",
        description: "Имя файла для ведения лога"
        })   
    .argv;

    //TODO: сделать параметр обязательным?

const fileWriter = fs.createWriteStream(path.dirname()+argv.fileName);

let secretNumber = Math.floor(Math.random()*2)+1;
let result = ""
console.log("Введите число")
rl.on('line', (line) => {
    console.log(`Вы ввели: ${line}`)});
rl.close();
if (+line!=NaN) {
    result = (secretNumber==line)? "Выигрыш": "Проигрыш"
    console.log(`${result}`);
    fileWriter.write(
        `{
            game:"${uuidv4()}",
            date:"${Date.now()}",
            result:"${result}"
        }`);
}


