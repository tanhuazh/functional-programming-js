
Array.prototype.bind = function (f) {
    return this.map(a => f(a)).reduce((a, b) => a.concat(b))
}

console.log([1, 2, 3].bind(x => [x, x + 100]))