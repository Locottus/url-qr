create database covidqr;

create table usuarios(
	carnet text unique,
	estado numeric default 0,
	fechainicio timestamp  default  CURRENT_TIMESTAMP
);



create table ubicaciones(
	ubicacion numeric unique,
	nombre text not null
);


create table asistencia(
	carnet text not null,
	ubicacion numeric not null,
	fecha timestamp default CURRENT_TIMESTAMP
);


create table contagiados(
	carnet text not null,
	nota text not null,
	estado numeric not null,
	fecha timestamp default CURRENT_TIMESTAMP
);

create table estados(
	estado numeric unique,
	descripcion text not null
);


insert into estados values (0,'no activo');
insert into estados  values (1,'activo');
insert into estados values  (2,'estudiante se ha reportado positivo covid por app web');
insert into estados values  (3,'en cuarentena');
insert into estados values  (4,'regreso de cuarentena');
insert into estados values  (5,'en observacion');
insert into estados values  (6,'se ha reportado covid positivo');
insert into estados values  (7,'confirmado covid positivo');
insert into estados  values (8,'pendiente de confirmar');
insert into estados  values (9,'falso reporte');


create table logusuario(
	fecha timestamp default CURRENT_TIMESTAMP,
	usuario text not null,
	estado numeric not null,
	observacion text null
);


insert into ubicaciones (ubicacion, nombre) values (1,'Ciencias agrícola Aguas');
insert into ubicaciones (ubicacion, nombre) values (2,'Ciencias agrícola Patología vegetal');
insert into ubicaciones (ubicacion, nombre) values (3,'Ciencias agrícola Edafología');
insert into ubicaciones (ubicacion, nombre) values (4,'Ciencias agrícola Química');
insert into ubicaciones (ubicacion, nombre) values (5,'Ciencias de ingeniería Operaciones unitarias');
insert into ubicaciones (ubicacion, nombre) values (6,'Ciencias de ingeniería asfaltos');
insert into ubicaciones (ubicacion, nombre) values (7,'Ciencias de ingeniería Refrigeración y aire acondicionado');
insert into ubicaciones (ubicacion, nombre) values (8,'Ciencias de ingeniería Resistencia de materiales');
insert into ubicaciones (ubicacion, nombre) values (9,'Ciencias de ingeniería Electrónica');
insert into ubicaciones (ubicacion, nombre) values (10,'Ciencias de ingeniería MultiTec');
insert into ubicaciones (ubicacion, nombre) values (11,'Ciencias de ingeniería Soladura');
insert into ubicaciones (ubicacion, nombre) values (12,'Ciencias de ingeniería Topografía');
insert into ubicaciones (ubicacion, nombre) values (13,'Ciencias de ingeniería hidráulica y neumática');
insert into ubicaciones (ubicacion, nombre) values (14,'Ciencias de ingeniería Planta piloto de alimentos');
insert into ubicaciones (ubicacion, nombre) values (15,'Ciencias de ingeniería Suelos');
insert into ubicaciones (ubicacion, nombre) values (16,'Ciencias de ingeniería Ingeniería de métodos');
insert into ubicaciones (ubicacion, nombre) values (17,'Ciencias de ingeniería Maquinas, herramienta y bancos');
insert into ubicaciones (ubicacion, nombre) values (18,'Ciencias de ingeniería Potencia eléctrica');
insert into ubicaciones (ubicacion, nombre) values (19,'Ciencias de ingeniería Control y automatización de procesos ');
insert into ubicaciones (ubicacion, nombre) values (20,'Ciencias de ingeniería Autotronica');
insert into ubicaciones (ubicacion, nombre) values (21,'Ciencias de la salud Anatomía');
insert into ubicaciones (ubicacion, nombre) values (22,'Ciencias de la salud Fisiología');
insert into ubicaciones (ubicacion, nombre) values (23,'Ciencias de la salud Inmunología ');
insert into ubicaciones (ubicacion, nombre) values (24,'Ciencias de la salud Microbiología');
insert into ubicaciones (ubicacion, nombre) values (25,'Criminología Investigación criminal y forense');
insert into ubicaciones (ubicacion, nombre) values (26,'Criminología computación ');
insert into ubicaciones (ubicacion, nombre) values (27,'Criminología Química CRIMFOR');
insert into ubicaciones (ubicacion, nombre) values (28,'Criminología Escena de crimen');
insert into ubicaciones (ubicacion, nombre) values (29,'Criminología Identificación');
insert into ubicaciones (ubicacion, nombre) values (30,'Física Química Análisis químico e instrumental');
insert into ubicaciones (ubicacion, nombre) values (31,'Física Química Química especifica B-19');
insert into ubicaciones (ubicacion, nombre) values (32,'Física Química Multidisciplinario');
insert into ubicaciones (ubicacion, nombre) values (33,'Física Química Microbiología');
insert into ubicaciones (ubicacion, nombre) values (34,'Física Química Química especifica B-17');
insert into ubicaciones (ubicacion, nombre) values (35,'Física Química Química Especifica B-10');
insert into ubicaciones (ubicacion, nombre) values (36,'Física Química Física');
insert into ubicaciones (ubicacion, nombre) values (37,'Física Química Astronomía');
insert into ubicaciones (ubicacion, nombre) values (38,'Física Química Química Especifica B-4');
insert into ubicaciones (ubicacion, nombre) values (39,'Informática y sistemas Computación G-302');
insert into ubicaciones (ubicacion, nombre) values (40,'Informática y sistemas DSP y hardware T-211A');
insert into ubicaciones (ubicacion, nombre) values (41,'Informática y sistemas Computación y diseño T-204');
insert into ubicaciones (ubicacion, nombre) values (42,'Informática y sistemas Diseño MAC M-316');
insert into ubicaciones (ubicacion, nombre) values (43,'Informática y sistemas Infraestructura y hardware T-214');
insert into ubicaciones (ubicacion, nombre) values (44,'Informática y sistemas Informática y sistemas T-213');
insert into ubicaciones (ubicacion, nombre) values (45,'Informática y sistemas Computación y diseño M-315');
insert into ubicaciones (ubicacion, nombre) values (46,'Informática y sistemas Radio-comunicaciones T-211B');
insert into ubicaciones (ubicacion, nombre) values (47,'Informática y sistemas Comunicaciones y circuitos T-212');
insert into ubicaciones (ubicacion, nombre) values (48,'Informática y sistemas Computación T-203');
insert into ubicaciones (ubicacion, nombre) values (49,'Informática y sistemas Redes y telecomunicaciones T-216');

