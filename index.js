export const reverseArray = array => {
  const reverseArrayResult = [...array];
  if (!Array.isArray(array)) {
    return null;
  }
  return reverseArrayResult.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  if (amount > balances[clients.indexOf(client)]) {
    return -1;
  }
  return balances[clients.indexOf(client)] - amount;
};

const ADULT_AGE = 18;

export const getAdults = obj =>
  Object.fromEntries(Object.entries(obj).filter(element => element[1] >= ADULT_AGE));

const a = { 'John Doe': 19, Tom: 17, Bob: 18 };
const b = { Ann: 56, Andrey: 7 };

console.log(getAdults(a)); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults(b)); // ==> { Ann: 56 }
console.log(getAdults({})); // ==> { Ann: 56 }
