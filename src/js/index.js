import {testFunc} from 'functions/testFunc';

console.log('works');
testFunc();

var name = "";

var user = {
    name: "Василий",

    export: function () {
        var ob = {
            name: 'Me',
            value: this
        };
        return ob;
    }
};

user.export();