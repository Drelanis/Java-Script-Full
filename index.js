const tasks = [
  { text: 'Buy milk', done: false, id: (Math.random() * 10000).toFixed() },
  { text: 'Pick up Tom from airport', done: false, id: (Math.random() * 10000).toFixed() },
  { text: 'Visit party', done: false, id: (Math.random() * 10000).toFixed() },
  { text: 'Visit doctor', done: true, id: (Math.random() * 10000).toFixed() },
  { text: 'Buy meat', done: true, id: (Math.random() * 10000).toFixed() },
];

const listElem = document.querySelector('.list');
const buttonCreatTaskElement = document.querySelector('.create-task-btn');
const inputTaskElement = document.querySelector('.task-input');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('list__item-checkbox');
      checkbox.checked = done;
      checkbox.setAttribute('data-id', id);
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const tasksToDo = event => {
  if (event.target.getAttribute('type') !== 'checkbox') {
    return;
  }
  tasks.find(element => element.id === event.target.getAttribute('data-id')).done = true;
  renderTasks(tasks);
};

const addNewTasks = () => {
  if (inputTaskElement.value === '') {
    return;
  }
  tasks.push({
    text: `${inputTaskElement.value}`,
    done: false,
    id: (Math.random() * 10000).toFixed(),
  });
  renderTasks(tasks);
};

listElem.addEventListener('click', tasksToDo);
buttonCreatTaskElement.addEventListener('click', addNewTasks);
