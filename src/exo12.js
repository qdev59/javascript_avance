export function PubSub() {
  this.events = new Map();
}

PubSub.prototype.on = function (event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  let callbacks = this.events.get(event) || [];
  this.events.set(event, [...callbacks, callback]);
};

PubSub.prototype.emit = function (event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  let callbacks = this.events.get(event) || [];
  callbacks.forEach((callback) => {
    callback(data);
  });
  let allEventCallbacks = this.events.get("*") || [];
  allEventCallbacks.forEach((callback) => {
    callback(data);
  });
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
PubSub.prototype.off = function (event, callback) {
  const callbacks = this.events.get(event) || [];
  this.events.set(
    event,
    callbacks.filter((cb) => cb !== callback)
  );
};
// - on('*') pour réagir à tous les événements
