import nameReducer from '../src/name.reducer.js';

// nameReducer should initally be an empty array
test('nameReducer should initally be an empty array', () => {
  const action = {};
  const returnedState = nameReducer(undefined, action);
  expect(Array.isArray(returnedState)).toBe(true);
  expect(returnedState.length).toBe(0);
});

// nameReducer should be able to ADD_NAME


// nameReducer should be able to CLEAR_ALL_NAMES


// nameReducer should ignore actions it doesn't care about IGNORE_ME


// STRETCH GOALS

// nameReducer should be able to REMOVE_LAST from the array
// NOTE: You will need to update the reducer for this!


// nameReducer should be able to REMOVE_FIRST from the array
// NOTE: You will need to update the reducer for this!