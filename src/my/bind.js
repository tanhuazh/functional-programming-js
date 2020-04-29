
Array.prototype.monadBind = function (f) {
    return this.map(a => f(a)).reduce((a, b) => a.concat(b))
}

console.log([1, 2, 3].monadBind(x => [x, x + 100]))