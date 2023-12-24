import { assertEquality, runTest } from "./utils";

export function testBinarySearch() {
  return runTest(() => {
    const x = [1,2,3,4,5]
    assertEquality(binarySearch(x, 5), 4)
    assertEquality(binarySearch(x, 1), 0)
    assertEquality(binarySearch(x, 3), 2)
    assertEquality(binarySearch(x, 6), -1)
    assertEquality(binarySearch(x, 0), -1)
  })
}

export function binarySearch(array: number[], value: number): number {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const testIndex = Math.floor((left + right)/2)
    const testValue = array[testIndex]
    
    if (testValue === value) {
      return testIndex
    }

    if (testValue < value) {
      left = testIndex + 1
    } else {
      right = testIndex - 1
    }
  }
  return -1
}
