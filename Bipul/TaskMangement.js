// Function Declaration: addTask
function addTask(taskName) {
    const task = {
      id: tasks.length + 1,
      name: taskName,
      completed: false
    };
    tasks.push(task);
  }
  
  // Function Expression: completeTask
  const completeTask = function(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
    }
  }
  
  // Arrow Function: getTasks
  const getTasks = () => tasks;
  
  // Task management system
  const tasks = [];
  
  // Add tasks
  addTask("Buy groceries");
  addTask("Clean the house");
  addTask("Finish the report");
  
  // Mark one task as completed
  completeTask(1);
  
  // Display tasks
  console.log("Tasks:");
  getTasks().forEach(task => {
    const status = task.completed ? "(Completed)" : "";
    console.log(`- Task ${task.id}: ${task.name} ${status}`);
  });
  