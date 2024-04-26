"use client";
import Head from "next/head";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

function Card({ task }) {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>Deadline: {task.deadline}</p>
    </div>
  );
}

function Component({ tasks, setTasks }) {
  const [taskName, setTaskName] = React.useState("");
  const [deadline, setDeadline] = React.useState("");

  
  const gerarID = () => {
    return uuidv4()
  }

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { id: gerarID(), name: taskName, deadline };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setDeadline("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          name="task_name"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

function ListTasks({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
}

function Page() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const taskStorage = localStorage.getItem("tasks");
    if (taskStorage) {
      setTasks(JSON.parse(taskStorage));
    }
  }, []);

  React.useEffect(() => {
    if (tasks.length > 0) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Head>
        <title>Novas Tarefas</title>
      </Head>

      <Component tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} />
    </>
  );
}

export default Page;
