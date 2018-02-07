import { createStore, bindActionCreators } from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementValue = action.incrementBy ? action.incrementBy : 1;
      return { count: state.count + incrementValue };
    case 'DECREMENT':
      const decrementValue = action.decrementBy ? action.decrementBy : 1;
      return { count: state.count - decrementValue };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.count };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: 'INCREMENT',
  'incrementBy': 10
});
    
store.dispatch({
  type: 'INCREMENT'
});
    
store.dispatch({
  type: 'DECREMENT',
  'decrementBy': 5
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'SET', 
  count: 200
});

unsubscribe();

    