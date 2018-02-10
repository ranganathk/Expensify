import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  changeDates = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  focusOnDate = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }))
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.filters.text} 
          onChange={(e) => ( 
            this.props.dispatch(setTextFilter(e.target.value))
          )}
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={(e) => {
            if (e.target.value === 'amount') {
              return this.props.dispatch(sortByAmount());
            } else {
              return this.props.dispatch(sortByDate());
            }
          }}
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
