const {SLOW_MODE_ENABLED} = require("../common/configs");
const {getRandomWordSync, getRandomWord} = require('word-maker');
const {writeToFile} = require('../util/fileUtils');

const taskSyncRandomWords = () => {
    for (let i = 1; i < 101; i++) {
        console.log(`${i}: ${getRandomWordSync()}`)
    }
};

const taskSyncFizzBuzzWords = () => {
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

const taskAsyncRandomWords = () => {
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

const taskAsyncFizzBuzzWords = () => {
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

const taskSyncWithErrorHandling = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`${i}: Fizz`)
        } else if (i % 5 === 0) {
            console.log(`${i}: Buzz`)
        } else {
            try {
                console.log(`${i}: ${getRandomWordSync({withErrors: true})}`)
            } catch (err) {
                console.log(`${i}: It shouldn't break anything!`);
            }
        }
    }
};

const taskAsyncWithErrorHandling = () => {
    const response = [];

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            response.push("FizzBuzz");
        } else if (i % 3 === 0) {
            response.push("Fizz");
        } else if (i % 5 === 0) {
            response.push("Buzz");
        } else {
            response.push(getRandomWord({withErrors: true}).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};

const taskSyncWithWriteToFile = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            writeToFile(`${i}: FizzBuzz`)
        } else if (i % 3 === 0) {
            writeToFile(`${i}: Fizz`)
        } else if (i % 5 === 0) {
            writeToFile(`${i}: Buzz`)
        } else {
            try {
                writeToFile(`${i}: ${getRandomWordSync({withErrors: true})}`)
            } catch (err) {
                writeToFile(`${i}: It shouldn't break anything!`);
            }
        }
    }
};

const taskAsyncWithWriteToFile = () => {
    const response = [];

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            response.push("FizzBuzz");
        } else if (i % 3 === 0) {
            response.push("Fizz");
        } else if (i % 5 === 0) {
            response.push("Buzz");
        } else {
            response.push(getRandomWord({withErrors: true}).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                writeToFile(`${index + 1}: ${word}`);
            }
        )
    })
};

const taskAsyncWithTimer = () => {
    console.time("Total time taken when slow mode enabled: ");

    const response = [];

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            response.push("FizzBuzz");
        } else if (i % 3 === 0) {
            response.push("Fizz");
        } else if (i % 5 === 0) {
            response.push("Buzz");
        } else {
            response.push(getRandomWord({
                withErrors: true,
                slow: SLOW_MODE_ENABLED
            }).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                writeToFile(`${index + 1}: ${word}`);
            }
        );
        console.timeEnd("Total time taken when slow mode enabled: ");
    });
};

module.exports = {
    taskSyncRandomWords,
    taskSyncFizzBuzzWords,
    taskAsyncRandomWords,
    taskAsyncFizzBuzzWords,
    taskSyncWithErrorHandling,
    taskAsyncWithErrorHandling,
    taskSyncWithWriteToFile,
    taskAsyncWithWriteToFile,
    taskAsyncWithTimer
};