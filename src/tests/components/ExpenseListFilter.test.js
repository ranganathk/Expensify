import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setStartDate={setStartDate} 
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test('should render ExpenseListFilter component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter component with alt data', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle setTextFilter on filter text change', () => {
  const text = 'Rent';
  wrapper.find('input').simulate('change', {
    target: { value: text }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should handle sortBy amount on filter change', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle sortBy date on filter change', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should handle set start and end date change on DateRangePicker', () => {
  const startDate = moment();
  const endDate = moment().add(2, 'months');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change on DateRangePicker', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
  expect(wrapper.state('calenderFocused')).toBe('startDate');
});