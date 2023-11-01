// import {App, add} from "../src/App.js";
import * as appTest from "../src/App.js";
// describe('App', () => {
// it('should call the add function', async () => {
//     const app = new App();

//     // 모의 함수를 만들어 add 함수의 호출 여부를 추적합니다.
//     const add = jest.fn();

//     // add 함수가 호출되었는지 확인합니다.
//     await expect(app.play()).toHaveBeenCalled();
// });
// });

// describe('add', () => {
// it('should add two numbers and return the result', () => {
//     const result = add(2,3);
    
//     // add 함수가 올바른 결과를 반환하는지 확인합니다.
//     expect(result).toBe(5);
// });
// });

// describe('App', () => {
//     it('should call the add function when play is invoked', async () => {
//       const app = new App();
  
//       // add 함수를 스파이(spy)로 대체하여 호출 여부를 추적합니다.
//       const addSpy = jest.spyOn(add);
  
//       await app.play();
  
//       // add 함수가 호출되었는지 확인합니다.
//       expect(addSpy).toHaveBeenCalled();
//     });
// });

describe('함수 호출 테스트', () => {
    it('play에서 add함수 호출했는지 확인', async () => {
        const app = new appTest.App();
        appTest.add = jest.fn();

        // const result = await app.play(1,2);
        await app.play(1,2);


        // await expect(result).toBe(3);
        expect(appTest.add).toHaveBeenCalled()
        // await expect(add).toHaveBeenCalledWith(1, 2)
    })
});

// import * as appTest from "../src/App.js";

// describe('함수 호출 테스트', () => {
//     it('play에서 add함수 호출했는지 확인', async () => {
//         appTest.add = jest.fn();

//         const app = new appTest.App();
//         await app.play(1,2);


//         await expect(appTest.add).toHaveBeenCalled()
//     })
// });