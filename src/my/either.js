
function either(val, isRight) {
    this.isRight = isRight;
    this.val = val;
}

either.prototype.monadBind = function (f) {
    if (this.isRight) {
        return f(this.val);
    } else {
        return new either(this.val, false);
    }
}

function validatePassLength(val) {
    if (val.length < 5) {
        return new either("invalid password length", false);
    }
    return new either(val, true);
}

function validatePassUpper(val) {
    if (val.match(/[A-Z]/)) {
        return new either(val, true);
    }
    return new either("must have upper case letter", false);
}

function validatePassword(pass) {
    return (new either(pass, true)).monadBind(validatePassLength).monadBind(validatePassUpper);
}

console.log(validatePassword('123'))
console.log(validatePassword('123456'))
console.log(validatePassword('password'))
console.log(validatePassword('Password'))