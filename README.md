#Aplicación de Reclutamiento de Personajes de Rick y Morty 

"La nueva Ciudadela Galáctica Interdimensional busca agentes"

#Descripción

Esta aplicación web fue desarrollada con Angular que permite a los usuarios explorar, ver detalles y reclutar personajes del universo de Rick y Morty. La aplicación ofrece una interfaz interactiva para descubrir y gestionar un equipo de personajes.

#Características

Exploración completa de personajes de Rick y Morty
Paginación y filtrado avanzado
Detalles individuales de personajes
Sistema de reclutamiento de equipo
Diseño responsivo con Angular Material

#Tecnologías Utilizadas

Angular
RxJS
Angular Material
Rick and Morty API
Requisitos Previos

Node.js (v16+ recomendado)
Angular CLI
npm o yarn

#Instalación

Clonar el repositorio:

git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-app

Instalar dependencias:

npm install

Ejecutar la aplicación:

ng serve

Abrir el navegador en http://localhost:4200/

#Estructura del Proyecto

Componentes Principales

LandingPageComponent: Página principal de exploración
AgentesComponent: Listado de personajes con filtros
AgentesDetallesComponent: Vista detallada de personajes
AgentesReclutadosComponent: Gestión de personajes reclutados

Servicios

ApiService: Gestión de llamadas a la API
RecruitedCharactersService: Control de reclutamiento de personajes

#Reglas de Reclutamiento

Máximo 8 personajes por equipo

No se pueden reclutar:

Personajes fallecidos
Personajes con estado desconocido


#Endpoints de API

Base URL: https://rickandmortyapi.com/api/character
Soporta carga completa de catálogo de personajes

#Rutas de la Aplicación

/ - Página de Inicio
/agentes - Listado de Personajes
/agentes/:id - Detalles de Personaje
/agentes-reclutados - Equipo Reclutado


#Contacto

https://github.com/MaxChandia

Referencias

Documentación de Angular
Rick and Morty API