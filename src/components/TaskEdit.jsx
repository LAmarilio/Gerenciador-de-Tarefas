import React from "react";

export default function TaskEdit({ onEdit }) {
    return (
        <button className="btn btn-warning btn-sm ms-2" onClick={onEdit} >
            <i class="fa-solid fa-pencil" />
        </button>
    )
}