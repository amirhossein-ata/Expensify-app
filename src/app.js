import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' ;
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {setTextFilter} from './actions/filters';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css' ;
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css' ;


const store = configureStore();

store.dispatch(addExpense({description : 'Water bill',amount:20}));
store.dispatch(addExpense({description : 'Gas bill' , amount:400}));
store.dispatch(addExpense({description : 'electric bill' ,amount:300}));
const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses,state.filters)

console.log(visibileExpenses);
console.log(state)

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));  