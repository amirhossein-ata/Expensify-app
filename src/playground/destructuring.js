// const person = {
//     name :'Amir',
//     age :20 ,
//     location :{
//         city : 'tehran' ,
//         temp : 45
//     }
// };

// const {name:firstName = 'Anonymous' , age } = person ; 
// const {city} = person.location
// console.log(`${firstName} is ${age} from ${city}`)


// const book = {
//     title : 'Ego is the Enemy',
//     author : 'Mamad',
//     publisher :{
//         name :'Penguin'
//     }
// };

// const {name:publisherName = 'self published'} = book.publisher

// console.log(publisherName); 




const address = ['1299 S jupiter Street' , 'LA' , 'California' , '021'];
const [,,state] = address 
console.log(`You are in ${state}.`)