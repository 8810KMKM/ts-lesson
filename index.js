var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -1.11;
var single = '';
var double = '';
var back = "";
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var fruit = fruits[0];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(coffee.size);
var anything = true;
anything = ['hoge', 1, 2];
anything = {};
anything.name = 'taro';
var banana = 'banana';
banana = anything;
var unionTypes = [10, 'hoge'];
var apple = 'apple';
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: 'small'
};
cloth.size = 'large';
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
