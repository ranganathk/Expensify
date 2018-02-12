import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Rent',
    note: '',
    createdAt: moment().subtract(10, 'days').valueOf(),
    paidTo: 'Owner',
    amount: 14000
  },
  {
    id: '2',
    description: 'Water Bill',
    note: '',
    createdAt: moment().add(10, 'days').valueOf(),
    paidTo: 'GHMC',
    amount: 105
  },
  {
    id: '3',
    description: 'Gas Bill',
    note: '',
    createdAt: moment().subtract(5, 'days').valueOf(),
    paidTo: 'Bharat Gas',
    amount: 400
  }
];
