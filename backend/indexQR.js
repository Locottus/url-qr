const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queriesQR');
const port = 3006;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

var ruta = "/incyt/api/qr/";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(ruta , (request, response) => {
  response.json({ info: 'Node.js, Express, nginx  and Postgres API #QR URL COVID ' })
})

app.get(ruta + 'getCarnet', db.getCarnet)
app.post(ruta + 'grabaAsistencia', db.postAsistencia)
app.post(ruta + 'reporteCovid', db.postReporteCovid)

app.listen(port, () => {
  console.log(`App qr running on port ${port}.`)
})


function enviaAsistencia() {

  var carnet = document.getElementById(dropDown).value;
  var location = document.getElementById(date).value;
  var selectedText = document.getElementById(txtArea).value;

  var msg = {
      "Oid": oid,
      "selectedStatus": selectedStatus,
      "selectedDate": selectedDate,
      "selectedText": selectedText.replace('"', ' ').replace("'", " ")
  };

      $.ajax({
          url: '@Url.Action("CCMCommStatus", "CCM")',
      type: "POST",
      data: msg,
      beforeSend: function() {

      },
          success: function (response) {
              console.log(response);
              notifySuccess('CCM Communication Status Saved.');
      },
      error: function (xhr, textStatus, errorThrown) {
          alert('Error saving CCM Communication Status' + errorThrown);
      }
  });

}


/*
async function fetchData() {
  //MESES
  var res;
  res = await fetch(stamm + "/getmeses");
  this.meses = await res.json();

  //estaciones
  res = await fetch(stamm + "/getestaciones");
  this.estaciones = await res.json();

  //anios
  res = await fetch(stamm + "/getanios");
  this.anios = await res.json();

  //url = stamm  + "/getmunicipios";
  //url = stamm  + "/getdepartamentos";

  //console.log(estaciones);

}
*/

