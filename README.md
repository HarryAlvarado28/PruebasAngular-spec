# Pruebas Angular 

![Pruebas Angular](https://cdn-images-1.medium.com/max/966/1*8EoNKeSPYSuZ105QtkPUVQ.png)

:honeybee: Este proyecto contiene ejemplos de pruebas unitarias y de integración para llevar a un nivel más avanzado el conocimiento de Angular CLI.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

El curso original es [Angular Avanzado: LLeva tus bases al siguiente nivel - MEAN](https://www.udemy.com/angular-avanzado-fernando-herrera/), es dictado por el Profesor **Fernando Herrera** en la Plataforma de [Udemy](https://www.udemy.com/).

## Descripciones por defecto de Angular CLI

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Secciones de Prueba

### Sección 19, Clase 240
Esta es una sección pequeña introductoria al tema de las pruebas de integración y unitarias. Hay dos clases explicativas para comprender un poco más sobre las pruebas.

Esta parte del curso, parte de cero, ya que anteriormente no he cubierto este tema, por lo que si eres experto en esto, posiblemente valga la pena saltarse la siguiente sección y comenzar con las pruebas unitarias intermedias/avanzadas.

Las pruebas están ubicadas en 4 categorías:

- Básicas - realmente son las pruebas más simples que nos ayudarán a iniciar
- Intermedias - Son pruebas con una pequeña dificultad
- Intermedias 2 - Son pruebas con un poco más de complejidad
- Avanzadas - Son pruebas que ya usan diversos servicios y construcción personalizada para usar servicios falsos controlados por nosotros

### Sección 20, Clase 245
Sección dedicada a las pruebas unitarias propiamente, son pruebas muy básicas, por lo que si eres conocedor del tema, las sentirás aburridas.

- Probaremos Strings
- Números
- Booleanos
- Arreglos
- Clases
- Cobertura de nuestras pruebas.

La cobertura sobre las pruebas, nos ayudará a saber que tantas líneas de nuestro código están cubiertas y respaldadas por pruebas unitarias

### Sección 21, Clase 257
Esta sección trabaja con pruebas un poco más complejas y reales:

- Pruebas sobre Event Emitter
- Formularios
- Validaciones
- Saltar pruebas
- Espías
- Simular retornos de servicios
- Simular llamado de funciones

Esta sección da fundamentos muy valiosos para realizar pruebas unitarias y de integración

### Sección 22, Clase 271
Esta sección se enfoca en las pruebas de integración:

- Aprender la configuración básica de una prueba de integración
- Comprobación básica de un componente
- TestingModule
- Archivos SPEC generados automáticamente por el AngularCLI
- Pruebas en el HTML
- Revisar inputs y elementos HTML
- Separación entre pruebas unitarias y pruebas de integración

### Sección 23, Clase 285
Esta sección es un verdadero reto, especialmente entre más te vas acercando al final de la misma. Aquí veremos temas como:

- Revisar la existencia de una ruta
- Confirmar una directiva de Angular (router-outlet y routerLink)
- Errores por selectores desconocidos
- Reemplazar servicios de Angular por servicios falsos controlados
- Comprobar parámetros de elementos que retornen observables
- Subject
- Gets
