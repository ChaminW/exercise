const fs = require('fs');
const {FILE_PATH} = require('../common/configs');

/**
 * @description Create a blank file with given file path
 */
const createFile = () => {
    fs.writeFileSync(FILE_PATH, "");
};

/**
 * @description Append message block to given file
 * @param data: Message need to be append to the file
 */
const writeToFile = (data) => {
    try {
        fs.appendFileSync(FILE_PATH, `${data} \n`);
    } catch (writeErr) {
        console.error("Error while writing to file: ", writeErr)
    }
};

module.exports = {
    createFile,
    writeToFile
};