// //
// //Object destructuring
// //
// const person = {
//   name: 'Malgorzata',
//   age: 27,
//   location: {
//     city: 'Warszawa',
//     temp: 21,
//   },
// };

// const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${person.age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);



//
//Array destructuring
//

const address = ['Elbląska', 'Warszawa', 'Polska', '01-737']

const [street, city, country = 'New York'/*, zip*/] = address


// console.log(`You are in ${address[1]} ${address[2]}.`)
console.log(`You are in ${city} ${country}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [drink, , mediumPrice, ] = item

console.log(`A medium ${drink} costs ${mediumPrice}`)