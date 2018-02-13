import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, editExpense, deleteExpense;

beforeEach(() => {
  editExpense = jest.fn();
  deleteExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage expense={expenses[2]} history={history} editExpense={editExpense} deleteExpense={deleteExpense} />);
});

test('should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit of edit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle onClick of delete', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(deleteExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});