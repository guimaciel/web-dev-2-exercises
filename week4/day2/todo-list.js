// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function () {
      task.complete = true;
    },
    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`
      );
    },
  };
  return task;
  // taskTitles.push(title);
  // taskComplete.push(false);
}

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   const title = task.title;
//   const complete = task.complete;
//   console.log(`${title} has${complete ? ' ' : ' not '}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task2.logTaskState(); // Clean Cat Litter has not been completed
console.log('complete task', task2.completeTask());
task2.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person('Arthur'); // {name:'Arthur'}
