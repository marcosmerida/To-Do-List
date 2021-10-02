function taskcompleted(elem, task, id) {
  document.getElementsByClassName(elem).addEventListener('change', () => {
    const checkbox = document.getElementsByClassName(elem);
    if (checkbox.checked) {
      task.completed = true;
    } else {
      task.completed = false;
    }
    localStorage.setItem(id, JSON.stringify(task));
  });
}

export default taskcompleted;