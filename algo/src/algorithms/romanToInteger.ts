import { assertEquality, runTest } from "./utils";

export function testRomanToInteger() {
  return runTest(() => {
    assertEquality(romanToInt("III"), 3)
    assertEquality(romanToInt("LVIII"), 58)
    assertEquality(romanToInt("MCMXCIV"), 1994)
  })
}

const symbolToValueMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}

const negativeModifierMap = {
  "I": new Set(["V", "X"]),
  "X": new Set(["L", "C"]),
  "C": new Set(["D", "M"]),
}

function romanToInt(s: string): number {
  let result = 0
    for (let i = 0; i < s.length; i++) {
      const symbol = s[i]
      const nextSymbol = s[i + 1]
      let value = symbolToValueMap[symbol as keyof typeof symbolToValueMap]
      if (negativeModifierMap[symbol as keyof typeof negativeModifierMap]?.has(nextSymbol)) {
        value = -value
      }
      result += value
    }
    return result
}
