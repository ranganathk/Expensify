import { createStore } from 'redux';

const store = createStore(() => ({count: 0, 'blah': 'Hello'}));

console.log(store.getState());