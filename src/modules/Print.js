import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js";
class Print {
    getCarNameInputMessage() {
        Console.print(MESSAGE.inputMessage.carName)
    }
    getNumberOfTimes() {
        Console.print(MESSAGE.inputMessage.numberOfTimes)
    }
}

export default Print