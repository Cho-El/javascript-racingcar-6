import Car from "./Car.js"

class CarFactory {
    static createCarArray(carNameArray) {
        console.log(carNameArray)
        return carNameArray.map(carName => {
            return new Car(carName)
        })
    }
}

export default CarFactory