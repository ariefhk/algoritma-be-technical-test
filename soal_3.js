// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// Contoh:

// ```
// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
// ```

function countWordsInArray(query, input) {
  const result = [];
  // count the words in query
  for (const q of query) {
    let count = 0;
    // count the words in input
    for (const i of input) {
      // if the word in query is found in input, increment the count
      if (q === i) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

// testing
console.log(countWordsInArray(["bbb", "ac", "dz"], ["xc", "dz", "bbb", "dz"]));
console.log(countWordsInArray(["a", "b", "f", "g"], ["a", "b", "c", "b", "d"]));
