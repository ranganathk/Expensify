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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
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
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((expense1, expense2) => {
    if (sortBy === 'date') {
      return expense1.createdAt < expense2.createdAt;
    } else if (sortBy === 'amount') {
      return expense1.amount < expense2.amount;
    }
  })
};

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const rent = store.dispatch(addExpense({ amount: 5000, description: 'Rent', paidTo: 'Flat Owner', createdAt: -1000 }));
// const dinner = store.dispatch(addExpense({ amount: 250, description: 'Dinner', paidTo: 'Mehfil' }));

// store.dispatch(deleteExpense({ id: dinner.expense.id }));

const coffee = store.dispatch(addExpense({ amount: 25000, description: 'Dinner', paidTo: 'CCD' }));

// store.dispatch(deleteExpense({ id: rent.expense.id }));

// store.dispatch(editExpense(coffee.expense.id, { description: 'Coffee' }));

// store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('red'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());

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

