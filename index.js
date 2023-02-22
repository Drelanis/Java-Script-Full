const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const buttonCreatTaskElement = document.querySelector('.create-task-btn');
const inputTaskElement = document.querySelector('.task-input');
let IDNumber = 0;

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = IDNumber;
      checkbox.checked = done;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.dataset.id = IDNumber;
      IDNumber += 1;
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const tasksToDo = event => {
  if (event.target.dataset.id === undefined) {
    return;
  }
  tasks[Number(event.target.dataset.id)].done = event.target.checked;
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const addNewTasks = () => {
  if (inputTaskElement.value === '') {
    return;
  }
  tasks.push({ text: `${inputTaskElement.value}`, done: false });
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', tasksToDo);
buttonCreatTaskElement.addEventListener('click', addNewTasks);
