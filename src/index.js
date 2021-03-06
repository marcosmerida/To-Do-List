/* eslint-disable no-unused-vars */

/* Import section */
import _, { functionsIn, iteratee, update } from 'lodash';
import './style.css';
import taskcompleted from './status';

/* Variable section */
const ul = document.getElementById('list');
let allTasks = [];

/* This function updates the localstorage with new Tasks */
function updateTasks(e) {
  localStorage.setItem('data', JSON.stringify(e));
}

/* This function pushes the new task into the allTasks array and saves it in localStorage */
function createTask(e) {
  /*   the data that is stored in allTasks variable is updated here with the localstorage */
  allTasks = JSON.parse(localStorage.getItem('data'));
  if (allTasks === null) {
    allTasks = [];
  }
  const newTask = {
    description: '',
    completed: false,
    index: allTasks.length + 1,
  };
  newTask.description = e;
  /*   This procedure here verify if input text value contains nothing. */
  if (newTask.description === '') {
    document.getElementById('task').placeholder = 'this field cannot be blank';
  } else {
    allTasks.push(newTask);
    updateTasks(allTasks);
  }
}

/* This function lodas the data from the localstorage */
function printScreen() {
  ul.innerHTML = '';
  let taskArray = JSON.parse(localStorage.getItem('data'));
  if (taskArray === null) {
    taskArray = [];
  }
  if (taskArray.length > 0) {
    taskArray.forEach((number) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'name';
      checkbox.value = number.completed;
      checkbox.checked = number.completed;
      /*       Event listener to update completed status */
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          number.completed = true;
          updateTasks(taskArray);
        } else {
          number.completed = false;
          updateTasks(taskArray);
        }
      });
      /*       TEXT AND THRASHBUTTON ELEMENTS CREATED AND ADDED TO LI */
      const text = document.createElement('input');
      const liTag = document.createElement('li');
      const trashIcon = document.createElement('i');
      const removeButton = document.createElement('button');
      text.type = 'text';
      text.value = number.description;
      text.id = 'task1';
      text.addEventListener('change', (event) => {
        const textid = event.target.parentElement.id;
        taskArray[textid - 1].description = text.value;
        updateTasks(taskArray);
      });
      removeButton.classList.add('removeTask');
      trashIcon.classList.add('fas', 'fa-trash-alt');
      removeButton.appendChild(trashIcon);
      /*       Eventlistener to remove items from array */
      removeButton.addEventListener('click', (event) => {
        liTag.remove();
        const index = event.target.parentElement.id;
        taskArray.splice(index, 1);
        updateTasks(taskArray);
        printScreen();
        /* FOR LOOP THAT MAKES EACH TASK CHANGE ITS INDEX WHENEVER ANOTHER TASK IS DELETED */
        for (let i = 0; i < taskArray.length; i += 1) {
          taskArray[i].index = i + 1;
        }
        updateTasks(taskArray);
        printScreen();
      });
      liTag.setAttribute('id', number.index);
      ul.appendChild(liTag);
      liTag.append(checkbox, text, removeButton);
    });
  } else {
    const noTaskText = '<li><p>No Tasks for today!</p></li>';
    const liTag = document.createElement('li');
    liTag.innerHTML = noTaskText.trim();
    ul.appendChild(liTag);
  }
}

/* This function calls the data from the input text in HTML */
document.getElementById('button').addEventListener('click', () => {
  const textTask = document.getElementById('task').value;
  createTask(textTask);
  printScreen();
});

document.getElementById('clearAll').addEventListener('click', (index) => {
  let taskArray = JSON.parse(localStorage.getItem('data'));
  if (taskArray === null) {
    taskArray = [];
  }
  document.querySelectorAll('input[type=checkbox]').forEach((node) => {
    if (node.checked) {
      node.parentElement.remove();
      const newArray = taskArray.filter((el) => el.completed === false);
      taskArray = newArray;
      for (let i = 0; i < taskArray.length; i += 1) {
        taskArray[i].index = i + 1;
      }
      updateTasks(taskArray);
      printScreen();
    }
  });
});

/* Functions and eventListeners excecuted */
printScreen();
