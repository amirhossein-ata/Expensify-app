import {addExpense ,removeExpense ,editExpense} from '../../actions/expenses' ;

test('should setap remove expense action object' , () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id:'123abc'
    })
})
test('should setup edit expense action object' , () => {
    const action = editExpense('123abc',{note:'New note value'}) ;
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note : 'New note value'
        }
    });
});
test('should setup add expense action object with provided values',()=>{
    const expenseData ={
        description:'Rent',
        amount:123,
        createdAt:1000,
        note:'last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});

test('should setup add expense with default values',()=>{
    const action = addExpense({}    );
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense : {
            id:expect.any(String),
            description:'',
            amount:0,
            note:'',
            createdAt:0
        }  
    });
});