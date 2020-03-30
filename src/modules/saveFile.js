const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "assets");

const save = (fileName, content) => {
  const json = JSON.stringify(content);

  fs.writeFile(`${filePath}/${fileName}.json`, json, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON to file.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
};

const read = fileName => {
  return fs.createReadStream(`${filePath}/${fileName}.json`);
};

module.exports = { save, read };
