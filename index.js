for (let firstNumber = 1; firstNumber <= 5; firstNumber += 1) {
  console.log(`=> ${firstNumber} <=`);
  for (let secondNumber = 1; secondNumber <= 10; secondNumber += 1) {
    console.log(
      `${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`
    );
  }
}
