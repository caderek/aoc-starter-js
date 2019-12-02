const { readFileSync } = require("fs")
const getCallerFile = require("get-caller-file")

const readInput = () => {
  const file = getCallerFile()
    .split("/")
    .slice(0, -1)
    .concat("input.txt")
    .join("/")

  return readFileSync(file).toString()
}

module.exports = readInput
