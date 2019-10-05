const fs = require('fs');
const FILE_PATH = "./output.txt";

const createFile = () => {
    fs.writeFileSync(FILE_PATH, "");
};
const log = (data) => {
    fs.appendFileSync(FILE_PATH, `${data} \n`);
};

module.exports = {
    createFile,
    log
};