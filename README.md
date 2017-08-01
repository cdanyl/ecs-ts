# Build an Entity Component System Game in Typescript

Typescript entity-component-system library, that allows modularity.

It is a general architecture pattern that could be applied to many domains, 
the predominant uses of it are in game development.

I'll cover the basic topics of ECS and we'll build a basic HTML5 game about eating rectangles
oh-so creatively called "Rectangle Eater".

## Key Features

- Entity: An entity is just an ID
- Component: Components are just data.
- System: Logic that runs on every entity that has a component of the system. For example,
a "Renderer" system would draw all entities that have a "appearance" component.

## Commands

`npm start` — Run your local development server

`npm run build` — Compile your app into static, production-ready files

`npm run lint` — Run TSLint on files in the `src` directory

`npm run test` — Run tests with coverage output shown

`npm run test:watch` — Run tests continuously as files inside `src` change
