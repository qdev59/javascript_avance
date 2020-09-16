export const range = (start, end) => {
  // retourner un itérable itérant entre les deux bornes numériques
  //return {
  //  [Symbol.iterator]: function() {
  //    return {
  //      next() {
  //        return {
  //          done:start===end + 1,
  //          value:start++
  //        }
  //      }
  //    }
  //  }
  //}
  return {
    [Symbol.iterator]: function* () {
      while (start !== end + 1) yield start++;
    }
  };
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
