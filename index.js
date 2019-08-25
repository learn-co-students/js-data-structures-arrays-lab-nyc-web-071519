// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name);
}

function appendDriver(name){
    const newArray = [...drivers, name];
    return newArray;
}

function prependDriver(name){
    const newArray = [name, ...drivers];
    return newArray;
}

function removeLastDriver(name){
    const newArray = drivers.slice(0, drivers.length-1);
    return newArray;
}

function removeFirstDriver(name){
    const newArray = drivers.slice(1);
    return newArray;
}