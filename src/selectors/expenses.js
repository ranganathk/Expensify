export default (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((expense1, expense2) => {
    if (sortBy === 'date') {
      return expense1.createdAt < expense2.createdAt;
    } else if (sortBy === 'amount') {
      return expense1.amount < expense2.amount;
    }
  })
};
