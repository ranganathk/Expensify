import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    paidTo: '',
    note: '',
    createdAt: moment(), 
    calenderFocused: false,
    error: ''
  };

  changeDescription = (ev) => {
    const description = ev.target.value;
    this.setState(() => ({ description }));
  };

  changePayee = (ev) => {
    const paidTo = ev.target.value;
    this.setState(() => ({ paidTo }));
  };

  changeNote = (ev) => {
    const note = ev.target.value;
    this.setState(() => ({ note }));
  };

  changeAmount = (ev) => {
    const amount = ev.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  changeDate = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  focusOnDate = ({focused}) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  addExpense = (ev) => {
    ev.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Kindly add a description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount),
        paidTo: this.state.paidTo,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form 
          onSubmit={this.addExpense}
        >
          <input 
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.changeDescription}
            autoFocus
          />
          <input 
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.changeAmount}
          />
          <input 
            type="text"
            placeholder="payee"
            value={this.state.paidTo}
            onChange={this.changePayee}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.changeDate} 
            focused={this.state.calenderFocused}
            onFocusChange={this.focusOnDate}
            isOutsideRange={(day) => false}
            numberOfMonths={1}
          />
          <textarea 
            placeholder="Add a note (optional)"
            value={this.state.note}
            onChange={this.changeNote}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  };
};