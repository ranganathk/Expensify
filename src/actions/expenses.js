import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', createdAt = 0, amount = 0, paidTo = '' } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    createdAt,
    paidTo,
    amount
  }
});

export const deleteExpense = ({id} = {}) => ({
  type: 'DELETE_EXPENSE',
  expense: {
    id
  }
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
