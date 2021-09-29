export function taskcompleted(elem, task) {

    document.getElementById(elem).addEventListener('change', (evento) => {
    if (document.getElementById(elem).checked) {
        task.completed = true;
        console.log(task);
    } else {
        task.completed = false;
        console.log(task);
    }
    });
}