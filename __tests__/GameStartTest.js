import App from "../src/App.js";
import MESSAGE from "../src/constant/message.js"
import { MissionUtils } from "@woowacourse/mission-utils";
import * as print from "../src/modules/Print.js"
import Input from "../src/modules/Input.js"
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임시작", () => {
    test("자동차 이름 입력 요구 문구 1회 출력되는지 체크.", async() => {
        // given
        MissionUtils.Console.print = jest.fn()

        // when
        const app = new App()
        app.play()

        // then
        expect(MissionUtils.Console.print).toHaveBeenCalledWith(expect.stringContaining(MESSAGE.inputMessage.carName))
    })
    test.each([["one"],["overFive"],["yoo-n, cho"],[""]])("자동차 입력값이 잘못되면 에러를 던져준다.", (input) => {
      // given
      // when 
      const inputCar = new Input()

      // then
      expect(() => inputCar.carNameValidation(input)).toThrow("[ERROR]")
    })
})