import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, paidTo }) => (
  <div>
    The bill {description}, with amount {amount} was paid to {paidTo}.
    <button onClick={() => (
      dispatch(deleteExpense({ id }))
    )}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);