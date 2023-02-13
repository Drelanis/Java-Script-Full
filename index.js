export const getItemsList = () => {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);
  return elementList;
};

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  Array.from(elementsArray);
  console.dir(elementsArray);
  return elementsArray;
};

getItemsList();
getItemsArray();
