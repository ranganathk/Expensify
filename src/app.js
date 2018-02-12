import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import configStore from './store/configStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.dispatch(addExpense({ amount: 1000, description: 'Water Bill', paidTo: 'GHMC', createdAt: 12000 }));
store.dispatch(addExpense({ amount: 1500, description: 'Gas Bill', paidTo: 'Bharat Gas', createdAt: 2000 }));
store.dispatch(addExpense({ amount: 5000, description: 'Rent', paidTo: 'Flat Owner' }));

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
