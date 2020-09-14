export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  var propValue = obj[prop];
  Object.defineProperty(obj, prop, {
    // Raccourci pour get: function()
    get() {
      getter(propValue);
      return propValue;
    },
    // Raccourci pour set: function()
    set(value) {
      setter(value);
      propValue = value;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (var key in obj) {
    Object.defineProperty(obj, key, {
      enumerable: !key.startsWith("_"),
      writable: !/[A-Z]/.test(key[0]),
      configurable: !/[A-Z]/.test(key[0])
    });
  }
}
