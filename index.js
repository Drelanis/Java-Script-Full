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
