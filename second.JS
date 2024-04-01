function numToChar(arr) {
    return arr.map(subArr => subArr.filter(x => typeof x === 'number').sort((a, b) => a - b)
        .concat(subArr.filter(x => typeof x === 'string').sort()));
}

console.log(numToChar([
    [1, 2, 4, 3, "a", "b"],
    [6, "c", 5], [7, "d"],
    ["f", "e", 8]
]));
