const arr = (arr) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) return acc + arr(curr);
        return acc + curr + ' ';
    }, '').trim();
};

const inputArr = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];
const result = arr(inputArr);
console.log(result);