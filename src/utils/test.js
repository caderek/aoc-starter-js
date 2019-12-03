const { isDeepStrictEqual } = require("util")
const kleur = require("kleur")
const { curry } = require("@arrows/composition")

let index = 0

const test = curry((result, expected) => {
  const passed = isDeepStrictEqual(result, expected)

  if (passed) {
    console.log(kleur.green(`${index}: passed`))
  } else {
    console.log(kleur.gray("-----------------------------------------"))
    console.log(kleur.red(`${index}: failed`))
    console.log(kleur.gray("\nResult:"))
    console.dir(result, { colors: true, depth: 0 })
    console.log(kleur.gray("\nExpected:"))
    console.dir(expected, { colors: true, depth: 0 })
    console.log(kleur.gray("-----------------------------------------"))
  }

  index++
})

module.exports = test
