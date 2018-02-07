import { createStore, combineReducers } from 'redux';

const defaultExpenses = [];

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = defaultExpenses, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(combineReducers( {
  expenses: expensesReducer,
  filters: filtersReducer
}));

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'asda',
    note: 'This is important',
    description: 'rent',
    createdAt: undefined,
    amount: 0,
    paidTo: 'Blah'
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // can be date or amount
    startDate: undefined,
    endDate: undefined
  }
};

