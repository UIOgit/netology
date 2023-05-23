const donenv = require('dotenv');
const http = require ('http');

http.get(process.env.apiURL,(result)=>{
    const {statusCode} = result;
})