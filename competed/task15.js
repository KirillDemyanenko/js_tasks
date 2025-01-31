/*
  https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
 */
function dnaStrand(dna) {
  const dict = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((value) => dict[value])
    .join("");
}

console.log(dnaStrand("ATTGC"));
