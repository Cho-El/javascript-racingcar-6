// import {doAdd, doSubtract, doMultiply, doDivide} from '../src/app1.js';
// import * as app from '../src/app1.js'
// import {add, subtract} from '../src/math.js';
// import * as math from '../src/math.js'


// test("calls math.add", () => {
//     jest.spyOn(add, 'add');
// 	doAdd(1, 2);
//     expect(add).toHaveBeenCalledWith(1, 2);
// });

test("calls math.subtract", () => {
    // subtract = jest.fn();
    math.subtract = jest.fn();
    doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

import {doAdd, doSubtract, doMultiply, doDivide} from '../src/app1.js';
import * as math from '../src/math.js'
test("calls math.add", () => {
    math.add = jest.fn();
	doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
    expect(math.add).toHaveBeenCalled()
});

// test("calls math.subtract", () => {
//     math.subtract = jest.fn();
//     app.doSubtract(1, 2);
//     expect(math.subtract).toHaveBeenCalledWith(1, 2);
// });