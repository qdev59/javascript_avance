import data from "../__tests__/fakedata.json";

export const query = (array) =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      // 1)
      //return query(this.filter((user) => condition(user[key])));
      // 2) Solution avec destructuring
      return query(this.filter(({ [key]: valeur }) => condition(valeur)));
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      return query(
        [...this].sort((user1, user2) => {
          if (user1[key] < user2[key]) {
            return -1;
          } else if (user1[key] > user2[key]) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query(this.slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", (n) => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map((user) => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
