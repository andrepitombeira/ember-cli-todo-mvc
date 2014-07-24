import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

var todo;
moduleFor('controller:todo', 'TodoController', {
  // Specify the other units that are required for this test.
  needs: ['controller:todos'],
  subject: function(options, factory) {
      todo = mockTodo({
        isCompleted: true
      });

      return factory.create({
        model: todo
      });
  }
});

function mock(properties) {
    return Ember.Object.create(properties || {});
}

function mockTodo(properties) {
    var m = mock(properties);
    m.reopen({
        save: function() {
            return Ember.RSVP.resolve();
        }
    });
    return m;
}

test('isCompleted: get', function() {
    var controller = this.subject();
    equal(controller.get('isCompleted'), true);

    todo.set('isCompleted', false);

    equal(controller.get('isCompleted'), false);
});

test('isCompleted: set', function() {
    var controller = this.subject();

    equal(controller.get('isCompleted'), true);
    equal(todo.get('isCompleted'), true);

    controller.set('isCompleted', false);

    equal(controller.get('isCompleted'), false);
    equal(todo.get('isCompleted'), false);
});


