// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

const object = {
    name: "john",
    lastName: "pierce",
    sayHello: function() {
        return `hello, ${this.name} ${this.lastName}`
    },
};

console.log(object.sayHello());