import moment from 'moment';

export default (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((expense1, expense2) => {
    if (sortBy === 'date') {
      return expense1.createdAt < expense2.createdAt;
    } else if (sortBy === 'amount') {
      return expense1.amount < expense2.amount;
    }
  })
};
