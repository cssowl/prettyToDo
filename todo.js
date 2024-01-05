window.addEventListener('load', () => {
    const form = document.querySelector('#new-task');
    const input = document.querySelector('#new-task-input');
    const listItem = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const taskContentItem = document.createElement('div');
        taskContentItem.classList.add('content');

        taskItem.appendChild(taskContentItem);

        const taskInputItem = document.createElement('input');
        taskInputItem.classList.add('text');
        taskInputItem.type = 'text';
        taskInputItem.value = task;
        taskInputItem.setAttribute('readonly', 'readonly');

        taskContentItem.appendChild(taskInputItem);

        const taskActionsItem = document.createElement('div');
        taskActionsItem.classList.add('actions');

        const taskEditItem = document.createElement('button');
        taskEditItem.classList.add('edit');
        taskEditItem.innerHTML = '<span class="material-symbols-outlined">edit</span>';

        const taskDeleteItem = document.createElement('button');
        taskDeleteItem.classList.add('delete');
        taskDeleteItem.innerHTML = '<span class="material-symbols-outlined">delete</span>';

        taskActionsItem.appendChild(taskEditItem);
        taskActionsItem.appendChild(taskDeleteItem);

        taskItem.appendChild(taskActionsItem);

        listItem.appendChild(taskItem);

        input.value = '';

        taskEditItem.addEventListener('click', (e) => {
            if (taskEditItem.innerText.toLowerCase() == 'edit') {
                taskEditItem.innerHTML = '<span class="material-symbols-outlined">save</span>';
                taskInputItem.removeAttribute('readonly');
                taskInputItem.focus();
            } else {
                taskEditItem.innerHTML = '<span class="material-symbols-outlined">edit</span>'
                taskInputItem.setAttribute('readonly', 'readonly');
            }
        });

        taskDeleteItem.addEventListener('click', (e) => {
            listItem.removeChild(taskItem);
        });
    });
});