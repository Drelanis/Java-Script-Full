document.addEventListener('DOMContentLoaded', () => {
  attachContent();
});

const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const inputField = document.querySelector('.events-list');
const buttonRemoveHandleds = document.querySelector('.remove-handlers-btn');
const buttonAttachHandleds = document.querySelector('.attach-handlers-btn');

const getTagElementWithColor = (color, text) => {
  inputField.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const clearContent = () => {
  inputField.innerHTML = '';
};

const logGreenDiv = getTagElementWithColor.bind(null, 'green', 'DIV');
const logGreenP = getTagElementWithColor.bind(null, 'green', 'P');
const logGreenSpan = getTagElementWithColor.bind(null, 'green', 'SPAN');

const logGreyDiv = getTagElementWithColor.bind(null, 'grey', 'DIV');
const logGreyP = getTagElementWithColor.bind(null, 'grey', 'P');
const logGreySpan = getTagElementWithColor.bind(null, 'grey', 'SPAN');

const attachContent = () => {
  divElement.addEventListener('click', logGreyDiv, true);
  pElement.addEventListener('click', logGreyP, true);
  spanElement.addEventListener('click', logGreySpan, true);

  divElement.addEventListener('click', logGreenDiv);
  pElement.addEventListener('click', logGreenP);
  spanElement.addEventListener('click', logGreenSpan);
};

const removeContent = () => {
  divElement.removeEventListener('click', logGreyDiv, true);
  pElement.removeEventListener('click', logGreyP, true);
  spanElement.removeEventListener('click', logGreySpan, true);

  divElement.removeEventListener('click', logGreenDiv);
  pElement.removeEventListener('click', logGreenP);
  spanElement.removeEventListener('click', logGreenSpan);
};

// ====================>

const clearField = clearContent.bind(null);

clearButton.addEventListener('click', clearField);

buttonRemoveHandleds.addEventListener('click', removeContent);

buttonAttachHandleds.addEventListener('click', attachContent);
