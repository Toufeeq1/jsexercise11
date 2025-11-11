//@ts-check

// TODO: Create a multiline string using template literals
// TODO: Create a function that uses template literals for HTML generation
// TODO: Convert regular functions to arrow functions
// TODO: Use arrow functions with array methods

const multilineString = `
    This is a multiline string
    with multiple lines and 
    its good to use template literals(backticks)
`;

/**
 * 
 * @param {string} name 
 * @param {number} age 
 * @returns 
 */
const generateHTML = (name, age) => `<p>My name is ${name} is and my age is ${age}</p>`;

function randomNumber (){
    return Math.floor(Math.random() * 100);
}

const randomLetter = function() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const randomNumber1 = () => Math.floor(Math.random() * 100);

const randomLetter1 = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}


let newArray = [1, 2, 3, 4, 5];

const newArray1 = [1, 2, 3, 4, 5].map(item => item * 2);

const newArray2 = [1, 2, 3, 4, 5].filter(item => item % 2 === 0);


console.log(multilineString);
console.log(generateHTML("Toufeeq", 23));
console.log(randomNumber());
console.log(randomNumber1());
console.log(randomLetter());
console.log(randomLetter1());
console.log(newArray1);
console.log(newArray2);

