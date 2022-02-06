"use strict";

function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25Discount = function () {
    this.price = Math.round(this.price*0.75)
};

const test = new ProductES5('Яблок', 100)
console.log(`ProductES5 \nСтарая цена ${test.name} = ${test.price} рублей`)
test.make25Discount()
console.log(`Новая цена ${test.name} = ${test.price} рублей`)


function PostES5(name, text) {
    this.name = name;
    this.text = text;
    this.date = Date();
}

PostES5.prototype.edit = function (newText) {
    this.text = newText
    this.date = Date()
}

function sleep(milliseconds) {
    const t = (new Date()).getTime();
    while (((new Date()).getTime() - t) < milliseconds) {
    }
}

//test it
function testClassBlog (classElement) {
    console.log('test PostES5')
    const blog = new classElement('Vasya', 'First text')
    console.log(blog.name, blog.text, blog.date)
    console.log('sleep')
    sleep(3000)
    blog.edit('Some new text')
    console.log(blog.name, blog.text, blog.date)
}

testClassBlog(PostES5)

//--------

class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25Discount () {
        this.price = Math.round(this.price*0.75)
    };
}

const test2 = new ProductES6('Яблок', 100)
console.log(`ProductES6 \nСтарая цена ${test.name} = ${test.price} рублей`)
test.make25Discount()
console.log(`Новая цена ${test.name} = ${test.price} рублей`)

console.log(Date())
