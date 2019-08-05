//генератор

function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}

const gen = idMaker();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen);

// функция с дефолтным аргументом функцией

function withFunction(fn = function() {}) {
    return fn;
}

console.log(withFunction());

// статические методы

class User {
    static sayHi() {
        console.log('hi');
    }
}

User.otherSayHi = function () {
  User.sayHi();
};

const user = new User();

User.otherSayHi();