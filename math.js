const myNumber = -5;
const output = Math.abs(myNumber);


const myNumber = 6.0398;
const output = Math.ceil(myNumber);
console.log(output);

const myNumber = 7.0001;
const output = Math.floor(myNumber);
console.log(output);


const output = Math.round();
console.log(output);


const output = Math.random() * 10;
const rounded = Math.round(output);
console.log(rounded);

for(let i=0; i<=30; i++){
    const output = Math.random() * 10;
    const rounded = Math.round(output);
    console.log(rounded);
}