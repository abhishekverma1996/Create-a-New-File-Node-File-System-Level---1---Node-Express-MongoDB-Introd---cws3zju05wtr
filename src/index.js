const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`File "${fileName}" created successfully.`);
  } catch (error) {
    console.error(`Error creating file "${fileName}":`, error);
    throw error;
  }
};

module.exports = { writeFile };
