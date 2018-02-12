import { addExpense, editExpense, deleteExpense } from '../../actions/expenses';

test('should setup delete expense object', () => {
  const action = deleteExpense({ id: '123qwe' });
  expect(action).toEqual({ type: 'DELETE_EXPENSE', expense: { id: '123qwe' }} );
});

test('should setup edit expense object', () => {
  const action = editExpense('123qwe', { note: 'New Note' });
  expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123qwe', updates: { note: 'New Note' } } );
});

test('should setup add expense object with given values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Again!!!',
    createdAt: 100000,
    paidTo: 'Owner',
    amount: 8000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({ type: 'ADD_EXPENSE', expense: {
    ...expenseData,
    id: expect.any(String)
  }} );
});

test('should setup add expense object with default values', () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({ type: 'ADD_EXPENSE', expense: {
    description: '',
    note: '',
    createdAt: 0,
    paidTo: '',
    amount: 0,
    id: expect.any(String)
  }} );
});