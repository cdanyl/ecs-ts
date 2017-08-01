import { v4 as uuid } from 'uuid';

import { Component } from './components';

export class Entity {
  public components: { [index: string]: any } = {};
  private count = 0;
  private id: string;


  constructor () {
    this.id = uuid();
  }

  addComponent (component: Component) {
    const componentName = this.getComponentKey(component);

    if (this.components[componentName]) {
      throw new Error(`Component '${componentName}' already exists.`);
    } else {
      this.components[componentName] = component;
      this.count++;
    }
  }

  removeComponent (component: Component) {
    this.components.delete(this.getComponentKey(component));

    return this;
  }

  print () {
    console.warn(this);

    return this;
  }

  private getComponentKey = (component: Component): string => component.constructor.name;
}
