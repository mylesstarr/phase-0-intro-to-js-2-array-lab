const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats 
};

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats 
};

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats 
};

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats 
};

function appendCat(name) {
    const appendedCats = [... cats, name]
    return appendedCats
};

function prependCat(name) {
    const prependedCats = [name, ... cats]
    return prependedCats
};

function removeLastCat(name) {
    const appendedLastCats =  cats.slice(0,-1)
    return appendedLastCats
};

function removeFirstCat(name) {
    const appendedFirstCats = cats.slice(1)
    return appendedFirstCats
};