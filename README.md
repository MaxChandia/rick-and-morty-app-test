# Aplicación de Reclutamiento de Personajes de Rick y Morty 🚀👽

## Descripción
La nueva Ciudadela Galáctica Interdimensional busca agentes. Esta aplicación web desarrollada con Angular permite a los usuarios explorar, ver detalles y reclutar personajes del universo de Rick y Morty. Ofrece una interfaz interactiva para descubrir y gestionar un equipo de personajes únicos.

## Características ✨
- Exploración completa de personajes de Rick y Morty
- Paginación y filtrado avanzado
- Detalles individuales de personajes
- Sistema de reclutamiento de equipo
- Diseño responsivo con Angular Material

## Tecnologías Utilizadas 🛠️
- Angular
- RxJS
- Angular Material
- Rick and Morty API

## Requisitos Previos 📋
- Node.js (v16+ recomendado)
- Angular CLI
- npm o yarn

## Instalación 🔧

### Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
```

### Instalar Dependencias
```bash
npm install
```

### Ejecutar la Aplicación
```bash
ng serve
```

Abre tu navegador en http://localhost:4200/

**Demostración en Vivo:** https://rick-and-morty-app-test.vercel.app/

## Estructura del Proyecto 📂

### Componentes Principales
- `LandingPageComponent`: Página principal de exploración
- `AgentesComponent`: Listado de personajes con filtros
- `AgentesDetallesComponent`: Vista detallada de personajes
- `AgentesReclutadosComponent`: Gestión de personajes reclutados

### Servicios
- `ApiService`: Gestión de llamadas a la API
- `RecruitedCharactersService`: Control de reclutamiento de personajes

## Reglas de Reclutamiento 🚫
- Máximo 8 personajes por equipo
- No se pueden reclutar:
  * Personajes fallecidos
  * Personajes con estado desconocido

## Endpoints de API 🌐
- **URL Base:** https://rickandmortyapi.com/api/character
- Soporta carga completa del catálogo de personajes

## Rutas de la Aplicación 🗺️
- `/` - Página de Inicio
- `/agentes` - Listado de Personajes
- `/agentes/:id` - Detalles de Personaje
- `/agentes-reclutados` - Equipo Reclutado

## Contacto 📫
[GitHub - MaxChandia](https://github.com/MaxChandia)

## Referencias 📚
- [Documentación de Angular](https://angular.io/docs)
- [Rick and Morty API](https://rickandmortyapi.com/)
