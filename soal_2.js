// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// Contoh:

// ```
// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence)
// -> mengerjakan: 11 character
// ```

function longest(sentence) {
  // split sentence into words
  const words = sentence.split(" ");
  // store the first word as state of the longest word
  let longestWord = words[0];

  // find the longest word
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `${longestWord}: ${longestWord.length} character`;
}

// testing
console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
console.log(longest("Arief sedang ngoding sebuah api dengan expressjs"));
