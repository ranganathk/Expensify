import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, paidTo }) => (
  <div>
    The bill {description}, with amount {amount} was paid to {paidTo}.
    <Link to={`edit/${id}`}>Edit</Link>
  </div>
);

export default ExpenseListItem;