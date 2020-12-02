const os = require('os');
const { readFileSync } = require("fs")
const getCallerFile = require("get-caller-file")

const splitChar = os.platform() === "win32" ? "\\" : "/";

const readInput = () => {
  const file = getCallerFile()
    .split(splitChar)
    .slice(0, -1)
    .concat("input.txt")
    .join("/")

  return readFileSync(file).toString()
}

module.exports = readInput
