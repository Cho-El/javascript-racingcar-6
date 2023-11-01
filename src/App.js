import MESSAGE from "./constant/message.js"
import { MissionUtils } from "@woowacourse/mission-utils";
import Print from "./modules/Print.js"
import Input from "./modules/Input.js"
class App {
  constructor () {
    this.Print = new Print()
  }
  async play() {
    this.Print.getCarNameInputMessage();
  }
}

export default App;