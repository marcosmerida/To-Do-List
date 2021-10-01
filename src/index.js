/* eslint-disable no-unused-vars */

/* Import section */
import _, { functionsIn, update } from 'lodash';
import './style.css';
import taskcompleted from './status';

/* Variable section */
const ul = document.getElementById('list');
let allTasks = [];
let counter = 0;

/* This function pushes the new task into the allTasks array and saves it in localStorage */
function createTask(e) {
  /*   the data that is stored in allTasks variable is updated here with the localstorage */
  allTasks = JSON.parse(localStorage.getItem('data'));
  if (allTasks === null) {
    allTasks = [];
  }
  let newTask = { description: '', completed: false, index: allTasks.length+1 };
  newTask.description = e;
  /*   This procedure here verify if input text value contains nothing. */
  if (newTask.description === '') {
    document.getElementById('task').placeholder = 'this field cannot be blank';
  } else {
    allTasks.push(newTask);
    updateTasks(allTasks);
  }
}

/* This function updates the localstorage with new Tasks */
function updateTasks(e) {
  localStorage.setItem('data', JSON.stringify(e));
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
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          number.completed = true;
          console.log(number.completed);
          updateTasks(taskArray);
        } else {
          number.completed = false;
          console.log(number.completed);
          updateTasks(taskArray);
        }
      });
      const text = document.createElement('input');
      text.type = 'text';
      text.value = number.description;
      text.id = ('task');
      const removeButton = document.createElement('button');
      removeButton.classList.add('removeTask');
      const trashIcon = document.createElement('i');
      trashIcon.classList.add('fas' , 'fa-trash-alt');
      removeButton.appendChild(trashIcon);
      removeButton.addEventListener('click', (event) =>{
        liTag.style.display = 'none';
        const index = event.target.parentElement.id;
        taskArray.splice(index, 1);
        updateTasks(taskArray);
        for (let i = 0; i < taskArray.length; i++){
          
          }
        updateTasks(taskArray);
        printScreen();
      });
      /* const taskOne = `<input type = 'checkbox' class = "removeTask" id = ${number.index}><input type="text" id = "task" value= "${number.description}"></input></input><button class='removeBook' id='buttonremove' value='${number.index}'><i class="fas fa-trash-alt"></i></button>`; */
      const liTag = document.createElement('li');
      liTag.setAttribute('id', number.index);
      /*  liTag.innerHTML = taskOne.trim(); */
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
  let textTask = document.getElementById('task').value;
  createTask(textTask);
  printScreen();
});

/* Functions and eventListeners excecuted */
printScreen();
