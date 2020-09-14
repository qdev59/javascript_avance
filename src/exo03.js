// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  var inverted = {};
  for (var key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}
