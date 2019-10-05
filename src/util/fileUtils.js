const fs = require('fs');
const {FILE_PATH} = require('../common/configs');

const createFile = () => {
    fs.writeFileSync(FILE_PATH, "");
};
const writeToFile = (data) => {
    fs.appendFileSync(FILE_PATH, `${data} \n`);
};

module.exports = {
    createFile,
    writeToFile
};