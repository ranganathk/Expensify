import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import { addExpense, deleteExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import configStore from './store/configStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configStore();

store.dispatch(addExpense({ amount: 1000, description: 'Water Bill', paidTo: 'GHMC' }));
store.dispatch(addExpense({ amount: 1500, description: 'Gas Bill', paidTo: 'Bharat Gas' }));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
