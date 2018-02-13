import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should display error when form is submited without amount and description', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const description = 'Coffee';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value: description }
  });
  expect(wrapper.state('description')).toBe(description);
});

test('should set note on input change', () => {
  const note = 'New Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value: note }
  });
  expect(wrapper.state('note')).toBe(note);
});

test('should set amount on input change', () => {
  const amount = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: amount }
  });
  expect(wrapper.state('amount')).toBe(amount);
});

test('should set amount on input change', () => {
  const amount = '12.549';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: amount }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    paidTo: expenses[0].paidTo,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  })
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focused on focus change', () => {
  const focus = { focused: true };
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')(focus);
  expect(wrapper.state('calenderFocused')).toBe(true);
});