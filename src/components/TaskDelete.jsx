import React from "react";

export default function TaskDelete({ onDelete }) {
    return (
        <button className="btn btn-danger btn-sm ms-2" onClick={onDelete}>
            <i className="fa-solid fa-trash"/>
        </button>
    )
}