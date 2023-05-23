const donenv = require('dotenv');
const http = require ('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('city',{
        alias: "c",
        type: "string",
        description: "Название города"
    }).default('city', 'Cherepovets').argv;
console.log(argv);

http.get(process.env.apiURL + '?access_key=' + process.env.apiKey + '&query='+ argv.city, (result)=>{
    const {statusCode} = result;
        if (statusCode !== 200){
            console.log(`statusCode: ${statusCode}`)
        return
    }

    result.setEncoding('utf8');
    let rowData = '';
    result.on('data', (chunk) => rowData += chunk);
    result.on('end', () => {
        let parseData = JSON.parse(rowData);
        console.log(parseData);
    })
}).on('error', (error) => {
    console.error(error)
})
