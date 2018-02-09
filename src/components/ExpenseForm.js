import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    paidTo: '',
    note: ''
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
    if (amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
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