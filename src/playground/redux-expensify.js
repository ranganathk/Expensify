import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const defaultExpenses = [];

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const addExpense = ({ description = '', note = '', createdAt = 0, amount = 0, paidTo = '' } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    createdAt,
    paidTo,
    amount
  }
});

const deleteExpense = ({id} = {}) => ({
  type: 'DELETE_EXPENSE',
  expense: {
    id
  }
});

const expensesReducer = (state = defaultExpenses, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'DELETE_EXPENSE':
      return state.filter(({id}) => id !== action.expense.id);
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

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

const rent = store.dispatch(addExpense({ amount: 5000, description: 'Rent', paidTo: 'Flat Owner' }));
const dinner = store.dispatch(addExpense({ amount: 250, description: 'Dinner', paidTo: 'Mehfil' }));

store.dispatch(deleteExpense({ id: dinner.expense.id }));

const coffee = store.dispatch(addExpense({ amount: 250, description: 'Dinner', paidTo: 'CCD' }));

store.dispatch(deleteExpense({ id: rent.expense.id }));

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

unsubscribe();

