import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/message.js"
import CONDITION from "../constant/condition.js"
class Input {
    inputCarName() {
        Console.readLineAsync()
    }
    carNameValidation(carName) {
        if (!(carName.includes(","))){
            throw new Error(MESSAGE.error.includeComma)
        }
        const carNameArray = this.returnSplitCarNameReturnCarArray(carName)
        if (carNameArray.length < 2) {
            throw new Error(MESSAGE.error.carName)
        }
        carNameArray.forEach(carName => {
            if (carName.length > CONDITION.carNameLength) {
                throw new Error(MESSAGE.error.carName)
            }
            if (CONDITION.notNormalCharacter.test(carName)) {
                throw new Error(MESSAGE.error.specialCharacter)
            }
        });
    }
    returnSplitCarNameReturnCarArray(carNames) {
        return carNames.split(',')
    }
}

export default Input