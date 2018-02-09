import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpensese from '../selectors/expenses';

const ExpensesList = (props) => (
  <div>
    {props.expenses.map((expense) => (
        <ExpenseListItem {...expense} key={expense.description}/>
      )
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: visibleExpensese(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);