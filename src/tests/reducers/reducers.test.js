var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducer', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText : 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText)
    });
  });

  describe('showCompletedReducer', () => {
    it('Should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    });
  });

  describe('TodosReducer', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1)
      expect(res[0].text).toEqual(action.text)
    });

    it('Should toggle todo', () => {
      var todo = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todo), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it('Should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]

      var action = {
        type: 'ADD_TODOS',
        todos
      }

      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    });
  });
});
