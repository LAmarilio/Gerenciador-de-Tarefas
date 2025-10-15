import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import FilterTask from "./components/FilterTask"

const initialStateForm = {
  titleTask: "",
  descriptionTask: "",
  stateTask: "Pendente",
  createdAt: "",
  finishedAt: ""
}

export default function App() {
  const [form, setForm] = useState(initialStateForm);
  const [tasks, setTasks] = useState([])
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentStateTasksFilter, setCurrentStateTasksFilter] = useState({ stateTask: "Todos" })

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isInitialized]);

  const addTask = (taskData) => {
    if (taskData.id) {
      const updateTasks = tasks.map(task =>
        task.id === taskData.id ? { ...task, ...taskData } : task
      );
      setTasks(updateTasks)
    } else {
      const newTask = {
        id: Date.now(),
        ...taskData,
        createdAt: new Date().toISOString()
      }
      if (newTask.stateTask === "Finalizado") {
        newTask.finishedAt = newTask.createdAt
      }
      setTasks([...tasks, newTask])
    }
    setForm(initialStateForm)
  }

  const deleteTask = (id) => {
    const updateTasks = tasks.filter(task => task.id !== id)
    setTasks(updateTasks)
  }

  const editTask = (id) => {
    const editingTask = tasks.find(task => task.id === id)
    if (editingTask) {
      setForm(editingTask)
    }
  }

  function filterTasks(state) {
    return tasks.filter(task => task.stateTask === state)
  }

  const changeToFinishStateTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, stateTask: "Finalizado", finishedAt: new Date().toISOString() } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <TaskInput form={form} setForm={setForm} initialStateForm={initialStateForm} onAddTask={addTask} />
          </div>
          <div className="col-md-6">
            <FilterTask setCurrentFilter={setCurrentStateTasksFilter} currentFilter={currentStateTasksFilter.stateTask} />
            <TaskList
              tasks={currentStateTasksFilter.stateTask !== "Todos" ? filterTasks(currentStateTasksFilter.stateTask) : tasks}
              deleteTask={deleteTask}
              editTask={editTask}
              changeToFinishStateTask={changeToFinishStateTask}
            />
          </div>
        </div>
      </div>
    </div>
  )
}