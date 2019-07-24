import $ from 'jquery';

$(document).ready(() => {
    console.log($("#wrapper"));
});

console.log(['Dog', ['Sheep', ['Wolf']]].flat(2));

class Human {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('Hi, my name is' + this.name);
    }
}