// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  return (...args) =>
    new Promise((resolve, reject) => {
      const callback = (error, result) => {
        return error ? reject(error) : resolve(result);
      };
      fn(callback, ...args);
    });
  // retournant une Promise au lieu de passer un callback
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(10)
  .then(() => console.log("1") && wait(10))
  .then(() => console.log("2") && wait(10))
  .then(() => console.log("3"));
