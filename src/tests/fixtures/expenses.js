import moment from 'moment';

export default[{
    id:1,
    description:'pen',
    note:'',
    amount:195,
    createdAt:0
},{
    id:2,
    description:'phone',
    note:'',
    amount:20000,
    createdAt:moment(0).subtract(4 , 'days').valueOf()
},{
    id:3,
    description:'book',
    note:'',
    amount:4000,
    createdAt:moment(0).add(3,'days').valueOf()
}]
