const userIdInput = document.getElementById('userIdInput');
const getTasks = document.getElementById('getTasks');
const taskList = document.getElementById('taskList');

getTasks.addEventListener('click', () => {
    const userId = userIdInput.value;

    // Clear previous task list
    taskList.innerHTML = '';

    // Fetch tasks for the specified user
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } 
    })
    .then((data) => {
        if (data.length === 0) {
            throw new Error('Пользователь с указанным ID не найден');
        }
        const taskStart = document.createElement('ul');

        data.forEach((task) => {
            const taskDone = document.createElement('li');
            taskDone.textContent = task.title;

            if (task.completed) {
                taskDone.classList.add('completed');
            }

            taskStart.appendChild(taskDone);
        });

        taskList.appendChild(taskStart);
    })
    .catch((error) => {
        console.error('Error:', error);
        taskList.textContent = error.message;
    });
})