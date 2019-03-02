

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

const dogBreed = (dog) => {
    return `My favorite dogbreed is ${dog}`;
};

console.log(dogBreed('Catahoula Leopard Hound'));
const dogBreedDiv = document.getElementById('dog-breeds');
console.log('dogBreedDiv', dogBreedDiv);
dogBreedDiv.innerHTML = dogBreed('Lab');
const nuggetizerDiv = document.getElementById('nuggetizer');
nuggetizerDiv.innerHTML = nuggetizer('pig');
nuggetizerDiv.innerHTML += nuggetizer('cat');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

// printToDom('dog-breed', dogBreed('lab') );

// printToDom('nuggetizer', 'mmmmmmm');

let bandNumber = 1
const addBand = (band) => {

    printToDom('band-list', `${bandNumber}. ${band} `);
    bandNumber += 1;
};

addBand('Metallica');
addBand('Slayer');
