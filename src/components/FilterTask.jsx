import React from "react";
import "./FilterTask.css"

export default function FilterTask({setCurrentFilter, currentFilter}) {
    const isActive = (value) => currentFilter === value ? "active" : ""
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Filtro
            </button>
            <ul className="dropdown-menu">
                <li><a className={`dropdown-item ${isActive("Todos")}`} onClick={() => setCurrentFilter({stateTask: "Todos"})}>Todas as Tarefas</a></li>
                <li><a className={`dropdown-item ${isActive("Finalizado")}`} onClick={() => setCurrentFilter({stateTask: "Finalizado"})}>Tarefas Finalizadas</a></li>
                <li><a className={`dropdown-item ${isActive("Pendente")}`} onClick={() => setCurrentFilter({stateTask: "Pendente"})}>Tarefas Pendentes</a></li>
            </ul>
        </div>
    )
}