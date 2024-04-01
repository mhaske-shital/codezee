function sum(arr) {
    let total = 0;
    arr.forEach(item => {
        if (Array.isArray(item)) {
            total += sum(item);
        } else if (typeof item === 'string') {
            const numbers = item.match(/-?\d+/g) || [];
            numbers.forEach(num => {
                total += parseInt(num);
            });
        }
    });
    return total;
}

console.log(sum(["1", "five", "2wenty", "thr33"])); 
