const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .scriptName("GetDate")
    .example(
        "sub --mounth 1",
        "Дата и время в формате ISO на 1 месяц назад.")
    .example(
        "add -d 2",
        "Дата и время в формате ISO на два дня вперед.")
    .option('year',
        {
        alias: "y",
        type: "string",
        description: "Вывести год"
        })
    .option('mounth',
        {
        alias: "m",
        type: "string",
        description: "Вывести месяц"
        })
    .option('date',
        {
        alias: "d",
        type: "string",
        description: "Вывести число",
        })        
.argv;

var dateNow = new Date();

switch  (argv._[0])
{
case 'current': 
    if(argv.date != null) console.log(dateNow.getDate());
    if(argv.mounth != null) console.log(dateNow.getMonth());
    if(argv.year != null) console.log(dateNow.getFullYear());
    break;  
case 'sub': 
    if(argv.date != null) console.log(new Date(dateNow - new Date(argv.date*60*60*24*1000)));
    if(argv.mounth != null) console.log(new Date(dateNow - new Date(argv.month)));
    break;  
case 'add':
    if(argv.date != null) console.log(new Date(dateNow + new Date(argv.date*60*60*24*1000)));
    if(argv.mounth != null) console.log(new Date(dateNow + argv.month));
    break;
default: console.log("Неверно указана команда");
}

console.log(dateNow.getMonth()-argv.mounth)