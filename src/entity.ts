import { v4 as uuid } from 'uuid';

import { Component } from './components';

export class Entity {
  public components: { [index: string]: any } = {};
  public id: string;
  public systems: any[];

  private count = 0;

  constructor (id: any = uuid(), components: Component[] = []) {
    this.id      = uuid();
    this.systems = [];

    components.forEach((component: Component) => {
      if (component.getDefaults) {
        this.components[component.name] = component.getDefaults();
      } else {
        this.components[component.name] = Object.assign({}, component.defaults);
      }
    });
  }

  addComponent (component: Component): Component {
    if (!component.name) {
      component.name = this.getComponentKey(component);
    }

    if (this.components[component.name]) {
      throw new Error(`Component '${component.name}' already exists.`);
    }

    this.components[component.name] = component;
    this.count++;

    return component;
  }

  updateComponent (component: any): Component {
    const _component = this.components[component.name];

    if (!_component) {
      return this.addComponent(component);
    }

    const keys = Object.keys(component);

    keys.forEach(key => {
      _component[key] = component[key];
    });

    return component;
  }

  removeComponent (componentName: string) {
    if (!this.components[componentName]) {
      throw new Error(`Component '${componentName}' doesn't exists.`);
    }

    this.components[componentName] = undefined;
  }

  print () {
    console.warn(this);

    return this;
  }

  updateComponents (components: Component[]): Component[] {
    components.forEach(component => {
      this.updateComponent(component);
    });

    return components;
  }

  hasComponent (componentName: string): boolean {
    return this.components[componentName] !== undefined;
  }

  static getComponentKey (component: Component): string {
    return component.constructor.name;
  }
}
