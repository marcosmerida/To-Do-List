function taskcompleted(elem, task, id) {
  document.getElementById(elem).addEventListener('change', () => {
    const checkbox = document.getElementById(elem);
    if (checkbox.checked) {
      task.completed = true;
    } else {
      task.completed = false;
    }
    localStorage.setItem(id, JSON.stringify(task));
  });
}

export default taskcompleted;