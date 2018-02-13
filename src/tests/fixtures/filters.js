import moment from 'moment';

const filters = {
  sortBy: 'date',
  text: '',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  sortBy: 'amount',
  text: 'Rent',
  startDate: moment(),
  endDate: moment().add(10, 'days')
};

export { filters, altFilters };