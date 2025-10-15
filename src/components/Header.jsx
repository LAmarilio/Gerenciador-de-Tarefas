import React from "react"
import "./Header.css"

export default function Header() {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <i className="fa-solid fa-pen-to-square fa-2x me-3 ms-3 text-light"></i>
                <span className="fs-2 text-light">Lista de Tarefas</span>
            </a>
        </header>
    )
}