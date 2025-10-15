import React, { useState } from "react";

export default function TaskInput({ onAddTask, form, setForm, initialStateForm }) {
    function handleSubmit(e) {
        e.preventDefault()
        if (form.titleTask.trim() != "" && form.descriptionTask.trim() != "" && form.stateTask.trim() != "") {
            onAddTask(form)
            setForm(initialStateForm)
        }
    }

    return (
        <div className="fonte">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ms-5">
                    <label htmlFor="titleTask" className="form-label fs-5">Titulo da Tarefa</label>
                    <input
                        className="form-control"
                        type="text"
                        name="titleTask"
                        id="titleTask"
                        style={{ width: "500px" }}
                        value={form.titleTask}
                        onChange={e => {
                            setForm({
                                ...form,
                                titleTask: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="mb-3 ms-5">
                    <label htmlFor="descriptionTask" className="form-label fs-5">Descrição da Tarefa</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="descriptionTask"
                        id="descriptionTask"
                        maxLength="180"
                        style={{ width: "500px", height: "100px", resize: "none" }}
                        value={form.descriptionTask}
                        onChange={e => {
                            setForm({
                                ...form,
                                descriptionTask: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="mb-3 ms-5">
                    <p className="fs-5">Andamento da Tarefa</p>
                    <div className="form-check ms-3 mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="stateTask"
                                id="stateTask1"
                                value="Pendente"
                                checked={form.stateTask === "Pendente"}
                                onChange={e => setForm({ ...form, stateTask: e.target.value })}
                            />
                        <label htmlFor="stateTask1" className="form-check-label">Pendente</label>
                    </div>
                    <div className="form-check ms-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="stateTask"
                                id="stateTask2"
                                value="Finalizado"
                                checked={form.stateTask === "Finalizado"}
                                onChange={e => setForm({ ...form, stateTask: e.target.value })}
                            />
                        <label htmlFor="stateTask2" className="form-check-label">Finalizado</label>
                    </div>
                </div>
                <div className="mt-3 ms-5 mt-4">
                    <button type="submit" className="btn btn-primary">
                        {form.id ? "Atualizar Tarefa" : "Salvar Tarefa"}
                    </button>
                </div>
            </form>
        </div>
    )
}