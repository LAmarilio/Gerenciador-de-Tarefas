import React from "react";
import TaskDelete from "./TaskDelete";
import TaskEdit from "./TaskEdit";
import TaskFinish from "./TaskFinish";

export default function TaskList({ tasks, deleteTask, editTask, changeToFinishStateTask }) {
  return (
    <div className="container mt-4">
      {tasks.length === 0 ? (
        <p className="text-muted">Nenhuma tarefa adicionada ainda.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="card mb-3">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{task.titleTask}</h5>
              <p className="card-text">{task.descriptionTask}</p>
              <span className={`badge mb-2 ${task.stateTask === "Finalizado" ? "bg-success" : "bg-warning text-dark"}`} style={{width: "25%"}}>
                {task.stateTask}
              </span>
              <div className="mt-auto align-self-end">
                <TaskFinish onFinish={() => changeToFinishStateTask(task.id)}/>
                <TaskEdit onEdit={() => editTask(task.id)}/>
                <TaskDelete onDelete={() => deleteTask(task.id)}/>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}