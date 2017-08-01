import { Component } from '../components';

export class HealthComponent {
  name: string;
  value: number;

  constructor (value: any = 20) {
    this.value = value;
  }
}
