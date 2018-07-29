import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter , sortByDate ,sortByAmount , setStartDate , setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFoucused : false
    }
    onDatesChange = ({startDate , endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFoucused) => {
        this.setState(() => ({calendarFoucused : calendarFoucused }))
    }
    onTextChange =(e) =>{
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => { 
        if (e.target.value === 'date'){
            this.props.sortByDate();
        }else if (e.target.value === 'amount' ){
            this.props.sortByAmount();
        }
    }
    render(props){
        return(
            <div>
            <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange}
            />
            <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
            >
                <option value="date">Date</option>
                <option value="amount">amount</option>

            </select>
            <DateRangePicker 
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onDatesChange}
                focusedInput ={this.state.calendarFoucused}
                onFocusChange = {this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
            
        </div>

        );
    }
}
const mapStateToProps = (state) => {
    return{
        filters : state.filters
    };
};
const mapDispatchToProps = (dispatch) =>({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters) ;