import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  changeDates = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  focusOnDate = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }))
  }

  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      return this.props.sortByAmount();
    } else {
      return this.props.sortByDate();
    }
  };

  onTextChange = (e) => (this.props.setTextFilter(e.target.value));

  render() {
    return (
      <div>
        <input 
          value={this.props.filters.text} 
          onChange={this.onTextChange}
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.changeDates} 
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.focusOnDate}
          isOutsideRange={(day) => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = () => ({
  setStartDate: (date) => (dispatch(setStartDate(date))),
  setEndDate: (date) => (dispatch(setEndDate(date))),
  setTextFilter: (text) => (dispatch(setTextFilter(text))),
  sortByAmount: () => (dispatch(sortByAmount())),
  sortByDate: () => (dispatch(sortByDate()))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
