import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text', () => {
  const filters = {
    text: 'bill',
    endDate: undefined,
    startDate: undefined,
    sortBy: 'date'
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2] ]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    endDate: undefined,
    startDate: moment(),
    sortBy: 'date'
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1] ]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    startDate: undefined,
    endDate: moment(),
    sortBy: 'date'
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    endDate: undefined,
    startDate: undefined,
    sortBy: 'date'
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    endDate: undefined,
    startDate: undefined,
    sortBy: 'amount'
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
});