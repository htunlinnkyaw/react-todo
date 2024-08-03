import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <div className="mt-2 flex justify-between bg-black text-white px-4 py-2 rounded">
        <p className="font-serif">Tasks</p>
        <p className="font-serif">Done ({tasks.length}/0)</p>
      </div>
      {tasks.length === 0 && (
        <p className="text-xl font-serif text-center mt-20 text-gray-400 ">
          There is no tasks !
        </p>
      )}
      {tasks.map((task) => (
        <Task key={task} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
