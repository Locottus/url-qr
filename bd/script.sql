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

create table estados(
	estado numeric unique,
	descripcion text not null
);

insert into estados values (0,'no activo');
insert into estados  values (1,'activo');
insert into estados values  (2,'suspendido por enfermedad');
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

