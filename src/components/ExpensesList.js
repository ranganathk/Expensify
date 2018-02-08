import React from 'react';
import { connect } from 'react-redux';

const ExpensesList = (props) => (
  <div>
    <h1>Hello World</h1>
    <p>I am redux!!!</p>
    <p>I have {props.expenses.length} expenses</p>
    <p>And the current filter text is {props.filters.text}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpensesList);