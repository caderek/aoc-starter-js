const { isDeepStrictEqual } = require("util")
const kleur = require("kleur")

let index = 0

const test = (result, expected) => {
  const passed = isDeepStrictEqual(result, expected)

  if (passed) {
    console.log(kleur.green(`${index}: passed`))
  } else {
    console.log(kleur.gray("-----------------------------------------"))
    console.log(
      kleur.red(
        `${index}: failed:\n\nResult: ${result}\nExpected: ${expected}`,
      ),
    )
    console.log(kleur.gray("-----------------------------------------"))
  }

  index++
}

module.exports = test
