const arenaElement = document.querySelector('.arena');
const boardELement = document.querySelector('.board__selected-seat');

const createArrayofNumberRange = (from, to) => {
  const array = [];

  for (let index = from; index <= to; index += 1) {
    array.push(index);
  }
  return array;
};

const createArenaSeats = () => {
  return createArrayofNumberRange(1, 10)
    .map(seatNumber => `<div class="sector__seat" data-seat-number = "${seatNumber}"></div>`)
    .join('');
};

const createArenaLines = () => {
  return createArrayofNumberRange(1, 10)
    .map(
      linesNumber =>
        `<div class="sector__line" data-line-number = "${linesNumber}">${createArenaSeats()}</div>`,
    )
    .join('');
};

const createArenaSectors = () => {
  arenaElement.innerHTML = createArrayofNumberRange(1, 3)
    .map(
      sectorNumber =>
        `<div class="sector" data-sector-number = "${sectorNumber}">${createArenaLines()}</div>`,
    )
    .join('');
};

createArenaSectors();

const getSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }
  const getSeatNumber = event.target.dataset.seatNumber;
  const getLineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const getSectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  boardELement.innerHTML = `S ${getSectorNumber} - L ${getLineNumber} - S ${getSeatNumber}`;
};

arenaElement.addEventListener('click', getSeatSelect);
