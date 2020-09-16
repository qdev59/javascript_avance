export const addAliasForProperties = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    get(object, prop) {
      const realProp = alias.hasOwnProperty(prop) ? alias[prop] : prop;
      return Reflect.get(object, realProp);
    },
    set(object, prop, value) {
      const realProp = alias.hasOwnProperty(prop) ? alias[prop] : prop;
      return Reflect.set(object, realProp, value);
    },
    has(obj, prop) {
      return (
        Reflect.has(obj, prop) ||
        (alias.hasOwnProperty(prop) && Reflect.has(obj, alias[prop]))
      );
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // à récupérer via fn.count
  let count = 0;
  return new Proxy(fn, {
    get(o, key) {
      return key === "count" ? count : Reflect.get(o, key);
    },
    apply(f, context, args) {
      count++;
      return Reflect.apply(f, context, args);
    }
  });
};

// exemple d'utilisation:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
