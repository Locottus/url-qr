const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const port = 3005;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/incyt/api/clima', (request, response) => {
  response.json({ info: 'Node.js, Express, nginx  and Postgres API #CLIMA ' })
})

app.get('/incyt/api/clima/getestaciones', db.getestaciones)
app.get('/incyt/api/clima/getanios', db.getyears)
app.get('/incyt/api/clima/getmeses', db.getmeses)
app.get('/incyt/api/clima/getdata', db.getdata)
app.get('/incyt/api/clima/getdata2', db.getdata2)
app.get('/incyt/api/clima/getdata3', db.getdata3)
app.get('/incyt/api/clima/getdataAVG', db.getdataAVG)
app.get('/incyt/api/clima/getdataAVG2', db.getdataAVG2)
app.get('/incyt/api/clima/getdataAVG3', db.getdataAVG3)
app.get('/incyt/api/clima/getdataAVG', db.getdataAVG)
app.get('/incyt/api/clima/getdataAVG2', db.getdataAVG2)

app.get('/incyt/api/clima/proyeccionAbsolutaAgua', db.proyeccionAbsolutaAgua)
app.get('/incyt/api/clima/proyeccionPorcentualAgua', db.proyeccionPorcentualAgua)
app.get('/incyt/api/clima/proyeccionAbsolutaTemperatura', db.proyeccionAbsolutaTemperatura)
app.get('/incyt/api/clima/proyeccionPorcentualTemperatura', db.proyeccionPorcentualTemperatura)

app.listen(port, () => {
  console.log(`App qr running on port ${port}.`)
})


  