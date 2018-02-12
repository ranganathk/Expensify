import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
  {
    description: 'Rent',
    note: '',
    createdAt: moment().subtract(10, 'days').valueOf(),
    paidTo: 'Owner',
    amount: 14000
  },
  {
    description: 'Water Bill',
    note: '',
    createdAt: moment().add(10, 'days').valueOf(),
    paidTo: 'GHMC',
    amount: 105
  },
  {
    description: 'Gas Bill',
    note: '',
    createdAt: moment().subtract(5, 'days').valueOf(),
    paidTo: 'Bharat Gas',
    amount: 400
  }
];

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