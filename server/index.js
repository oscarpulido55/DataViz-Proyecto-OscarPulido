const express = require('express');
const cors = require('cors');
var fs = require('fs');
var alasql = require('alasql');

const app = express();
app.use(cors());

var datatxt = fs.readFileSync('extranjeros.json','utf8');
var data = JSON.parse(datatxt);
var resagr = alasql('SELECT nacionalidad as key, SUM(total) AS y \
       FROM ? WHERE total>3000\
       GROUP BY nacionalidad ',[data]);


var datatxt2 = fs.readFileSync('extranjeros.json','utf8');
var data2 = JSON.parse(datatxt);
var resagr2 = alasql('SELECT mes as key, SUM(total) AS y \
       FROM ? WHERE total>1000 \
       GROUP BY mes ',[data]);


app.get('/data/chart2', (req, res) => {
  res.send(resagr);
});

app.get('/data/chart1', (req, res) => {
  res.send(resagr2);
});

app.listen(7001, () => {
  console.log('Example app listening on port 7001!');
});
