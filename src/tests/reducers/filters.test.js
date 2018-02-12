import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filters value', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'date'
  });
}); 

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
}); 

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const action = { type: 'SORT_BY_DATE' };

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toEqual('date');
}); 

test('should set filter text', () => {
  const state = filtersReducer(undefined, { type: 'SET_FILTER_TEXT', text: 'test' });
  expect(state.text).toBe('test');
}); 

test('should set sortBy to amount', () => {
  const date = moment().subtract(5, 'days');
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date });
  expect(state.startDate).toEqual(date);
}); 

test('should set sortBy to amount', () => {
  const date = moment().add(5, 'days');
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toEqual(date);
}); 