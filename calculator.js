export const getSquaredArray = array => array.map(element => element * element);

export const getOddNumbers = array => array.filter(element => element % 2 === 1);

export default (firstOperand, secondOperand) => firstOperand + secondOperand;
