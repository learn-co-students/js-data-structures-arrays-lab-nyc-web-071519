// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let drivers2 = [...drivers, name]
    return drivers2
}

function prependDriver(name) {
    let drivers2 = [name, ...drivers]
    return drivers2
}

function removeLastDriver() {
    let drivers2 = drivers.slice(0, -1)
    return drivers2
}

function removeFirstDriver() {
    let drivers2 = drivers.slice(1)
    return drivers2
}