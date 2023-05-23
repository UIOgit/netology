const donenv = require('dotenv');
const http = require ('http');
const city = 'London';

const testURL = 'http://api.weatherstack.com/current?access_key=f55715e7ff17f32de5b922fa44fb05f9&query=London';

http.get(process.env.apiURL + '?access_key=' + process.env.apiKey + '&query='+ city, (result)=>{
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
