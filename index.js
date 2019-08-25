let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let n = [...drivers.slice(0, drivers.length), `${name}`];
  return n;
}

function prependDriver(name) {
  let n = [`${name}`, ...drivers.slice(0, drivers.length)];
  return n;
}

function removeLastDriver() {
  let n = drivers.slice(0, drivers.length - 1);
  return n;
}

function removeFirstDriver() {
  let n = drivers.slice(1);
  return n;
}
