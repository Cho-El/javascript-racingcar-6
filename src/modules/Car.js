class Car {
    constructor(name) {
        this.name = name
        this.curDist = 0
    }
    getName() {
        return this.name
    }
    getCurDist() {
        return this.curDist
    }
    setCurDist() {
        this.curDist += 1
    }
}

export default Car