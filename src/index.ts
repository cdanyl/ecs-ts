import { Entity } from './entity';
import { HealthComponent } from './components/health';

const entity = new Entity();

entity.addComponent(new HealthComponent());

entity.print();
