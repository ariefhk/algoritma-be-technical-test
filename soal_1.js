// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseStringWithNumberInLast(str) {
  // split string into 2 parts, string and number in the last
  const string = str.slice(0, -1);
  const number = str.slice(-1);

  // reverse the string
  const reverseString = string.split("").reverse().join("");
  return reverseString + number;
}

// testing
console.log(reverseStringWithNumberInLast("NEGIE1"));
console.log(reverseStringWithNumberInLast("NAKAM1"));
console.log(reverseStringWithNumberInLast("EMOSEWAFEIRA1"));
