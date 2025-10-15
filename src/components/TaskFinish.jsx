import React from "react";

export default function TaskFinish({ onFinish }) {
    return (
        <button className="btn btn-success btn-sm ms-2" onClick={onFinish}>
            <i className="fa-solid fa-check"></i>
        </button>
    )
}