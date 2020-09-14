// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
  //return args.reduce((result, arg) => {
  //  result[arg] = (result[arg] || 0) + 1;
  //  return result;
  //}, {});
  return args.reduce((countByArg, arg) => {
    let count = (countByArg[arg] || 0) + 1;
    return { ...countByArg, [arg]: count };
  }, {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  let countByArg = count(...args);
  let maxCount = Math.max(...Object.values(countByArg));
  return args.find((arg) => countByArg[arg] === maxCount);
}

// exemple d'utilisation:
//mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
//  "Chou";
