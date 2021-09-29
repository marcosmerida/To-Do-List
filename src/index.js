/* eslint-disable no-unused-vars */

/* Import section */
import _, { functionsIn } from 'lodash';
import './style.css';
import * as MyModule from './status';

/* Variable section */
const allTasks = [];
const count = 0;
const ul = document.getElementById('list');

/* This function manipulates the DOM creating a new li element */
function addElements(e) {
  allTasks.push(e);
  const liTag = document.createElement('li');
  const Task = `<input type = 'checkbox' id = ${e.index}><p>${e.description}</p><button class='removeBook' id='buttonremove' value='${e.index}'><i class="fas fa-trash-alt"></i></button>`;
  liTag.innerHTML = Task.trim();
  ul.appendChild(liTag);
}

/* This function contains the default tasks */
function defaultTasks() {
  const defaultTask1 = {
    description: 'wash the dishes',
    completed: false,
    index: 'default1',
  };
  const defaultTask2 = {
    description: 'Complete To Do list project',
    completed: false,
    index: 'default2',
  };
  addElements(defaultTask1);
  addElements(defaultTask2);
}

defaultTasks();
