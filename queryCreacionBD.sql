create database ContactosTelefonicos;
use ContactosTelefonicos;

create table CONTACTO(
	Id int UNSIGNED AUTO_INCREMENT primary key not null,
	Nombre varchar(50),
    Telefono varchar(10),
    Correo varchar (40),
    FechaNacimiento varchar (12)
);

INSERT INTO CONTACTO (Nombre, Telefono, Correo, FechaNacimiento) VALUES ('Santiago Avendaño Escobar', '3016013317', 'santiago@santiago.com', '09/12/2050');
INSERT INTO CONTACTO (Nombre, Telefono, Correo, FechaNacimiento) VALUES ('Mateo Escobar', '3023543536', 'mateo@mateo.com', '04/11/1996');