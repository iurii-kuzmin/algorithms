import { assertEquality, runTest } from "./utils";

export function testBubbleSort() {
  return runTest(() => {
    const x = [5554322]
    assertEquality(x.toSorted(), bubbleSort([...x]))
  })
}

export function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}
