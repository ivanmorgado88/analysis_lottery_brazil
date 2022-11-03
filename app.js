const port = 3000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const fs = require("fs");
const { parse } = require("csv-parse");

const readline = require("readline");

const stream = fs.createReadStream("results/megasena.csv");
const reader = readline.createInterface({ input: stream });

var data = [];
reader.on("line", row => {
  data.push(row.split());
});
reader.on("close", () => {
  console.log(data.length);
});
console.log(data.length)



// const mega = function () {
//     fs.createReadStream("results/megasena.csv")
//         .pipe(parse({ delimiter: ",", from_line: 2 }))
//         .on("data", function (row) {
//             console.log(row);
        
//         })
//         .on("error", function (error) {
//             console.log(error.message);
//         })
//         .on("end", function () {
//             console.log("finished");
//         });

// }
// mega()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/h', (req, res) => {
//     axios.get('https://loterias.caixa.gov.br/Paginas/Download-Resultados.aspx')
//         .then((res) => {
//             const html = res.data
//             console.log(html)
//         })
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })