
//  case 1 : variable
const foo = require('./myModule1')

console.log(foo) // 'bar'


// case 2: object

// module.exports = {
//     foo: 'bar',
//     baz: () => console.log('Hello, World!')
// };

const myModule = require('./myModule2');

console.log(myModule.foo); // 'bar'
myModule.baz(); // 'Hello, World!'

// same result
const { foo2, baz } = require('./myModule2');

console.log(foo2);
baz();


// case 3: object

// exports.foo = 'bar';
// exports.baz = () => console.log('Hello, World!');

const { foo3, baz3 } = require('./myModule3');

console.log(foo); // 'bar'
baz(); // 'Hello, World!'



