"use strict";

for (let i = 1; i < 21; i++) {
    const elements = Array(20)
    elements.fill('x', 0, i).fill(' ', i, 20)
    const right = elements.reverse()
    const left = Object.assign([], right); //вот где мне copy пригодилась ))
    const cristmasTree = right.concat(left.reverse());
    console.log(cristmasTree.join(''))
}
