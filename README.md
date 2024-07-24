# Star Wars Starships Angular Project

Este proyecto tiene como objetivo desarrollar una aplicación web usando Angular para consumir y mostrar datos sobre naves espaciales del universo de Star Wars. La aplicación debe permitir a los usuarios visualizar un listado de naves, ver detalles de cada nave, y gestionar usuarios con autenticación.

## Conocimientos Requeridos

Para facilitar la resolución de esta práctica, es importante tener conocimientos en:

- **Angular 15/16**: Entender la estructura básica del proyecto y cómo implementarla.
- **POSTMAN**: Herramienta para probar llamadas a APIs.
- **Gestión de Guard**: Protege rutas en la aplicación.
- **Routing**: Configuración de rutas en Angular.
- **Servicios**: Creación y uso de servicios en Angular.
- **Tokens JWT**: Autenticación basada en JSON Web Tokens.
- **Paginación**: Manejo de datos paginados desde la API.

## Información del Proyecto

El objetivo es desarrollar una aplicación que muestre información sobre las naves de Star Wars utilizando la API de Star Wars. La aplicación debe presentar un listado de naves y permitir ver los detalles de cada una.

### API a Consumir

- **Documentación**: [SWAPI Documentation](https://swapi.dev/documentation)
- **API Principal**: [https://swapi.dev/api/starships](https://swapi.dev/api/starships)
- **Alternativa**: [https://swapi.py4e.com/api/starships](https://swapi.py4e.com/api/starships)
- **Imágenes**: [Star Wars Visual Guide](https://starwars-visualguide.com/assets/img/starships/5.jpg)

**Nota**: La paginación está implementada en la API. Puedes usar el parámetro `page` para obtener más datos.

## Ejercicios

### Nivel 1

#### Ejercicio 1
Implementar la pantalla principal que muestra un listado de naves. Debe mostrar:
- Nombre de la nave
- Modelo

#### Ejercicio 2
Crear una página de detalles para cada nave. El usuario puede acceder a esta página desde el listado.

#### Ejercicio 3
Agregar un botón "View More" al final del listado para cargar más naves mediante paginación. Alternativamente, se puede implementar un scroll infinito.

#### Ejercicio 4
Modernizar el diseño de la web para que se asemeje al sitio oficial de Star Wars.

#### Ejercicio 5
Implementar una página de bienvenida con un botón que redirija a la página principal de naves. Agregar una barra de navegación superior para el acceso a la página principal.

#### Ejercicio 6
Crear una pantalla de login y registro usando JSON-SERVER-AUTH con JWT para la autenticación. Instrucciones:
1. Instalar: `npm install -D json-server@0.17.4 json-server-auth`
2. Crear `db.json` para usuarios.
3. Activar el backend: `npx json-server-auth db.json`

#### Ejercicio 7
Proteger el listado de naves para que solo sea visible para usuarios registrados. Utilizar Angular Guard para redirigir a la página de login cuando sea necesario.

### Nivel 2

#### Ejercicio 8
Mejorar la ficha de cada nave mostrando tarjetas de los pilotos que han utilizado la nave. Crear un componente para esto.

#### Ejercicio 9
Mostrar las tarjetas de las películas en las que ha aparecido la nave.

## Instalación

1. Clonar el repositorio.
2. Navegar al directorio del proyecto: `cd star-wars-starships`
3. Instalar dependencias: `npm install`
4. Ejecutar el servidor de desarrollo: `ng serve`

## Requisitos Adicionales

- **Angular CLI**: Asegúrate de tener Angular CLI instalado (`npm install -g @angular/cli`).
- **JSON-SERVER-AUTH**: Utilizar para la autenticación (opcional para pruebas).

## Enlaces Útiles

- [Angular 15/16 Free Course #1 - Create Base Project Structure](https://www.youtube.com/watch?v=XYZ)
- [JSON-SERVER-AUTH Tutorial](https://github.com/realistic/JSON-SERVER-AUTH)

---

¡Buena suerte con el desarrollo de la aplicación y que la Fuerza te acompañe!
