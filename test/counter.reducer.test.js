import counterReducer from '../src/counter.reducer.js';

// counterReducer should initally be 0
test('counterReducer should initally be 0', () => {
  const action = {};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(0);
});

// counterReducer should be able to ADD


// counterReducer should be able to SUBTRACT


// counterReducer should be able to ADD & SUBTRACT (two actions)


// counterReducer should ignore actions it doesn't care about IGNORE_ME