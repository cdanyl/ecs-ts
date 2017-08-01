import { Entity } from '../src/entity';
import { Component } from '../src/components';

describe('Entity', () => {
  it('should initialize', () => {
    const entity = new Entity();

    expect(entity.id).toEqual(expect.any(String));
  });

  it('should have an unique id', () => {
    const entity1 = new Entity();
    const entity2 = new Entity();

    expect(entity1.id).not.toEqual(entity2.id);
  });

  it('should support default components', () => {
    const entity = new Entity(0, [{
      name    : 'test',
      defaults: { foo: 'bar' }
    }]);

    expect(entity.components.test).toEqual({ foo: 'bar' });
  });

  it('should add a void object when a name is passed', () => {
    const entity = new Entity();

    const component = new EmptyComponentTest();
    component.name  = 'test';

    entity.addComponent(component);

    expect(entity.components.test).toEqual({ name: 'test' });
  });

  it('should update an existing component', () => {
    const entity = new Entity();

    const componentA = new SimpleComponentATest();
    componentA.foo   = 'bar';

    entity.addComponent(componentA);

    expect(entity.components.testA).toEqual({
      foo : 'bar',
      name: 'testA'
    });

    componentA.foo = 'foo';

    entity.updateComponent(componentA);

    expect(entity.components.testA).toEqual({
      foo : 'foo',
      name: 'testA'
    });
  });

  it('should update a list of existing component', () => {
    const entity = new Entity();

    const componentA = new SimpleComponentATest();
    componentA.foo   = 'bar1';

    entity.addComponent(componentA);

    const componentB = new SimpleComponentBTest();
    componentB.foo   = 'bar2';

    entity.addComponent(componentB);

    entity.updateComponents([componentA, componentB]);

    expect(entity.components.testA).toEqual({
      name: 'testA',
      foo : 'bar1',
    });

    expect(entity.components.testB).toEqual({
      name: 'testB',
      foo : 'bar2',
    });
  });

  it('should return true when checking added components', () => {
    const entity     = new Entity();
    const componentA = new SimpleComponentATest();
    const componentB = new SimpleComponentBTest();

    entity.addComponent(componentA);
    entity.addComponent(componentB);

    expect(entity.hasComponent('testA')).toEqual(true);
    expect(entity.hasComponent('testB')).toEqual(true);
    expect(entity.hasComponent('d')).toEqual(false);
  });

  it('should return false when checking removed components', function() {
    const entity = new Entity();

    entity.addComponent(new EmptyComponentTest());
    entity.addComponent(new SimpleComponentATest());
    entity.addComponent(new SimpleComponentBTest());

    entity.removeComponent('testA');
    entity.removeComponent('testB');

    expect(entity.hasComponent('EmptyComponentTest')).toEqual(true);
    expect(entity.hasComponent('testA')).toEqual(false);
    expect(entity.hasComponent('testB')).toEqual(false);
  });

  it('should return the correct component', function() {
    const entity = new Entity();
    const ca     = new EmptyComponentTest();
    const cb     = new SimpleComponentATest();
    const cc     = new SimpleComponentBTest();

    entity.addComponent(ca);
    entity.addComponent(cb);
    entity.addComponent(cc);

    expect(entity.getComponent('a')).toEqual(ca);
    expect(entity.getComponent('b')).toEqual(cb);
    expect(entity.getComponent('c')).toEqual(cc);
    expect(entity.getComponent('d')).toEqual(undefined);
  });
});

class EmptyComponentTest implements Component {
  public name: string;
}

class SimpleComponentATest implements Component {
  public name = 'testA';
  public foo  = 'bar';
}

class SimpleComponentBTest implements Component {
  public name = 'testB';
  public foo  = 'bar';
}
