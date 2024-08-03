import React, { useState } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    "Learn React",
    "Make an Project with React",
    "Go for a Walk",
  ]);

  const addTask = (newTask) => {
    setTask([newTask, ...tasks]);
  };

  const removeTask = (taskToRemove) => {
    setTask(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="w-[400px] mt-20 mx-auto">
      <Header />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
