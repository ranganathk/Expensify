import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should delete expense by id', () => {
  const state = expensesReducer(expenses, { type: 'DELETE_EXPENSE', expense: {id: expenses[1].id} });
  expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not delete expense if id is not present', () => {
  const state = expensesReducer(expenses, { type: 'DELETE_EXPENSE', expense: {id: '1000'} });
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const newExpense = {id: '4', description: 'Coffee', amount: 250, paidTo: 'CCD'};
  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense:  newExpense});
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense by id', () => {
  const description = 'Petroleum Bill'
  const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[2].id, updates: { description } });
  expect(state[2].description).toEqual('Petroleum Bill');
});

test('should not update if id is not present', () => {
  const description = 'Blah';
  const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '1000', updates: { description } });
  expect(state).toEqual(expenses);
});