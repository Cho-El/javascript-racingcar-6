const number = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, currentIndex) {
  const result = accumulator + currentValue;
  console.log('accumulator = ', accumulator, ', currentValue = ', currentValue, ', currentIndex = ', currentIndex, ', result = ', result);
  return result;
}

// initialValue가 없을 경우
number.reduce(reducer);
console.log(number)

function devide(numA, numB) {
  return new Promise((resolve, reject) => {
    if (numB === 0) reject(new Error("Unable to devide by 0."));
    else resolve(numA / numB);
  });
}

devide(8, 2)
  .then((result) => console.log("성공:", result))
  .catch((error) => console.log("실패:", error));