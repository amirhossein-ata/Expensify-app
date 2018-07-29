import {createStore} from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy : incrementBy 
}); 

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy : decrementBy
});

const resetCount = () => ({
    type : 'RESET'
});

const setCount = ({count = 100 } = {}) => ({
    type : 'SET',
    count : count
});
const countReducer = (state = {count:0},action) => {
    switch(action.type){
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
            return{
                count : state.count + increment
            };
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return{
                count : state.count - decrement
            };
        case 'RESET':
            return{
                count : 0   
            };
        case 'SET':
            return{
                count : action.count
            };
        default:
            return state
    }
};
const store = createStore(countReducer);

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:2}));

store.dispatch(setCount({count:80}));

store.dispatch(decrementCount({decrementBy:2}));

store.dispatch(resetCount());

store.dispatch(incrementCount({incrementBy:5}))
