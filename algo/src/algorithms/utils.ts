import { isEqual } from "lodash";

export function assertEquality(a: any, b: any) {
  if (!isEqual(a, b)) {
    throw new Error(`Value ${JSON.stringify(a)} is not equal to ${JSON.stringify(b)}`)
  }
}

export function runTest(test: () => void): string | null {
  try {
    test()
    return null
  }
  catch (error) {
    console.error(error)
    return String(error)
  }
}