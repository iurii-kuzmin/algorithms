import { assertEquality, runTest } from "./utils";

export function testSqrt() {
  return runTest(() => {
    assertEquality(sqrt(8), 2)
    assertEquality(sqrt(36), 6)
  })
}

function sqrt(x: number): number {
  let left = 2;
  let right = Math.trunc(x/2)

  setTimeout(function() { console.log(this===window) }, 0)

  if (x === 0) {
      return 0
  }

  if (x < 4) {
      return 1
  }

  while (right - left > 1) {
      const middle = Math.trunc((left + right)/2)
      const sqr = middle*middle
      if (sqr > x) {
          right = middle - 1
      }
      else if (middle === x) {
          return middle
      }
      else {
          left = middle
      }
  }
  if (right*right > x) {
    return left
  }
  return right 
};