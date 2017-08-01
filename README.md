Entity Component System
=======================

> Entity-component-system (ECS) is an architectural pattern that is mostly 
> used in game development. An ECS follows the Composition over inheritance 
> principle that allows greater flexibility in defining entities where every 
> object in a game's scene is an entity (e.g. enemies, bullets, vehicles, 
> etc.).

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
