const listElem = document.querySelector('.list');


const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  console.log('render');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

//algo
//1. get data
//2. create task obj , add to arr
//3. rerender
function createTaskHandler(event){
console.log(event)
const value = inputElem.value;
const task={
  text:value,
  done:false,
}
  tasks.push(task);
  renderTasks(tasks);
}
//WEBFLOW
//getData
//render
//update data,don t update dom
//re-render


// input: string,callback func
// output: undefined
createBtnElem.addEventListener('click',createTaskHandler);


function updateTaskHandler(event){
  if(!event.target.classList.contains('list__item-checkbox')){
    return;
  }
  console.log(event.target);
  console.log(event.target.dataset.id)

}
listElem.addEventListener('click',updateTaskHandler);


//input:event
//output:undefined