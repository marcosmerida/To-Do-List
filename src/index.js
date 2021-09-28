import _, { functionsIn } from "lodash";
import "./style.css";

let allTasks = [];
let count = 0;
const ul = document.getElementById("list");

document.getElementById("button").addEventListener("click", (description) => {
  count++;
  const taskobj = { description, completed: false, index: count };
  taskobj["description"] = document.getElementById("task").value;
  taskobj["index"] = count;
  console.log(taskobj);
  allTasks.push(taskobj);
  console.log(allTasks);

  const liTag = document.createElement("li");
  const Tasknumber = `<input type = 'checkbox' id = '${count}'><p>${taskobj["description"]}</p><button class='removeBook' id='buttonremove' value='${count}'><i class="fas fa-trash-alt"></i></button>`;
  liTag.innerHTML = Tasknumber.trim();
  ul.appendChild(liTag);
});
