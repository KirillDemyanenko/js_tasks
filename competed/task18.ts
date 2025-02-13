/*
    https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript
 */

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number,
): boolean {
  return (
    yourPoints >
    classPoints.reduce((el: number, acc: number) => acc + el, 0) /
      classPoints.length
  );
}

console.log(betterThanAverage([2, 3], 5));
