

const firstName = 'Wayne';
const lastName = 'Chipchase';
// console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

const firstName1 = 'Britney';
const lastName1 = 'Spears';


const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);

};

namePrinter('Zoe', 'Ames');
namePrinter('John', 'Doe');


const nuggetizer = (animal) => {
    return `processed ${animal};`
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('student'));