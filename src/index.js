const {getRandomWordSync, getRandomWord} = require('word-maker');

const taskOne = () => {
    for (let i = 1; i < 101; i++) {
        console.log(`${i}: ${getRandomWordSync()}`)
    }
};

const taskTwo = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`${i}: Fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i}: Buzz`)
        } else {
            console.log(`${i}: ${getRandomWordSync()}`)
        }
    }
};

const taskThreeV1 = () => {
    const response = [];

    for (let i = 1; i < 101; i++) {
        response.push(getRandomWord());
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};

const taskThreeV2 = () => {
    const response = [];

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            response.push("FizzBuzz");
        } else if (i % 3 === 0) {
            response.push("Fizz");
        } else if (i % 5 === 0) {
            response.push("Buzz");
        } else {
            response.push(getRandomWord());
        }
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};


// Execution of task one
// taskOne();

// Execution of task two
// taskTwo();

// Execution of task three version 1
// taskThreeV1();

// Execution of task three version 2
taskThreeV2();

