import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should set up filter start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should set up filter end date', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set up filter sortBy to amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should set up filter sortBy to date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set up filter with text provided', () => {
  const action = setTextFilter('Rent');
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: 'Rent'
  });
});

test('should set up filter with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: ''
  });
});
