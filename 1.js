// const todoForm = document.querySelector('#todo-form');
// const todoList = document.querySelector('#todo-list');
// const taskInput = document.querySelector('#task');

// // Add task to the to-do list
// todoForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const task = taskInput.value;
//   console.log(task);
//   if (task === '') return;
//   const li = document.createElement('li');
//   li.innerHTML = `
//     ${task}
//     <button class="delete-button">Delete</button>
//   `;
//   todoList.appendChild(li);
//   taskInput.value = '';
// });

// // Delete task from the to-do list
// todoList.addEventListener('click', (e) => {
//   if (e.target.className === 'delete-button') {
//     e.target.parentElement.remove();
//   }
// });
function sayHello() {
  console.log("Hello");
}

function run() {
sayHello();
}
console.log(run);
