import { assertEquality, runTest } from "./utils";

export function testParentheses() {
  return runTest(() => {
    assertEquality(isValid("()"), true)
    assertEquality(isValid("()[]{}"), true)
    assertEquality(isValid("(]"), false)
    assertEquality(isValid("([)]"), false)
  })
}

function isValid(s: string): boolean {
  const closeToOpenBracketMap = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  const parentheses: string[] = []

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i] as keyof typeof closeToOpenBracketMap
    const isOpen = !closeToOpenBracketMap[bracket]
    if (isOpen) {
      parentheses.push(bracket)
    }
    else if (parentheses.pop() !== closeToOpenBracketMap[bracket]) {
      return false
    }
  }

  return parentheses.length === 0
}
