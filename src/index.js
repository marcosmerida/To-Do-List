/* eslint-disable no-unused-vars */

/* Import section */
import _, { functionsIn } from 'lodash';
import './style.css';
import taskcompleted from './status';

/* Variable section */
const allTasks = [];
const ul = document.getElementById('list');
/* This function manipulates the DOM creating a new li element */
function addElements(e) {
  allTasks.push(e);
  const liTag = document.createElement('li');
  const Task = `<input type = 'checkbox' id = ${e.index}><p id = ${e.index}>${e.description}</p><button class='removeBook' id='buttonremove' value='${e.index}'><i class="fas fa-trash-alt"></i></button>`;
  liTag.innerHTML = Task.trim();
  ul.appendChild(liTag);
}

/* This function contains the default tasks and lodas the data from the localstorage */
function defaultTasks() {
  let defaultTask1 = JSON.parse(localStorage.getItem('default1'));
  let defaultTask2 = JSON.parse(localStorage.getItem('default2'));
  if (defaultTask1 === null) {
    defaultTask1 = {
      description: 'wash the dishes',
      completed: false,
      index: 'default1',
    };
  }
  if (defaultTask2 === null) {
    defaultTask2 = {
      description: 'Complete To Do list project',
      completed: false,
      index: 'default2',
    };
  }

  addElements(defaultTask1);
  addElements(defaultTask2);

  if (defaultTask1.completed === true) {
    document.getElementById('default1').checked = true;
  } else {
    document.getElementById('default1').checked = false;
  }
  if (defaultTask2.completed === true) {
    document.getElementById('default2').checked = true;
  } else {
    document.getElementById('default2').checked = false;
  }

taskcompleted('default1', defaultTask1, 'default1');
taskcompleted('default2', defaultTask2, 'default2');
}

defaultTasks();
