const Pool = require('pg').Pool

 const pool = new Pool({
   user: 'postgres',
   host: '172.17.250.12',
   database: 'covidqr',
   password: 'postgres2020!Incyt',
   port: 5432,
 })

/*
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'covidqr',
  password: 'Guatemala1',
  port: 5432,
})
*/

 const getCarnet = (request, response) => {
   console.log('finding carnet');
  const carnet = request.query.carnet;
  var q = `select count(*) from usuarios where carnet = '${carnet}'  ` ;
  console.log(q);
  pool.query(q, (error, results) => {
    if (error) {
      response.status(500).send('{"msg":"' + error + '"}');
    }
    response.status(200).json(results.rows);
  })
 }

 const getUbicaciones = (request, response) => {
  console.log('returning ubicaciones');
 var q = `select * from ubicaciones  ` ;
 console.log(q);
 pool.query(q, (error, results) => {
   if (error) {
     response.status(500).send('{"msg":"' + error + '"}');
   }
   response.status(200).json(results.rows);
 })
}

const getRangoAsistencia = (request, response) => {
 console.log('returning ubicaciones');
 const ubicacion = request.query.ubicacion;
 const fecha = request.query.fecha;
 const horaInicial = request.query.horaInicial;
 const horaFinal = request.query.horaFinal;
 var f1 = fecha + ' ' + horaInicial;
 var f2 = fecha + ' ' + horaFinal;
 var q = `select * from ubicaciones  where ubicacion = '${ubicacion}'  
    and fecha between '${f1}' and   '${f2}'    ` 
 
 ;
 console.log(q);
 pool.query(q, (error, results) => {
   if (error) {
     response.status(500).send('{"msg":"' + error + '"}');
   }
   response.status(200).json(results.rows);
 })
}




 const postAsistencia = (request, response) => {
   console.log('entering postAsistencia');
  var {  ubicacion, carnet } = request.body;
let cadena = `insert into asistencia (ubicacion, carnet) values  ('${ubicacion}','${carnet}') `  ;
console.log(cadena);
pool.query(cadena, (error, results) => {
if (error) {
  response.status(500).send('{"msg":"' + error + '"}');
}
//response.status(201).send(`User added with ID: ${results.body}`);
response.status(201).send(`{'msg':'OK'}`);
})
}

const postReporteCovid = (request, response) => {
  console.log('entrando a post reporte covid');
  var {  carnet, nota, estado } = request.body;
let cadena = ` insert into contagiados (carnet,nota,estado ) values  ('${carnet}','${nota}','${estado}') `  ;
console.log(cadena);
pool.query(cadena, (error, results) => {
if (error) {
  response.status(500).send('{"msg":"' + error + '"}');
}
response.status(201).send(`{'msg':'OK'}`);
})
}


module.exports = {
  getCarnet,
  postAsistencia,
  postReporteCovid,
  getUbicaciones,
  getRangoAsistencia

  }
  
